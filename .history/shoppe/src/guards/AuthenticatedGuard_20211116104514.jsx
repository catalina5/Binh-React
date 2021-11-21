import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function UnAuthenticatedGuard({ children }) {
	const authenticated = useAuthenticated
	if (!authenticated) {
		return <Redirect to={path.login}></Redirect>
	}
	return <Fragment>{children}</Fragment>
}
