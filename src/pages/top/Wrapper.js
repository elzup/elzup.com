// @flow

import styled, { css } from 'styled-components'

export const media = {
	handheld: (...args: any) => css`
		@media (max-width: 480px) {
			${css(...args)};
		}
	`,
}

const goldenRate = 161.8046
const goldenRate2 = goldenRate - 100
const goldenRate3 = 100 - goldenRate2

export const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	${media.handheld`
		display: block;
	`};
`

export const Page = styled.div`
	display: flex;
	width: 760px;
	height: 470px;
	${media.handheld`
		display: block;
		width: 100%;
		height: 100%;
	`};
`

export const Layer2 = styled.div`
	width: var(--goldenRate3) ${media.handheld`
		width: 100%;
	`};
`

export const EyeCatch = styled.div`
	padding: 155px 0;
	width: var(--goldenRate2) ${media.handheld`
		width: 100%;
		padding: 20px 0;
		text-align: center;
	`};
`

export const Title = styled.h1`
	text-align: center;
	font-size: 90px;
	margin: 0.3em 0;
	${media.handheld`
		font-size: 60px;
		margin: 0;
	`};
`

export const Layer3 = styled.div`
	display: flex;
	${media.handheld`
		display: block;
	`};
`

export const Layer4 = styled.div`
	width: var(--goldenRate3) ${media.handheld`
		width: 100%;
	`};
`

export const Contacts = styled.ul`
	width: var(--goldenRate2)
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	${media.handheld`
		width: 100%;
	`}
`

export const Menu = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
`
