import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/fetchApi';

import {
	Movie,
	MovieDesc,
	MovieLeft,
	MovieRight,
	GoBack,
	CastGroup,
	MoviePoster,
	MovieTitle,
	MovieRating,
	MovieGenre,
	MovieDescription,
	MovieButtons,
	MovieCast,
	MovieReviews,
	ReviewsGroup,
} from './MovieDetails.styled';
import Cast from "../../components/Cast/Cast"
import Reviews from "../../components/Reviews/Reviews"

const MovieDetails = () => {
	const productId = useParams();
	const [movie, setMovie] = useState({});
	const [genreList, setGenreList] = useState([]);
	const [isCastVisible, setIsCastVisible] = useState(false);
	const [isReviewsVisible, setIsReviewsVisible] = useState(false);

	useEffect(() => {
		fetchMovieDetails(productId.id).then((data) => {
			setMovie(data);
			setGenreList(data.genres);
		});
	}, [productId.id]);
	
	const toggleCastVisibility = () => {
		setIsCastVisible(!isCastVisible);
	};
	const toggleReviewsVisibility = () => {
		setIsReviewsVisible(!isReviewsVisible);
	};

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
						<GoBack><NavLink to="/">Go Back</NavLink></GoBack>
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
					<MovieCast onClick={toggleCastVisibility}>See Cast</MovieCast>
					<MovieReviews onClick={toggleReviewsVisibility}>See Reviews</MovieReviews>
				</MovieButtons>
				<CastGroup style={{ display: isCastVisible ? 'flex' : 'none' }}>
					<Cast key={productId.id} id={productId.id}></Cast>
				</CastGroup>
				<ReviewsGroup style={{ display: isReviewsVisible ? 'block' : 'none' }}>
					<Reviews key={productId.id} id={productId.id}></Reviews>
				</ReviewsGroup>
			</Movie>
		</> 
	);
};
export default MovieDetails;