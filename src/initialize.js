// @flow

import { createGlobalStyle } from 'styled-components'

const d = new Date()
const h = (d.getMonth() * 123 + d.getDay() * 456 + d.getFullYear() * 789) % 360
const start = `hsl(${h}, 100%, 80%)`
const end = `hsl(${(h + 40) % 360}, 100%, 80%)`

export const GlobalStyle = createGlobalStyle`

html {
	font-family: 'Abel', 'Hiragino Kaku Gothic Pro W3', 'ヒラギノ角ゴ Pro W3', 'Meiryo',
		'メイリオ', 'Noto Sans Japanese Regular', sans-serif;
	background: linear-gradient(-135deg, ${start}, ${end});
}

body {
	padding: 20px;
}

header {
	padding-left: 100px;
}

ul {
	padding: 0;
	margin: 0;
}

li {
	list-style-type: none !important;
}

a {
	color: black;
}

@media screen and (max-width: 480px) {
	header {
		padding: 14px;
	}

	body {
		padding: 0;
	}

	p {
		padding: 0.1em 0;
	}
}
`
