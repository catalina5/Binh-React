import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
	const [state, setState] = useState(0)

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit {state}
					<code>src/App.js</code> and save to reload.
				</p>
				<button onclick={() => setState(state + 1)}>Click</button>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React by Binh
				</a>
			</header>
		</div>
	)
}

export default App
