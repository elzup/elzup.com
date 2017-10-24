// @flow

import _ from 'lodash'

type Emotion = {
	x: number,
	vx: number,
	y: number,
	vy: number,
	w: number,
	h: number,
}

function init() {
	document.getElementsByTagName('html')[0].style.height = '100%'
	const body = document.getElementsByTagName('body')[0]
	body.style.height = '100%'
	body.style.padding = '0'
	const container = document.getElementById('root')
	if (container !== null) {
		container.style.height = '100%'
		container.children[0].style.height = '100%'
	}
	const canvas = document.createElement('canvas')
	canvas.style.position = 'fixed'
	canvas.style.top = '0px'
	canvas.style.left = '0px'
	const W = body.clientWidth
	canvas.width = W
	const H = body.clientHeight
	canvas.height = H
	canvas.setAttribute('width', W.toString())
	canvas.setAttribute('height', H.toString())
	canvas.style.width = W + 'px'
	canvas.style.height = H + 'px'
	body.insertBefore(canvas, body.firstChild)
	return { body, canvas, container, W, H }
}

type State = {
	emos: Emotion[],
}

export default async function palette() {
	const { body, canvas, container, W, H } = init()
	const mouse = { x: 0, y: 0 }
	canvas.addEventListener('mousemove', (e: any) => {
		mouse.x = e.clientX
		mouse.y = e.clientY
	})
	const ctx = canvas.getContext('2d')

	// configs
	ctx.lineWidth = 5
	ctx.strokeStyle = 'black'

	const emoW = W / 8
	const baseSpeed = W / 3 / 60

	const randH = () => Math.random() * H - emoW / 2
	const randSpeed = () => (Math.random() / 2 + 0.75) * baseSpeed

	// initialize
	const state: State = {
		emos: _.map(Array(10), () => ({
			x: 0,
			vx: randSpeed(),
			y: randH(),
			vy: 0,
			w: 10,
			h: 10,
		})),
	}

	function draw() {
		ctx.clearRect(0, 0, W, H)
		ctx.beginPath()
		state.emos.forEach(emo => {
			ctx.fillRect(emo.x, emo.y, emoW, emoW)
		})
		ctx.fill()
		ctx.closePath()
	}

	function update() {
		const emos = _.compact(
			state.emos.map(emo => {
				const x = emo.x + emo.vx
				const y = emo.y + emo.vy
				if (x > W - 100) {
					return null
				}
				return { ...emo, x, y }
			})
		)
		state.emos = emos
	}

	setInterval(() => {
		update()
		draw()
	}, 50)
}
