import React, { useEffect } from 'react'
import 'src/assets/styles/reset.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routess from './Routes'
import { ToastContainer } from 'react-toastify'

import Authorization from './components/Authorization/Authorization'

function App() {
	return (
		<div className="App">
			<Routess />
			{/* <ToastContainer /> */}
			<Authorization />
		</div>
	)
}

export default App
