import ListMovies from "./ListMovies";
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { Paper } from "@mui/material";
import { List } from "@mui/material";
// const { data } = useDemoData({

//     rowLength: 20,
//     maxColumns: 5,
// });

const Main = () => {

    return (


        <div>
            <div className="App">

                <h2> Popular </h2>
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