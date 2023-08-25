import axios from "axios";
  // Axios transforme automatiquement les données collectés en json
  export default async function getMovies(setDetails) {
  try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=78fbca37ecb7b737ea3114f0a364d858') // clé publique
      const movies = response.data.results
      const movieDetails = movies.map((movie) => ({
        "id" : movie.id,
        "title" : movie.title,
        "poster" : movie.poster_path,
        "overview" : movie.overview,
        "adult" : movie.adult,
        "rating" : movie.vote_average
    })) // Schema de l'Objet de la requête
      setDetails(movieDetails) // Ajoute les données dans un useState
    } catch (error) {
      alert(`Une erreur s'est produite : ${error.message}`);
    }
  }
// Ici sera écrit les autres fonctions qui utiliserons l'Api : 