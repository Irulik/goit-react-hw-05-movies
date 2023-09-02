import { fetchCast } from '../../api/fetchApi';
import {
    CastPerson,
    CastImg,
    CastActor,
    CastCharacter,
} from "./Cast.styled.jsx"
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'api/fetchApi';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
    Movie,
    MovieDesc,
    MovieLeft,
    MovieRight,
    CastGroup,
    MoviePoster,
    MovieTitle,
    MovieRating,
    MovieGenre,
    MovieDescription,
    MovieButtons,
    MovieCast,
    MovieReviews,
} from '../../pages/MovieDetails/MovieDetails.styled';


const Cast = () => {
    const productId = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [genreList, setGenreList] = useState([]);
    const [cast, setCast] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovieDetails(productId.id).then((data) => {
            setMovie(data);
            setGenreList(data.genres);
        });
        fetchCast(productId.id).then((data) => {
            setCast(data.cast);
        });
    }, [productId.id]);

    let posterPath;
    if (movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    } else {
        posterPath = 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
    }

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
                    <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                        <MovieCast>Cast</MovieCast>
                    </Link>
                    <Link state={{ from: location }} to={`/movies/${movie.id}/reviews`}>
                        <MovieReviews>Reviews</MovieReviews>
                    </Link>
                </MovieButtons>
                <CastGroup>
                    {cast.map((person, index) => (
                        <CastPerson key={index}>
                            <CastImg>
                                <img
                                    src={person.profile_path
                                        ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                                        : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
                                    alt={person.name} />
                            </CastImg>
                            <CastActor>Actor: {person.name}</CastActor>
                            <CastCharacter>Character: {person.character}</CastCharacter>
                        </CastPerson>
                    ))}
                </CastGroup>
            </Movie>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </> 
    );
};
export default Cast;



// const Cast = ({ id }) => {
//     const [cast, setCast] = useState([]);

//     useEffect(() => {
//         fetchCast(id).then((data) => {
//             setCast(data.cast);
//         });
//     }, [id]);
//     // console.log(cast);
//     // const top20Cast = cast.slice(0, 20); //на випадок обмеження кількості акторів
//     return (
//         cast.map((person, index) => (
//             <CastPerson key={index}>
//                 <CastImg>
//                     <img
//                         src={person.profile_path
//                             ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
//                             : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
//                         alt={person.name} />
//                 </CastImg>
//                 <CastActor>Actor: {person.name}</CastActor>
//                 <CastCharacter>Character: {person.character}</CastCharacter>
//             </CastPerson>
//         ))
//     );
// };
// export default Cast;
