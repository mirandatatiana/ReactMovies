import Slider from "react-slick";
import "./Carrauselstyle.css"
import { useState, useEffect } from "react"

//Fetch Carrousel
const Carrousel = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=41514cf9c5004dbe47144dbf1928e39c")
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])
    //Carrousel
    return (
        <div className="container" >
            <Slider
                dots={true}
                arrows={true}
                slidesToShow={1}
                initialSlide={0}
                autoplay={true}
                autoplaySpeed={2000}
            >
                {movies.map((movie) => (
                    <img key={movie.id}
                        alt={movie.title}
                        className="img-carrusel"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                ))}
            </Slider>
        </div >
    )
}

export default Carrousel