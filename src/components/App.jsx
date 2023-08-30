import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MoviesDetails from '../pages/MovieDetails/MovieDetails';
import NotFound from '../pages/NotFound/NotFound';
import Layout from './Layout';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<>
					<Route index element={<div><Home/></div>}/>
					<Route path="/movies" element={<div><Movies/></div>}/>
					<Route path="/movies/:id" element={<div><MoviesDetails/></div>}/>
					<Route path="*" element={<NotFound/>}/>
				</>
			</Route>
		</Routes>
	);
}

