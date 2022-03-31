import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'


const NavBar = () => {

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

                        <TextField
                            fullWidth label="Buscar Pelicula"
                            id="fullWidth"

                        />

                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default NavBar






