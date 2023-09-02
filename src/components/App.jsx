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
                    <Route index element={<div><Home/></div>}/>
                    <Route path="/movies" element={<div><Movies/></div>}/>
                    <Route path="/movies/:id" element={<div><MoviesDetails/></div>}/>
                    <Route path="/movies/:id/cast" element={<div><Cast/></div>}/>
                    <Route path="/movies/:id/reviews" element={<div><Reviews/></div>}/>
                    <Route path="*" element={<NotFound/>}/>
                </>
            </Route>
        </Routes>
    );
}

