import { useState, useEffect } from "react"
import CardsMovies from "./CardsMovies"
import "./App.css"
import { Paper } from "@mui/material"


const Popular = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular/?api_key=41514cf9c5004dbe47144dbf1928e39c")
            .then(res => res.json())
            .then(data => setMovies(data.results))

    }, [])

    return (
        <div className="App">
            <Paper className="paper" style={{ maxHeight: 300, overflow: 'auto' }}>
                <CardsMovies
                    title="Popular Movis"
                    movies={movies} />
            </Paper>

        </div>

    )
}

export default Popular


 // <div>
        //     <h1>Popular</h1>
        //     <div className="card-container">
        //         {popular.map(moviespopular => (
        //             < Link to={`/popular/${moviespopular.id}`}>
        //                 <div className="card">
        //                     <h2>{moviespopular.title}</h2>
        //                     <img src={`${baseImgUrl}/${size}${moviespopular.poster_path}`} />
        //                 </div>
        //             </Link>
        //         ))}
        //     </div>
        // </div>