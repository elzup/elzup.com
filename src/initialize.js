// @flow

import { injectGlobal } from 'styled-components'
injectGlobal`
html {
	font-family: 'Abel', 'Hiragino Kaku Gothic Pro W3', 'ヒラギノ角ゴ Pro W3', 'Meiryo',
		'メイリオ', 'Noto Sans Japanese Regular', sans-serif;
	background: white;
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
