import React from 'react'
import Styles from "../styles/Start.module.css"
import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCard from "./BookCard"

const SearchWrapper = () => {
    const { searchResult } = useContext(BookContext)
    return (
        <div className={Styles.booksContainer}>
            {searchResult.length
            ? searchResult.map((book, i) => (
                <BookCard key={i} data={book} />))
            : <p className={Styles.noMatchMsg}>No match, please try again...</p>}
        </div>
    )
}

export default SearchWrapper
