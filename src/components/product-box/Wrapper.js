import styled from 'styled-components'
import { media } from '../../utils'

export const Wrapper = styled.li`
	width: 344px;
	margin: 5px;
	padding: 5px 5px 35px 5px;
	background: #aaa;
	background: white;
	position: relative;
	box-shadow: 0 0 3px 2px white ${media.handheld(`
		width: 94%;
	`)};
`

export const TitleLink = styled.a`
	color: black;
`

export const Description = styled.p`
	font-size: 14px;
`

export const Members = styled.ul`
	padding-bottom: 10px;
`

export const ImgWrap = styled.div`
	width: 100%;
	height: 219px;
	overflow: hidden;
`

export const Image = styled.img`
	height: 100%;
`

export const Tag = styled.div`
	float: left;
	background: black;
	margin-right: 5px;
	color: white;
	padding: 3px 5px;
	font-size: 0.8em;
	margin-bottom: 2px;

	${media.handheld(`
		font-size: 1em;
	`)};
`
