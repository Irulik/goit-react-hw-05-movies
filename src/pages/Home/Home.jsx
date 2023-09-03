import FilmsList from '../../components/FilmsList/FilmsList'
import { fetchTrendingApi } from '../../api/fetchApi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const location = useLocation();
    const navigationHistory = JSON.parse(sessionStorage.getItem('navigationHistory')) || [];

	useEffect(() => {
		fetchTrendingApi(3).then(setMovies);
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
