import Styles from "../styles/Admin.module.css"
import { useRef, useContext, useState } from "react"
import {  BookContext } from "../contexts/BookContext"

const AdminPage = () => {
    const { addBook, removeBook } = useContext(BookContext)
    const coverImgRef = useRef()
    const titleRef = useRef()
    const descRef = useRef()
    const authorRef = useRef()
    const isbnRef = useRef()
    const pubYearRef = useRef()
    const pagesRef = useRef()
    const categoryRef = useRef()
    const isbnRemoveRef = useRef()
    const [addedMsg, setAddedMsg] = useState(null)
    const [deleteMsg, setDeleteMsg] = useState(null)

   const handleAddBook = async (e) => {
        e.preventDefault()

        let bookObj = {
            title: titleRef.current.value,
            description: descRef.current.value,
            author: authorRef.current.value,
            isbn: isbnRef.current.value,
            publicationYear: pubYearRef.current.value,
            pages: pagesRef.current.value,
            category: categoryRef.current.value,
            rating: {
                weight: 0,
                count: 0
            },
            coverImg: coverImgRef.current.value,
        }

        let result = await addBook(bookObj)
        if(result.success) {
            setAddedMsg(result.success)
        }
    }

    const handleRemoveBook = async (e) => {
        e.preventDefault()

        let result = await removeBook(isbnRemoveRef.current.value)
        if(result.success) {
            setDeleteMsg(result.success)
        }
    }

    return(
        <div className={Styles.adminContainer}>
            <div className={Styles.formsWrapper}>
                <form className={Styles.formWrapper} onSubmit={handleAddBook}>
                    <h1 className={Styles.formHeader}>Add a book</h1>
                    <input className={Styles.input} type="text" placeholder="Title" ref={titleRef} required/>
                    <input className={Styles.input} type="text" placeholder="Author" ref={authorRef} required/>
                    <input className={Styles.input} type="number" placeholder="Publication year" ref={pubYearRef} required/>
                    <input className={Styles.input} type="text" placeholder="Description" ref={descRef} required/>
                    <input className={Styles.input} type="text" placeholder="Category" ref={categoryRef} required/>
                    <input className={Styles.input} type="number" placeholder="Pages" ref={pagesRef} required/>
                    <input className={Styles.input} type="text" placeholder="ISBN" ref={isbnRef} required/>
                    <input className={Styles.input} type="text" placeholder="Book cover URL" ref={coverImgRef} required/>
                    <button type="submit" className={Styles.actionBtn}>Add</button>
                    {addedMsg && <p className={Styles.adminMsg}>{addedMsg}</p>}
                </form>

                <form className={Styles.formWrapper} onSubmit={handleRemoveBook}>
                    <h1 className={Styles.formHeader}>Remove a book</h1>
                    <input className={Styles.input} type="text" placeholder="ISBN Number" ref={isbnRemoveRef} required />
                    <button type="submit" className={Styles.actionBtn}>Remove</button>
                    {deleteMsg && <p className={Styles.adminMsg}>{deleteMsg}</p>}
                </form>
            </div>
        </div>
    )
}

export default AdminPage;