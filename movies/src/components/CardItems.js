import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button, Link } from "@mui/material"


// All the Cards 

const CardItem = ({ title, img, link }) => {

    return (
        <Card
            sx={{
                maxWidth: 500,
                backgroundColor: "#5c6bc0",
                margin: 2,
                borderRadius: 5
            }}>
            <CardActionArea
                sx={{
                    backgroundColor: "#5c6bc0",
                }}>
                <CardMedia
                    sx={{}}
                    component="img"
                    height="700"
                    src={img}
                    alt={title}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" color="error">
                    <Link
                        sx={{
                            textDecoration: "none",
                            color: "#fafafa"
                        }}
                        href={link}>
                        Entrar
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )

}

export default CardItem