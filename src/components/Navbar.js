import { Link } from "react-router-dom"
import Styles from "../styles/Navbar.module.css"
import { UserContext } from "../contexts/UserContext"
import React, { useContext } from "react"


const Navbar = () => {
    const { user } = useContext(UserContext)

    return(
        <div className={Styles.navbarContainer}>
            <div className={Styles.logoWrapper}>
                <Link to="/"><img className={Styles.img} src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/></Link>
            </div>
            <div className={Styles.linksWrapper}>
                {user && user.admin === true ? <Link className={Styles.navLink} to="adminPage">Admin</Link> : <></>}
                {user ?
                    (<>
                    <Link className={Styles.navLink} to="userPage">My page</Link>
                    </>)
                :
                    (<>
                    <Link className={Styles.navLink} to="signIn">Sign in</Link>
                    <Link className={Styles.navLink} to="createAccount">Create Account</Link>
                    </>)

                }
            </div>
        </div>
    )
}
export default Navbar;