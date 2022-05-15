import React, { useContext, } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const RequireUserAcc = (props) => {
    const { user } = useContext(UserContext)

	return (
		user && user
			? props.children
			: <Navigate to={props.redirectTo} />
	)
}

export default RequireUserAcc
