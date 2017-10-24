// @flow

import _ from 'lodash'

type Emotion = {
	x: number,
	vx: number,
	y: number,
	vy: number,
	w: number,
	h: number,
	seed: number,
	color: string | null,
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
	g: number, // generation
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

	const emoW = W / 4
	const baseSpeed = W / 3 / 60
	const emoPase = 3 // != 0
	const clearRate = 30 // <0, 100>

	const randH = () => Math.random() * H - emoW / 2
	const randSpeed = () => (Math.random() / 2 + 0.75) * baseSpeed
	const randHWC = () => {
		const color = _.random(100) < clearRate ? null : ''
		const d = _.random() * 0.7
		const v1 = emoW * d
		const v2 = emoW * d * 1.6180339887
		const [h, w] = _.shuffle([v1, v2])
		return { h, w, color }
	}
	function newEmo(): Emotion {
		return {
			x: -emoW,
			vx: randSpeed(),
			y: randH(),
			vy: 0,
			...randHWC(),
			seed: _.random(99),
		}
	}

	function emoColor(emo: Emotion) {
		let h = 100
		let s = 100
		let l = 90
		let a = 0.5
		if (emo.color === null) {
			return null
		}
		return `hsla(${h}, ${s}%, ${l}%, ${a})`
	}

	// initialize
	const state: State = {
		emos: [],
		g: 0,
	}

	function draw() {
		ctx.clearRect(0, 0, W, H)
		ctx.beginPath()
		state.emos.forEach(emo => {
			if (emo.color === null) {
				ctx.clearRect(emo.x, emo.y, emo.w, emo.h)
			} else {
				ctx.fillStyle = emo.color
				ctx.fillRect(emo.x, emo.y, emo.w, emo.h)
			}
		})
		ctx.fill()
		ctx.closePath()
	}

	function update() {
		const emos = _.compact(
			state.emos.map(emo => {
				const x = emo.x + emo.vx
				const y = emo.y + emo.vy

				// TODO: remove debu
				// if (x > W + 100) {
				if (x > W - 100) {
					// die
					return null
				}
				const color = emoColor(emo)
				return { ...emo, x, y, color }
			})
		)
		if (Math.random() * emoPase < 1) {
			// if (state.g % emoPase === 0) {
			emos.push(newEmo())
		}
		state.emos = emos
		state.g++
	}

	setInterval(() => {
		update()
		draw()
	}, 50)
}
