import { useState, useEffect } from "react"
import CardsMovies from "./CardsMovies"
import { Paper } from "@mui/material"
import "./App.css"


const TopRated = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=41514cf9c5004dbe47144dbf1928e39c")
            .then(res => res.json())
            .then(data => setMovies(data.results))

    }, [])

    return (
        <div className="App">
            <Paper className="paper" style={{ maxHeight: 300, overflow: 'auto' }}>
                <CardsMovies
                    title="Top Rated"
                    movies={movies} />
            </Paper>

        </div>
    )
}

export default TopRated