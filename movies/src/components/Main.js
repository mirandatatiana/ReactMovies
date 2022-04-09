import ListMovies from "./ListMovies";
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import NavBar from "./NavBar";
import Carrousel from "./Carrusel";
import "./Carrauselstyle.css"
// const { data } = useDemoData({

//     rowLength: 20,
//     maxColumns: 5,
// });

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


                <Paper className="paper" style={{ maxHeight: 300, overflow: 'auto' }}>

                    <ListMovies title="Popular Movies" url="popular" />
                </Paper>
                <Paper className="paper" style={{ maxHeight: 300, overflow: 'auto' }}>

                    <ListMovies title="Top Rated" url="top_rated" />
                </Paper>

            </div>

        </div>

    )
}
export default Main