import ListMovies from "./ListMovies";
import { Paper } from "@mui/material";
import NavBar from "./NavBar";
import Carrousel from "./Carrusel";
import "./Carrauselstyle.css"


const Main = () => {

    return (


        <div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="carouseldiv">
                <Carrousel />
            </div>
            <div className="App">
                <Paper elevation={3} className="paper" sx={{ maxHeight: 500, overflow: 'auto', margin: 10, borderRadius: 5 }}>
                    <ListMovies title="Popular Movies" url="popular" />
                </Paper>
                <Paper elevation={3} className="paper" sx={{ maxHeight: 500, overflow: 'auto', margin: 10, borderRadius: 5 }}>
                    <ListMovies title="Top Rated" url="top_rated" />
                </Paper>

            </div>

        </div>

    )
}
export default Main