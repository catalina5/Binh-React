import React, { useState } from 'react'
import UserProfile from './UserProfile'

export default function User() {
	const [profile] = useState({
		name: 'Binh',
		address: {
			company: 'Long mai',
			home: 'Minh long'
		}
	})

	const [count, setCount] = useState(0)

	return (
		<div>
			<div>Ten: {profile.name}</div>
			<div>Dia chi:</div>
			<div>Cong ti: {profile.address.company}</div>
			<div>Nha: {profile.address.home}</div>
			<button onClick={() => setCount(count => count + 1)}>
				Change Count {count}
			</button>
			<UserProfile profile={profile} />
		</div>
	)
}