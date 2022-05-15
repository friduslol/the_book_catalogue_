import React, { useContext, } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const RequireAdmin = (props) => {
    const { user } = useContext(UserContext)
    
	return (
		user && user.admin === true
			? props.children
			: <Navigate to={props.redirectTo} />
	)
}

export default RequireAdmin
