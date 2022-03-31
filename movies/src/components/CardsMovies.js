import CardItem from "./CardItems"
const CardsMovies = ({ title, movies }) => {
    return (
        <div>
            <h2>{title}</h2>
            {movies.map(movie =>
                <CardItem
                    title={movie.title}
                    img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    link={`/${movie.id}`}
                />
            )}

        </div>

    )
}


export default CardsMovies