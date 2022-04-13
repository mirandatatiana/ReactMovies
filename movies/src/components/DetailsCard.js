import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Avatar } from "@mui/material"
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, Link } from "@mui/material"
import "./App.css"
import { margin } from "@mui/system"
import NavBar from "./NavBar"


const DetailsCard = () => {

    const params = useParams()
    const [movies, setMovies] = useState([])

    useEffect((id_movie) => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idMovie}?api_key=41514cf9c5004dbe47144dbf1928e39c`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.idMovie])

    return (
        <div>
            <NavBar />
            <Card
                sx={{
                    margin: 5,
                    borderRadius: 5,
                }}>

                <CardActionArea

                    sx={{
                        backgroundColor: "#5c6bc0",
                    }}>

                    <CardMedia
                        component="img"
                        height="700"
                        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                        alt="imagen de pelicula"
                    />
                    <CardContent>
                        <Typography sx={{ margin: 3 }} gutterBottom variant="h5" component="div">
                            {movies.title}
                        </Typography>
                        <Typography sx={{ margin: 3 }} gutterBottom variant="h5" component="div">
                            {movies.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
        // <div>
        //     <h2>    {movies.original_title}</h2>

        //     <img src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`} />
        //     <p>{movies.overview}</p>
        // </div>
    )
}
export default DetailsCard