import FilmsList from '../../components/FilmsList/FilmsList'
import { fetchTrendingApi } from '../../api/fetchApi';
import { useEffect, useState, useMemo  } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const location = useLocation();

	useEffect(() => {
		fetchTrendingApi(3).then(setMovies);
	}, []);

	const navigationHistory = useMemo(() => {
	    return JSON.parse(sessionStorage.getItem('navigationHistory')) || [];
	}, []);

	useEffect(() => {
	    navigationHistory.push(location.pathname);
	    sessionStorage.setItem('navigationHistory', JSON.stringify(navigationHistory));
	}, [location.pathname, navigationHistory]);

	return (
		<>
			<h1>Trending movies</h1>
			<FilmsList movies={movies}/>
		</>
	);
}

export default Home;
