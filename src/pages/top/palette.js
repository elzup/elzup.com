// @flow

type Point = {
	x: number,
	y: number,
}

type Direction = {
	vx: number,
	vy: number,
}

type FootStamp = Point & {
	dire: Direction,
	life: number,
	seqAge: number,
}

const distance = (pos1: Point, pos2: Point) => {
	const dx = pos1.x - pos2.x
	const dy = pos1.y - pos2.y
	return Math.sqrt(dx * dx + dy * dy)
}

export default async function palette() {
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
	const ctx = canvas.getContext('2d')
	ctx.lineWidth = 5
	ctx.strokeStyle = 'black'

	// draw Logics
	const points: FootStamp[] = []
	let footstamps: FootStamp[] = []

	const v = 1
	const directions: Direction[] = [
		{ vx: v, vy: 0 },
		{ vx: 0, vy: v },
		{ vx: -v, vy: 0 },
		{ vx: 0, vy: -v },
	]
	const seqAgeMax = 50
	const seqAgeMin = 10
	const mouse = { x: -100, y: -100 }
	for (let i = 0; i < 20; i++) {
		points.push({
			x: Math.random() * w,
			y: Math.random() * h,
			life: 0,
			dire: { ...directions[Math.floor(Math.random() * 4)] },
			seqAge: Math.floor(Math.random() * (seqAgeMax - seqAgeMin) + seqAgeMin),
		})
	}
	setInterval(() => {
		ctx.clearRect(0, 0, w, h)
		for (let i = 0; i < points.length; i++) {
			const p = points[i]
			const x = p.x + p.dire.vx
			const y = p.y + p.dire.vy
			if (x < 0 || x >= w || y < 0 || y >= h) {
				p.dire.vx *= -1
				p.dire.vy *= -1
			}
			p.x += p.dire.vx * p.seqAge
			p.y += p.dire.vy * p.seqAge
			p.seqAge--
			if (p.seqAge < 5) {
				p.seqAge = Math.floor(
					Math.random() * (seqAgeMax - seqAgeMin) + seqAgeMin
				)
				const t = p.dire.vy
				p.dire.vy = p.dire.vx
				p.dire.vx = t
			}
			footstamps.push({ ...p, life: 6 })
		}
		let dieIndex = 0
		for (let i = 0; i < footstamps.length; i++) {
			const fsp = footstamps[i]
			if (fsp.life < 1) {
				dieIndex = i
				continue
			}
			const rate = distance(fsp, mouse) / w
			const r = fsp.life * rate
			ctx.beginPath()
			ctx.arc(fsp.x, fsp.y, r, 0, Math.PI * 2, false)
			fsp.life--
			ctx.fill()
			ctx.closePath()
		}
		footstamps = footstamps.slice(dieIndex + 1)
	}, 50)

	canvas.addEventListener('mousemove', (e: any) => {
		mouse.x = e.clientX
		mouse.y = e.clientY
	})
}
