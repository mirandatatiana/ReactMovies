import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Card, CardActionArea, CardMedia, Typography, CardContent } from "@mui/material"
import "./App.css"
import NavBar from "./NavBar"

// Fetch of Details Cards
const DetailsCard = () => {

    const params = useParams()
    const [movies, setMovies] = useState([])

    useEffect((id_movie) => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idMovie}?api_key=41514cf9c5004dbe47144dbf1928e39c`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.idMovie])
    //Details Card
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
                        alt={movies.title}
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
    )
}
export default DetailsCard