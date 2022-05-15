import Styles from "../styles/Book.module.css"
import React, { useState, useEffect, useContext } from "react"
import { Rating } from "react-simple-star-rating"
import { useParams } from "react-router-dom"
import { BookContext } from "../contexts/BookContext"
import { UserContext } from "../contexts/UserContext"

const Book = () => {
    const { getBookById, book, addRating } = useContext(BookContext)
    const { user, addToLibrary } = useContext(UserContext)
    const { id } = useParams()
    const [update, setUpdate] = useState()
    const [ratingMsg, setRatingMsg] = useState(null)
    const [libraryMsg, setLibraryMSg] = useState(null)

    useEffect(() => {
        getBookById(id)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getBookById(id)
        // eslint-disable-next-line
    }, [update])


    //Catch Rating value
    const handleRating = async (newRating) => {
        if(!user) {
            return
        }

        let w = book.rating.weight += 1
        let c = book.rating.count + newRating
        let ratingObj = {
            rating: { weight: w, count: c },
            id: book._id,
            userId: user._id
        }
        let result = await addRating(ratingObj)

        setUpdate(result)

        if(result.success) {
            setRatingMsg(result.success)
        } else {
            setRatingMsg(result.error)
        }

    }

    const handleAddToLibrary = async (option) => {
        if(!user) {
            return
        }

        let optionObj = {
            id: book._id,
            userId: user._id,
            option
        }

        let result = await addToLibrary(optionObj)

        if(result.success) {
            setLibraryMSg(result.success)
        } else {
            setLibraryMSg(result.error)
        }
    }

    return(
        <div className={Styles.bookPageContainer}>
            {book ?
                (<div className={Styles.bookContainer}>
                    <div className={Styles.bookCoverWrapper}>
                        <img className={Styles.bookImg} src={book.coverImg} alt="book cover"/>
                    </div>
                    <div className={Styles.contentWrapper}>
                        <div className={Styles.InfoWrapper}>
                            <h1 className={Styles.heading}>{book.title}</h1>
                            <span className={Styles.text}>Year of puplication: {book.publicationYear}</span>
                            <span className={Styles.text}>Author: {book.author}</span>
                            <div className={Styles.ratingWrapper}>
                                <Rating onClick={handleRating} ratingValue={book.rating.count / book.rating.weight} /* Available Props */ />
                                {ratingMsg ?
                                    <p className={Styles.ratingMsg}>{ratingMsg}</p>
                                :
                                    <></>
                                }
                            </div>
                        </div>
                        <div className={Styles.aboutWrapper}>
                            <h2 className={Styles.smallHeading}>About the book</h2>
                            <p className={Styles.aboutText}>{book.description}</p>
                        </div>
                        <div className={Styles.detailsWrapper}>
                            <h2 className={Styles.smallHeading}>List of details</h2>
                            <span className={Styles.text}>Author: {book.author}</span>
                            <span className={Styles.text}>ISBN: {book.isbn}</span>
                            <span className={Styles.text}>Year of publication: {book.publicationYear}</span>
                            <span className={Styles.text}>Pages: {book.pages}</span>
                            <span className={Styles.text}>Category: {book.category}</span>
                            {user ?
                                (<div className={Styles.userActionWrapper}>
                                    <h2 className={Styles.smallHeading}>Add this book to a Library:</h2>
                                    <div className={Styles.btnWrapper}>
                                        <button className={Styles.libraryBtn} onClick={() => handleAddToLibrary(1)}>Favourite</button>
                                        <button className={Styles.libraryBtn} onClick={() => handleAddToLibrary(2)}>Will read</button>
                                        <button className={Styles.libraryBtn} onClick={() => handleAddToLibrary(3)}>Have Read</button>
                                    </div>
                                    {libraryMsg ?
                                        <p className={Styles.libraryMsg}>{libraryMsg}</p>
                                    :
                                        <></>
                                    }
                                </div>)
                            :
                                (<></>)
                            }
                        </div>
                    </div>
                </div>)
            :
                (<></>)
            }
        </div>
    )
}

export default Book