// @flow

import { css } from 'styled-components'
export const media = {
	handheld: (...args: any) => css`
		@media (max-width: 480px) {
			${css(...args)};
		}
	`,
}

export const uniq = (arr: number) => arr.filter((e, i, a) => a.indexOf(e) === i)
export const random = (max: number) => Math.floor(Math.random() * (max + 1))
