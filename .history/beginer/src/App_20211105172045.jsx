import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/register" components={Register} />
					<Route path="/student" components={StudentManagement} />
				</Routes>
			</BrowserRouter>
			{/* <StudentManagement /> */}
		</div>
	)
}

export default App