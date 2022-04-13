import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, Link } from "@mui/material"
import "./searchstyle.css"



const CardItem = ({ title, img, link }) => {

    return (

        <Card sx={{ maxWidth: 700, backgroundColor: "#5c6bc0", }}>
            <CardActionArea sx={{ backgroundColor: "#5c6bc0" }}>
                <CardMedia
                    component="img"
                    height="700"
                    src={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" color="error">

                    <Link sx={{ textDecoration: "none", color: "#fafafa" }} href={link}>Entrar</Link>
                </Button>
            </CardActions>
        </Card>


        // <div className="items-movies">
        //     <Avatar sx={{ width: 56, height: 56 }} className="movies-img" src={img} />
        //     <p>{title}</p>
        //     <a href={link}>
        //         <IconButton
        //             size="large"
        //             edge="start"
        //             color="inherit"
        //             aria-label="menu"
        //             sx={{ mr: 2 }}
        //         >
        //             <KeyboardDoubleArrowRightRoundedIcon />
        //         </IconButton>
        //     </a>

        // </div>
    )

}

export default CardItem