import React from 'react'

import { useLocation } from 'react-router-dom'
import MovieVision from '../components/Movie/MovieVision'
import './DetailPage.css'

export default function DetailPage() {
  const {state} = useLocation() // Récupère les données du paramètre state transmise dans le Link 
  return (
    <MovieVision movie={state.movie}/> // Transmets les données vers le component appelé à l'aide du paramètre movie
  )
}
