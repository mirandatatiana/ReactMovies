import { useState, useEffect } from "react"
import CardsMovies from "./CardsMovies"
import "./App.css"
import { Paper } from "@mui/material"
import ListMovies from "./ListMovies"
import CardItem from "./CardItems"
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, Link } from "@mui/material"
import NavBar from "./NavBar"


const Popular = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular/?api_key=41514cf9c5004dbe47144dbf1928e39c")
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
        // <ListMovies title="Popular Movies" url="popular" />




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