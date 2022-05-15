import Styles from "../styles/Start.module.css"
import { useState, useEffect, useRef, useContext } from "react"
import {  BookContext } from "../contexts/BookContext"
import BooksWrapper from "../components/BooksWrapper"
import SearchWrapper from "../components/SearchWrapper"

const StartPage = () => {
    const { getAllBooks, inputSearch } = useContext(BookContext)
    const [show, setShow] = useState(true)
    const searchRef = useRef()

    useEffect(() => {
        getAllBooks()
        // eslint-disable-next-line
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        if(searchRef.current.value === "") {
            return
        }

        inputSearch(searchRef.current.value)
        setShow(false)
    }

    return(
        <div className={Styles.startContainer}>
            <div className={Styles.heroWrapper}>
                <div className={Styles.inputWrapper}>
                    <form className={Styles.searchForm} onSubmit={handleSearch}>
                        <input className={Styles.input} type="text" placeholder="Book, Year or Author..." ref={searchRef}/>
                       <button type="submit">
                        <img className={Styles.searchBtn} src={process.env.PUBLIC_URL + '/icons8-magnifying-glass-64.png'} alt="search" />
                       </button>
                    </form>
                </div>
            </div>
            {show ?
                <BooksWrapper />
            :
                <SearchWrapper />
            }
        </div>
    )
}
export default StartPage
