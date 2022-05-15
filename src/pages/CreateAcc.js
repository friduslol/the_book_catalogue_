import { UserContext } from "../contexts/UserContext"
import React, { useRef, useState, useContext } from "react"
import Styles from "../styles/CreateAcc.module.css"
import PasswordChecklist from "react-password-checklist"
import { useNavigate } from "react-router-dom"

const CreateAcc = () => {
    const { createUser } = useContext(UserContext)
    const emailRef = useRef()
    const userNameRef = useRef()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassWord] = useState("")
    const [pass, setPass] = useState(false)
    const navigateHook = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!pass) {
            return
        }

        let userObj = {
            email: emailRef.current.value,
            userName: userNameRef.current.value,
            password: password,
            admin: false
        }

        setLoading(true)
        let result = await createUser(userObj)

        if(result.error) {
            setError(result.error)
            setLoading(false)
            setPass(false)
            return
        }

        if(result.success) {
            setLoading(false)
            setError(null)
            setPass(false)
            navigateHook("/")
            return
        }
    }

    return(
        <div className={Styles.createAccContainer}>
            <form className={Styles.formWrapper} onSubmit={handleSubmit}>
                <h1 className={Styles.formHeader}>Create Account</h1>
                <input className={Styles.input} type="email" placeholder="Email" ref={emailRef} required/>
                <input className={Styles.input} type="username" placeholder="Username" ref={userNameRef} required/>
                <input className={Styles.input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                <input className={Styles.input} type="password" placeholder="Confirm password" onChange={e => setConfirmPassWord(e.target.value)} required/>
                {error && <p>{error}</p>}

                <PasswordChecklist
                    rules={["minLength","specialChar","number","capital","match"]}
                    minLength={5}
                    value={password}
                    valueAgain={confirmPassword}
                    invalidColor="#BA4A4A"
                    validColor="#3c6943"
                    iconSize="12"
                    onChange={(isValid) => setPass(isValid)}
			    />

                <button disabled={loading} type="submit" className={Styles.createBtn}>Create</button>
            </form>
        </div>
    )
}

export default CreateAcc