import Styles from "../styles/User.module.css"
import ListCard from "../components/ListCard"
import { useNavigate } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"

const UserPage = () => {
    const {
        logout,
        fetchFaves,
        user,
        faves,
        fetchHaveRead,
        fetchWillRead,
        haveRead,
        willRead,
    } = useContext(UserContext)
    const navigateHook = useNavigate()

    useEffect(() => {
        if(user) {
            fetchFaves(user._id)
            fetchHaveRead(user._id)
            fetchWillRead(user._id)
        }
        // eslint-disable-next-line
    }, [])

    const handleLogout = async () => {
        await logout()
		navigateHook('/')
    }

    return(
        <div className={Styles.userContainer}>
            <div className={Styles.sectionWrapper}>
                <div className={Styles.userDataWrapper}>
                    {user &&
                    <>
                        <p className={Styles.userInfo}>{user.userName}</p>
                        <p className={Styles.userInfo}>{user.email}</p>
                    </>}

                    <button className={Styles.logOutBtn} onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className={Styles.bookListsContainer}>
                <div className={Styles.cardContainer}>
                    <div className={Styles.listTitleWrapper}>
                        <h2 className={Styles.listTitle}>Favourites</h2>
                        <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
                    </div>
                    {faves.length ? <ListCard data={{arr: faves[0].books, library: faves[0], option: 1 }} /> : <></>}
                </div>
                <div className={Styles.cardContainer}>
                    <div className={Styles.listTitleWrapper}>
                        <h2 className={Styles.listTitle}>Will Read</h2>
                        <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
                    </div>
                    {willRead.length ? <ListCard data={{arr: willRead[0].books, library: willRead[0], option: 2}} /> : <></>}
                </div>
                <div className={Styles.cardContainer}>
                    <div className={Styles.listTitleWrapper}>
                        <h2 className={Styles.listTitle}>Have Read</h2>
                        <img className={Styles.booksImg} src={process.env.PUBLIC_URL + '/icons8-books-60.png'} alt="stacked books"/>
                    </div>
                    {haveRead.length ? <ListCard data={{arr: haveRead[0].books, library: haveRead[0], option: 3}} /> : <></>}
                </div>
            </div>
        </div>
    )
}

export default UserPage