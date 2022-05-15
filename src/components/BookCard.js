import React from 'react'
import Styles from "../styles/Start.module.css"
import { useNavigate } from "react-router-dom"

const BookCard = (props) => {
    const navigateHook = useNavigate()

    const handleClick = () => {
        navigateHook(`/book/${props.data._id}`)
    }

    return(
        <div className={Styles.bookImgWrapper}>
            <img className={Styles.bookImg} src={props.data.coverImg} alt="bookcover" onClick={handleClick}/>
        </div>
    )
}
export default BookCard