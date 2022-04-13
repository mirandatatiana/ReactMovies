import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, Link } from "react-router-dom";

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

                    <Stack direction="row" spacing={8} >
                        <Button
                            onClick={() => {
                                alert('clicked');
                            }}
                        >
                            Click me
                        </Button>
                        <Link to="/">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                            </IconButton>
                            <MovieIcon />
                        </Link>
                        <Link to="/toprated">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >

                            </IconButton>
                            <MovieIcon />
                        </Link>
                        <Link to="/popular">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >

                            </IconButton>
                            <MovieIcon />
                        </Link>

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






