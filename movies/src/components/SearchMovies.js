import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "./searchstyle.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const SearchMovies = () => {
    const params = useParams("")

    const [movies, setMovies] = useState([])


    useEffect((search) => {
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=41514cf9c5004dbe47144dbf1928e39c&query=${params.movie}`)
            .then(res => res.json())
            .then(data => setMovies(data.results))

    }, [])
    //             setMovies(data))
    // }, [params.movie])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/search/movie/?api_key=41514cf9c5004dbe47144dbf1928e39c`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMovies(data.results)
    //         })
    // }, [searchParams])





    return (
        <div className="search">

            <ImageList >
                {movies.map((movie) => (
                    <ImageListItem sx={{ width: 300, margin: 1 }}>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={movie.title}

                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${movie.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>

    )


}
export default SearchMovies


// export default function TitlebarImageList() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }}>
//
//       {movies.map((movie) => (
//         <ImageListItem>
//           <img
//             src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={movie.title}
//            
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }