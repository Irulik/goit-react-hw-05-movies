import { useState, useEffect } from 'react';
import { fetchReview } from 'api/fetchApi';
import {
    Review,
    ReviewAuthor,
    ReviewText,
} from "./Reviews.styled.jsx"
import { useLocation, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'api/fetchApi';
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
    ReviewsGroup,
} from '../../pages/MovieDetails/MovieDetails.styled';


const Reviews = () => {
    const productId = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [genreList, setGenreList] = useState([]);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovieDetails(productId.id).then((data) => {
            setMovie(data);
            setGenreList(data.genres);
        });
        fetchReview(productId.id).then((data) => {
            setReviews(data.results);
        });
    }, [productId.id]);

    let posterPath;
    if (movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    } else {
        posterPath = 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
    }

    // console.log(reviews);

    return (
        <>
            <Movie>
                <MovieDesc>
                    <MovieLeft>
                        <button onClick={() => navigate(-1)}>Go Back</button>
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
                    <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                        <MovieReviews>Reviews</MovieReviews>
                    </Link>
                </MovieButtons>
                <ReviewsGroup>
                    { reviews.length !== 0 ? (
                    	reviews.map((review, index) => (
				            <Review key={index}>
				                <ReviewAuthor>{review.author}</ReviewAuthor>
				                <ReviewText>{review.content}</ReviewText>
				            </Review>
		        		))
                    ) : ( <span>Sorry, there is no any information here</span>)}
                </ReviewsGroup>
            </Movie>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </> 
    );
};
export default Reviews;