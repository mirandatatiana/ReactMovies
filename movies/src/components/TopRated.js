import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const baseImgUrl = "https://image.tmdb.org/t/p"
const size = "w500"

const TopRated = () => {

    const [topRated, setTopRated] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated/?api_key=41514cf9c5004dbe47144dbf1928e39c")
            .then(res => res.json())
            .then(data => setTopRated(data.results))

    }, [])


    console.log(topRated)
    return (
        <div>
            <h1>toprated</h1>
            <div className="card-container">
                {topRated.map(moviestoprated => (
                    < Link to={`/toprated/${moviestoprated.id}`}>
                        <div className="card">
                            <h2>{moviestoprated.title}</h2>
                            <img src={`${baseImgUrl}/${size}${moviestoprated.poster_path}`} />

                        </div>




                    </Link>



                )


                )}


            </div>

        </div>

    )
}

export default TopRated