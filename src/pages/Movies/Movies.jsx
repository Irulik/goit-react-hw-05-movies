import { useState, useEffect } from 'react';
import { fetchSearchApi } from 'api/fetchApi';
import { useSearchParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import {
    MoviesForm,
    MoviesInput,
    MoviesList,
    MoviesSearchButton,
    MovieTitle,
    LinkItem,
} from '../Page.styled';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState('');
    const inputParam = searchParams.get('filter') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (inputParam) {
            setInput(inputParam);
            fetchMovies(inputParam);
        }
    }, [inputParam]);

    const fetchMovies = async (query) => {
        try {
            const { results } = await fetchSearchApi(query);
            if (results.length < 1) {
                Notiflix.Notify.warning("We can't find it, try again");
            }
            setMovies(results);
        } catch (error) {
            Notiflix.Notify.warning('Something wrong, try again please');
        }
    };

    const onSubmit = (e) => {
        if (!input) {
            Notiflix.Notify.warning('Please fill in the gap');
        }
        e.preventDefault();
        setSearchParams(input !== '' ? { filter: input } : {});
        setInput('');

        fetchMovies(input);
    };

    const onChangeInput = value => {
        setInput(value);
    };

    if (!movies) {
        return null;
    }

    return (
        <>
            <MoviesForm onSubmit={onSubmit}>
                <MoviesInput
                    type="text"
                    value={input}
                    name="input"
                    onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
                />
                <MoviesSearchButton type="submit">Search</MoviesSearchButton>
            </MoviesForm>
            {movies && (
                <MoviesList>
                    {movies.map(movie => {
                        let posterPath;
                        if (movie.poster_path) {
                            posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
                        } else {
                            posterPath = 'https://content.rozetka.com.ua/goods/images/big/274786444.jpg';
                        }
                        return (
                            <LinkItem key={movie.id} to={`${movie.id}`} state={{ from: location }}>
                                <img src={posterPath} width="400" alt={movie.title} />
                                <MovieTitle>{movie.title}</MovieTitle>
                            </LinkItem>
                        );
                    })}
                </MoviesList>
            )}
        </>
    );
};

export default Movies;


