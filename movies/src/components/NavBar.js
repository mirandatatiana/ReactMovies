import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import SearchMovies from "./SearchMovies";
import { useNavigate } from "react-router-dom";


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
            <AppBar position="static">
                <Toolbar sx={{ p: 1 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MovieIcon />
                    </IconButton>
                    <Stack direction="row" spacing={8} >
                        <Button variant="contained"

                            size="large" >Ultimos Lanzamientos</Button>
                        <Button variant="contained"

                            size="large" >Populares</Button>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type="text" onChange={handleChange}>
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






