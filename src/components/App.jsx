import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Layout from './Layout';

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MoviesDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <>
                    <Route index element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/movies/:id" element={<MoviesDetails/>}/>
                    <Route path="/movies/:id/cast" element={<Cast/>}/>
                    <Route path="/movies/:id/reviews" element={<Reviews/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </>
            </Route>
        </Routes>
    );
}

