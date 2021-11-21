import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { unauthorize } from 'src/pages/Auth/auth.slice'

export default function Authorization() {
	const status = useSelector(state => state.app.status)
	const dispatch = useDispatch()
	const history = useNavigate()
	const authenticated = useAuthenticated()
	useEffect(() => {
		if (status === 401) {
			dispatch(unauthorize())
			history(path.login)
		}
	}, [dispatch, status, history])

	return null
}
