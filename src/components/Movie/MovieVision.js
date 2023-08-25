import React from 'react'
import { useParams } from 'react-router-dom'
import star from '../../assets/Star_full.png';
export default function MovieVision({ movie }) {
    const { id } = useParams(); // Récupère l'id pour l'entrer dans le path à l'aide d'useParams
    const { title, poster, overview, rating } = movie // Déstructure les données réceptionné lors de l'appel du component
    
  return (
    <div key={id} className='container vision'>
        <h1 className='vision__title'>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${poster}`} width={"300px"} alt= 'Visuel du poster du film'></img>
        <p className='vision__overview'> <b>Resume</b> :  {overview} </p>
        <p className='vision__rating'> <b>Rating</b> : {rating} / 10 <img src={star} width={"12px"} alt="etoile"/></p>
    </div>
  )
}
