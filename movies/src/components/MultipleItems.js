// import { useState, useEffect } from "react"
// import Slider from "react-slick";
// import { Link } from 'react-router-dom'
// import { display } from "@mui/system";
// import TopRatedStyle from ".//TopRatedStyle.css";


// const baseImgUrl = "https://image.tmdb.org/t/p"
// const size = "w500"


// const MultipleItems = () => {

//     const settings = {
//         dots: false,
//         infinite: false,
//         draggable: true,
//         slickGoTo: true,
//         speed: 500,
//         slidesToShow: 9,
//         slidesToScroll: 3,

//         vertical: true

//     };

//     const [topRated, setTopRated] = useState([])

//     useEffect(() => {
//         fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=41514cf9c5004dbe47144dbf1928e39c")
//             .then(res => res.json())
//             .then(data => setTopRated(data.results))

//     }, [])

//     return (

//         <div className="card-container">
//             <Slider {...settings}>
//                 {topRated.map(moviestoprated => (

//                     < Link to={`/toprated/${moviestoprated.id}`}>
//                         <h2> {moviestoprated.title}</h2>
//                         <img src={`${baseImgUrl}/${size}${moviestoprated.poster_path}`} />

//                     </Link>
//                 ))}
//             </Slider>
//         </div>
//     );
// }


// export default MultipleItems