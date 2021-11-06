import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/profile/Profile'
import ProfileInfo from './pages/profile/ProfileInfo'
import ProfilePerchase from './pages/profile/ProfilePerchase'

export const path = {
	home: '/',
	register: '/register',
	student: '/student',
	profile: '/profile',
	profileInfo: '/profile/info',
	profilePerchase: '/profile/perchase'
}

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path={path.home} exact element={<Home />} />
				<Route path={path.register} element={<Register />} />
				<Route path={path.student} element={<StudentManagement />} />
				<Route path={path.profile} element={<Profile />}>
					<Route path={path.profileInfo} element={<ProfileInfo />} />
					<Route path={path.profilePerchase} element={<ProfilePerchase />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
