import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Avatar } from "@mui/material"


const DetailsCard = () => {

    const params = useParams()
    const [movies, setMovies] = useState([])

    useEffect((id_movie) => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idMovie}?api_key=41514cf9c5004dbe47144dbf1928e39c`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.idMovie])

    return (
        // <h2>{params.idMovie}</h2>

        <div>
            <h2>    {movies.original_title}</h2>

            <img src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`} />
            <p>{movies.overview}</p>
        </div>
    )
}
export default DetailsCard