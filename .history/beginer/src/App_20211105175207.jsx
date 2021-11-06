import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Register from './pages/Register'
import StudentManagement from './pages/StudentManagement'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/student" component={StudentManagement} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
