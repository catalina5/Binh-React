import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { Route, Routes } from 'react-router-dom'
// import { Redirect } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'

export const path = {
	home: '/',
	register: '/register',
	student: '/student',
	profile: '/profile'
}

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				{/* <Redirect from="students" to={path.student} /> */}
				<Route path={path.home} exact element={<Home />} />
				<Route path={path.register} element={<Register />} />
				<Route path={path.student} element={<StudentManagement isLogged />} />
			</Routes>
		</div>
	)
}

export default App