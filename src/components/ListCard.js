import Styles from "../styles/ListCard.module.css"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import React, { useContext } from "react"

const ListCard = (props) => {
    const { removeBookInLibrary, user, fetchFaves, fetchWillRead, fetchHaveRead } = useContext(UserContext)
    const navigateHook = useNavigate()

    const handleClick = (id) => {
        navigateHook(`/book/${id}`)
    }

    const handleRemove = async (bookId) => {
        if(!user) {
            return
        }

        let removeObj = {
            libraryId: props.data.library._id,
            option: props.data.option,
            bookId
        }

       let result = await removeBookInLibrary(removeObj)

       if(result.success) {
            fetchHaveRead(user._id)
            fetchWillRead(user._id)
            fetchFaves(user._id)
        }
    }

    return(
        <div>
            {props.data.arr.map((book, i) => (
                <div className={Styles.bookWrapper} key={i}>
                    <p className={Styles.bookTitle} onClick={() => handleClick(book._id)}>{book.title}</p>
                    <img className={Styles.removeBtn}
                    onClick={() => handleRemove(book._id)}
                    src={process.env.PUBLIC_URL + '/icons8-remove-64.png'}
                    alt="remove"/>
                </div>
            ))}
        </div>
    )
}

export default ListCard