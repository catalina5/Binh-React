import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CategoryTitleLink = styled(Link)`
	font-weight: 700;
	padding: 1.5rem 0;
	font-size: 1.6rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	svg {
		width: 1.25rem;
		margin-right: 1rem;
		stroke: currentColor;
	}
`