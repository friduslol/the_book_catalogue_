import React from 'react'
import Styles from "../styles/Start.module.css"
import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCard from "./BookCard"

const BooksWrapper = () => {
    const { books } = useContext(BookContext)

    return(
        <div className={Styles.booksContainer}>
            {books.length ?
                books.map((book, i) => (
                    <BookCard key={i} data={book} />))
            : <></>}
        </div>
    )
}

export default BooksWrapper
