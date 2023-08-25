import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getMovies from '../../services/api'

export default function MovieDetails() {
    const [ movies, setMovies] = useState([]) // Tableau des données de la requête
    const [ filterRating, setFilterRating] = useState('') // Permets de filtrer à l'aide d'un input la note moyenne

    // Appel de l'Api avec un Get  
    useEffect(() => {
        getMovies(setMovies); // On donne à movies les valeurs récupèrés de l'Api sous le format du Schema
    }, []);
  return (
    <div className='container'>
        <div>
            <label className='container__filtre'> Filter by rating (Lowest) : </label>
            <input 
            placeholder='0 - 10'
            type='number'
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}>
            </input> 
        </div>
    <div className='home'>
        {movies && movies.filter((movie) =>  movie.rating >= filterRating && movie.rating <= 10).map((filteredMovie) => {
        return ( // Affiche les films filtrés
            <>
                <Link 
                to={`/${Number(filteredMovie.id)}`} 
                state={{movie: filteredMovie}} // Sauvegarde les données dans l'useLocation pour l'envoyer à d'autre Route
                key={filteredMovie.id} 
                className='movie-card'
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${filteredMovie.poster})`, backgroundSize: 'cover' }}
                >
                    <h1 className='card__title'>{filteredMovie.title}</h1>
                    <div className='card__filter'></div>
                    <div className=' card__infos'>
                        <p className='card__overview'>{filteredMovie.overview}</p>
                        <p >Rate : {filteredMovie.rating}</p>
                    </div>
                </Link>
            </>
        )
        })
        }
        </div>
      </div>
  )
}
