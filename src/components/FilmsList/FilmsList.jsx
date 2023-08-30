import { useLocation, Link } from 'react-router-dom';
import { ListFilms, ItemFilms, MovieMiniPoster } from './FilmsList.styled';
import React, { useState, useEffect } from 'react';

const FilmsList = ({ movies }) => {
	const location = useLocation();
	
	const [isLoading, setIsLoading] = useState(true);
	const [movieList, setMovieList] = useState([]);
	
	useEffect(() => {
		const fetchMovies = async () => {
			while (typeof movies.results === 'undefined') {
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
			
			setMovieList(movies.results);
			setIsLoading(false);
		};

		fetchMovies();
	}, [movies]);

	return (
		<ListFilms>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				movieList.map((movie) => (
					<ItemFilms key={movie.id}>
						<MovieMiniPoster><img src={ "https://image.tmdb.org/t/p/w500//" + movie.poster_path } alt={movie.title}/></MovieMiniPoster>
						<Link state={{ from: location }} to={`/movies/${movie.id}`}>
							{movie.original_title}
						</Link>
					</ItemFilms>
				))
			)}
		</ListFilms>
	);
};

export default FilmsList;
