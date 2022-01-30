import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const onSelect = (movie, genres) => {
        console.log('movie is:', movie.title);
        console.log('genres are:', genres);
        dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: movie
        })
        history.push(`/description`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={()=>onSelect(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;