import FilmsList from '../../components/FilmsList/FilmsList'
import { fetchTrendingApi } from '../../api/fetchApi';
import { useEffect, useState } from 'react';

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchTrendingApi(3).then(setMovies);
	}, []);

	return (
		<>
			<h1>Trending movies</h1>
			<FilmsList movies={movies}/>
		</>
	);
}

export default Home;