import { useState, useEffect } from "react"
import CardItem from "./CardItems"

const ListMovies = ({ title, url }) => {

    const [movies, setMovies] = useState([])

    //Fetch of Movies in list
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${url}/?api_key=41514cf9c5004dbe47144dbf1928e39c`)
            .then(res => res.json())
            .then(data => setMovies(data.results))

    }, [])
    return (
        <div className="movie-list">

            {movies.map(movie => (
                <CardItem key={movie.id}
                    title={movie.title}
                    img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    link={`/${movie.id}`}
                />
            ))}
        </div>
    )

}

export default ListMovies