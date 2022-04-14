import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Home';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, Link } from "react-router-dom";
import "./App.css"
import FormControl from '@mui/material/FormControl';
const NavBar = () => {

    const navigate = useNavigate();
    const [valueInput, setValueInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(valueInput)
        navigate(`/search-redic/${valueInput}`)
    }

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#5c6bc0" }}>
                <Toolbar sx={{ p: 1 }}>
                    <Stack direction="row" spacing={8} >
                        <Link to="/">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                            </IconButton>
                            <HomeIcon
                                sx={{
                                    fontSize: 40,
                                    color: "white"
                                }} />
                        </Link>
                        <Link to="/toprated">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="Top Rated"
                                sx={{ mr: 2 }}
                            >
                            </IconButton>
                            <MovieIcon
                                sx={{
                                    fontSize: 40,
                                    color: "white"
                                }} />
                        </Link>
                        <Link to="/popular">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="popular"
                                sx={{ mr: 2 }}
                            >
                            </IconButton>
                            <AirlineStopsIcon
                                sx={{
                                    fontSize: 40,
                                    color: "white"
                                }} />
                        </Link>
                        <div >
                            <form onSubmit={handleSubmit}>
                                <input className="forms"
                                    type="text" onChange={handleChange}
                                    placeholder="Ingresar Pelicula">
                                </input>
                            </form>
                        </div>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default NavBar






