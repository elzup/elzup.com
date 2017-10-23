// @flow

import { css } from 'styled-components'
export const media = {
	handheld: (...args: any) => css`
		@media (max-width: 480px) {
			${css(...args)};
		}
	`,
}
