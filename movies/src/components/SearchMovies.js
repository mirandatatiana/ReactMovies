import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

import CardItem from "./CardItems";
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, Link, Pagination } from "@mui/material"
import Pages from "./Pages"


const SearchMovies = () => {
    const params = useParams("")

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [movies, setMovies] = useState([])
    const [totalPages, setTotalPages] = useState(1)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=41514cf9c5004dbe47144dbf1928e39c&query=${params.movie}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })

    }, [page])

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
                                backgroundColor: "#5c6bc0",

                            }}>
                            <CardMedia
                                sx={{}}
                                component="img"
                                height="700"
                                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                alt="green iguana"
                            />
                            <CardContent >
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
            <Pagination
                count={totalPages > 500 ? 500 : totalPages}
                page={page}
                onChange={handleChange}

            />
        </div>
    )


}
export default SearchMovies


