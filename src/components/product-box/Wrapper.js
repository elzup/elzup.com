import styled from 'styled-components'
import { media } from '../../utils'

export const Wrapper = styled.li`
	width: 344px;
	margin: 5px;
	background: white;
	color: black;
	position: relative;
	border-radius: 2px;
	border-top: 3px solid black;
	display: flex;
	flex-direction: column;

	/* ページ全体の a は暗い地向けの明るい色なので、白いカードの中だけ黒に戻す */
	a {
		color: black;
	}
	${media.handheld(`
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
	width: 100%;
	height: 100%;
	/* スクショの縦横比はまちまちなので、枠に合わせて切り抜き、引き伸ばさない */
	object-fit: cover;
	object-position: top;
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

export const Body = styled.div`
	flex: 1;
	padding: 0 10px;

	h2 {
		margin-bottom: 0;
	}
`

export const Subtitle = styled.p`
	color: #666;
	margin-top: 2px;
`

/* リンクはカードの最下段に区切り線つきで並べる。高さの違うカードでも位置が揃う */
export const FooterRow = styled.div`
	display: flex;
	justify-content: flex-end;
	border-top: 1px solid #e6e6e6;
	margin-top: 10px;
	padding: 8px 10px;
`
