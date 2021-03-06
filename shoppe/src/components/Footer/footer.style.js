import styled from 'styled-components'

export const Footer = styled.footer`
	font-size: 1.4rem;
	color: rgba(0, 0, 0, 0.65);
	padding: 4.2rem 0 3.7rem;
	background-color: #f5f5f5;
	width: 100%;
	min-width: max-content;
`

export const Footer1 = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 6rem;
`

export const Language = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		padding: 0 0.3125rem;
		cursor: pointer;
		&:not(:last-child) {
			border-right: 1px solid rgba(0, 0, 0, 0.2);
		}
	}
`

export const Footer2 = styled.div`
	font-size: 1.2rem;
	text-align: center;
	div {
		line-height: 2;
		&:first-child {
			margin-bottom: 1.5rem;
		}
	}
`

export const Footer3 = styled.div`
	justify-content: center;
	display: flex;
	div:not(:last-child) {
		padding-right: 3rem;
		margin-right: 3rem;
		border-right: 1px solid rgba(0, 0, 0, 0.2);
		text-transform: uppercase;
		margin-bottom: 3rem;
	}
`
