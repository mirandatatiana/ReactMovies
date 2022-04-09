import Slider from "react-slick";
import "./Carrauselstyle.css"
import { useState, useEffect } from "react"
import { CardMedia } from "@mui/material";


const Carrousel = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular/?api_key=41514cf9c5004dbe47144dbf1928e39c")
            .then(res => res.json())
            .then(data => setMovies(data.results))

    }, [])

    return (
        <div className="container" >

            <Slider

                dots={true}
                arrows={true}

                speed={500}
                slidesToShow={1}
                adaptiveHeight={true}
                initialSlide={0}


            >

                {movies.map((movie) => (



                    <img className="img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />

                ))}


            </Slider>
        </div >
    )
}

export default Carrousel