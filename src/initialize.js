// @flow

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
	font-family: 'Abel', 'Hiragino Kaku Gothic Pro W3', 'ヒラギノ角ゴ Pro W3', 'Meiryo',
		'メイリオ', 'Noto Sans Japanese Regular', sans-serif;
	/* 黒い箱 (メニュー・連絡先) が沈まない程度に黒から離した暗色 */
	background: #17171b;
	color: #eee;
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
	color: #eee;
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
