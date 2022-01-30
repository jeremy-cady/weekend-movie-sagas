import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";


function Description() {
    const dispatch = useDispatch();
    const history = useHistory();
    const selectedMovie = useSelector(store => store.setSelectedMovie);
    const genres = useSelector(store => store.genres);


    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    console.log('selected movie is:', selectedMovie);
    console.log('genres are:', genres);
    console.log();


    return(
        <>
            <button onClick={() => history.push('/')}>⬅️Back To List</button>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster}/>
            <h3>{selectedMovie.description}</h3>
            <h3>{genres.genres}</h3>
        </>
    );
}

export default Description;