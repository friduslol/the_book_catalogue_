import { UserContext } from "../contexts/UserContext"
import React, { useRef, useState, useContext } from "react"
import Styles from "../styles/SignIn.module.css"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { login } = useContext(UserContext)
    const navigateHook = useNavigate()
    const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        let userObj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        setLoading(true)
        let result = await login(userObj)

        if(result.error) {
            setError(result.error)
            setLoading(false)
            return
        }

        if(result.success) {
            setLoading(false)
            setError(null)
            navigateHook("/userPage")
            return
        }
    }

    return(
        <div className={Styles.signInContainer}>
            <form className={Styles.formWrapper} onSubmit={handleSubmit}>
                <h1 className={Styles.formHeader} >Sign In</h1>
                <input className={Styles.input} type="email" placeholder="Email" ref={emailRef} required />
                <input className={Styles.input} type="password" placeholder="Password" ref={passwordRef} required/>
                {error && <p>{error}</p>}
                <button type="submit" disabled={loading} className={Styles.signInBtn}>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn