import React from 'react'
import Checkbox from 'src/components/Checkbox/Checkbox'
import * as S from './cart.slice'

export default function Cart() {
	return (
		<div className="container">
			<div>
				<S.Product />
			</div>
		</div>
	)
}