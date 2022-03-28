

import "./Button.css"


const Button = ({ mensaje, clase, reaccionarAlClick }) => {
    return (
        <button className={clase} onClick={reaccionarAlClick}>
            {mensaje}
        </button>
    )
}

export default Button;