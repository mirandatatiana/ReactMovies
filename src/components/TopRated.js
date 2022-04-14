import { useState, useEffect } from "react"
import CardItem from "./CardItems"
import "./App.css"
import { Pagination } from "@mui/material"
import NavBar from "./NavBar"


//Function fot Top Rated
const TopRated = () => {
    const [movies, setMovies] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=41514cf9c5004dbe47144dbf1928e39c&page=${page}`)
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
                    <CardItem key={movie.id}
                        title={movie.title}
                        img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        link={`/${movie.id}`} />
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

export default TopRated