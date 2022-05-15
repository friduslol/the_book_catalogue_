import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const [faves, setFaves] = useState([])
    const [willRead, setWillRead] = useState([])
    const [haveRead, setHaveRead] = useState([])

    useEffect(() => {
        getCookie()
    // eslint-disable-next-line
    }, [])

    const getCookie = async () => {
        try {
            let result = await fetch("/api/v1/user/getCookie")
            result = await result.json()
            setUser(result)
            setLoading(false)
            return result
        } catch(err) {
            return err
        }
    }

    const createUser = async (userObj) => {
        try {
            let result = await fetch("/api/v1/user/create", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userObj),
            })
            result = await result.json()
            getCookie()
            return result
        } catch(err) {
            return err
        }
    }

    const logout = async () => {
        try {
            let result = await fetch("/api/v1/user/logout")
            await result.json()
            await getCookie()
            return result
        } catch(err) {
            return err
        }
    }

    const login = async (userObj) => {
        try {
            let result = await fetch("/api/v1/user/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userObj),
            })
            result = await result.json()
            await getCookie()
            return result
        } catch(err) {
            return err
        }
    }

    const addToLibrary = async (optionObj) => {
        try {
            let result = await fetch("/api/v1/user/addToLibrary", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(optionObj),
            })
            result = await result.json()
            return result
        } catch(err) {
            return err
        }
    }

    const fetchFaves = async (userId) => {
        try {
            let result = await fetch(`/api/v1/user/getFaves/${userId}`)
            result = await result.json()
            setFaves(result)
            return result
        } catch(err) {
            return err
        }
    }
    const fetchWillRead = async (userId) => {
        try {
            let result = await fetch(`/api/v1/user/getWillRead/${userId}`)
            result = await result.json()
            setWillRead(result)
            return result
        } catch(err) {
            return err
        }
    }

    const fetchHaveRead = async (userId) => {
        try {
            let result = await fetch(`/api/v1/user/getHaveRead/${userId}`)
            result = await result.json()
            setHaveRead(result)
            return result
        } catch(err) {
            return err
        }
    }

    const removeBookInLibrary = async (removeObj) => {
        try {
            let result = await fetch("/api/v1/user/deleteBookInLibrary", {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(removeObj),
            })
            result = await result.json()
            return result

        } catch(err) {
            return err
        }
    }

    const values = {
        createUser,
        getCookie,
        user,
        logout,
        login,
        addToLibrary,
        fetchFaves,
        faves,
        fetchWillRead,
        fetchHaveRead,
        haveRead,
        willRead,
        removeBookInLibrary
    }

    return(
        <UserContext.Provider value={values}>
            {!loading && props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider