import { Avatar } from "@mui/material"
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import IconButton from '@mui/material/IconButton';


const CardItem = ({ title, img, link }) => {

    return (
        <div className="items-movies">
            <Avatar sx={{ width: 56, height: 56 }} className="movies-img" src={img} />
            <p>{title}</p>
            <a href={link}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <KeyboardDoubleArrowRightRoundedIcon />
                </IconButton>
            </a>

        </div>
    )

}

export default CardItem