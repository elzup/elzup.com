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
	const w = body.clientWidth
	canvas.width = w
	const h = body.clientHeight
	canvas.height = h
	canvas.setAttribute('width', w.toString())
	canvas.setAttribute('height', h.toString())
	canvas.style.width = w + 'px'
	canvas.style.height = h + 'px'
	body.insertBefore(canvas, body.firstChild)
	return { body, canvas, container, w, h }
}

export default async function palette() {
	const { body, canvas, container, w, h } = init()
	const mouse = { x: 0, y: 0 }
	canvas.addEventListener('mousemove', (e: any) => {
		mouse.x = e.clientX
		mouse.y = e.clientY
	})
	const ctx = canvas.getContext('2d')
	ctx.lineWidth = 5
	ctx.strokeStyle = 'black'

	const emoW = w / 8
	const baseSpeed = w / 3 / 60

	const randH = () => Math.random() * h - emoW / 2
	const randSpeed = () => (Math.random() / 2 + 0.75) * baseSpeed

	const emos: Emotion[] = _.map(Array(10), () => ({
		x: 0,
		vx: randSpeed(),
		y: randH(),
		vy: 0,
		w: 10,
		h: 10,
	}))

	function draw() {
		ctx.clearRect(0, 0, w, h)
		ctx.beginPath()
		emos.forEach(emo => {
			ctx.fillRect(emo.x, emo.y, emoW, emoW)
		})
		ctx.fill()
		ctx.closePath()
	}

	function update() {
		emos.forEach(emo => {
			emo.x += emo.vx
			emo.y += emo.vy
		})
	}

	setInterval(() => {
		update()
		draw()
	}, 50)
}
