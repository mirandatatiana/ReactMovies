import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "./searchstyle.css"
import CardItem from "./CardItems";
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, Link } from "@mui/material"


const SearchMovies = () => {
    const params = useParams("")

    const [movies, setMovies] = useState([])


    useEffect((search) => {
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=41514cf9c5004dbe47144dbf1928e39c&query=${params.movie}`)
            .then(res => res.json())
            .then(data => setMovies(data.results))

    }, [])

    return (
        <div>
            <NavBar />
            <div className="popular">
                {movies.map(movie => (
                    <Card
                        sx={{
                            maxWidth: 500,
                            backgroundColor: "#5c6bc0",
                            margin: 2,
                            borderRadius: 5
                        }}>
                        <CardActionArea
                            sx={{
                                backgroundColor: "#5c6bc0"
                            }}>
                            <CardMedia
                                component="img"
                                height="700"
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions >
                            <Button size="small" color="error">

                                <Link
                                    sx={{
                                        textDecoration: "none",
                                        color: "#fafafa"
                                    }}
                                    href={`/${movie.id}`}>Entrar</Link>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )


}
export default SearchMovies


