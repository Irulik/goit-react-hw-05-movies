// import { Suspense, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/fetchApi';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
    Movie,
    MovieDesc,
    MovieLeft,
    MovieRight,
    MoviePoster,
    MovieTitle,
    MovieRating,
    MovieGenre,
    MovieDescription,
    MovieButtons,
    MovieCast,
    MovieReviews,
} from './MovieDetails.styled';

const MovieDetails = () => {
    const productId = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [genreList, setGenreList] = useState([]);
    const navigate = useNavigate();
    const navigationHistory = JSON.parse(sessionStorage.getItem('navigationHistory')) || [];

    useEffect(() => {
        fetchMovieDetails(productId.id).then((data) => {
            setMovie(data);
            setGenreList(data.genres);
        });
    }, [productId.id]);

    let posterPath;
    if (movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    } else {
        posterPath = 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
    }

    const goBackToPreviousValidUrl = () => {
        let previousUrl = '';
        for (let i = navigationHistory.length - 1; i >= 0; i--) {
            const url = navigationHistory[i];
            if (!url.includes('cast') && !url.includes('reviews') && url !== location.pathname) {
                console.log();
                previousUrl = url;
                break;
            }
        }
        navigate(previousUrl || '/movies');
    };

    return (
        <>
            <Movie>
                <MovieDesc>
                    <MovieLeft>
                        <button onClick={goBackToPreviousValidUrl}>Go Back</button>
                        <MoviePoster><img src={ posterPath } alt={movie.title}/></MoviePoster>
                    </MovieLeft>
                    <MovieRight>
                        <MovieTitle>{ movie.title }</MovieTitle>
                        <MovieRating>Rating: { movie.vote_average }</MovieRating>
                        {genreList.map((genre, index) => (
                            <MovieGenre key={index}>Genres: { genre.name }</MovieGenre>
                        ))}
                        <MovieDescription>Overview: { movie.overview }</MovieDescription>
                    </MovieRight>
                </MovieDesc>
                <MovieButtons>
                    <Link state={{ from: location }} to={`/movies/${movie.id}/cast`}>
                        <MovieCast>Cast</MovieCast>
                    </Link>
                    <Link state={{ from: location }} to={`/movies/${movie.id}/reviews`}>
                        <MovieReviews>Reviews</MovieReviews>
                    </Link>
                </MovieButtons>
            </Movie>
        </> 
    );
};
export default MovieDetails;


