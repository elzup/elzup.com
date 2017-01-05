import React from "react";
import Item from "../../components/item/item.jsx";
import Contact from "../../components/contact/contact.jsx";

export default class TopPage extends React.Component {
	render() {
		const style = require("./top-page.css");
		return (
			<main className={style.wrap_main}>
				<div className={style.page} id="face">
					<div className={style.eyecatch}>
						<h1>elzup.com</h1>
					</div>
					<div className={style.layer2}>
						<ul className={style.menu}>
							<Item label="Product" name="product"/>
							<Item label="Art" name="art"/>
							<Item label="Log" name="log"/>
						</ul>
						<div className={style.layer3}>
							<div className={style.layer4}>
							</div>
							<ul className={style.contacts}>
								<Contact
									label="Github"
									link="//github.com/elzup"
									type="github"/>
								<Contact
									label="Twitter"
									link="//twitter.com/_elzup_"
									type="twitter"/>
								<Contact
									label="Facebook"
									link="//www.facebook.com/takahashiroto"
									type="facebook"/>
								<Contact
									label="Hatena"
									link="http://elzup.hatenablog.com/"
									type="hatena"/>
								<Contact
									label="Qiita"
									link="//qiita.com/elzup"
									type="qiita"/>
								<Contact
									label="Tumbler"
									link="//elzup.tumblr.com"
									type="tumblr"/>
							</ul>
						</div>
					</div>
				</div>
			</main>
		);
	}

	componentDidMount() {
		// HACK: extract text plugins side effect
		document.getElementsByTagName('html')[0].style.height = '100%'
		const body = document.getElementsByTagName('body')[0];
		body.style.height = '100%'
		body.style.padding = '0'
		document.getElementById('container').style.height = '100%'
		const canvas = document.createElement('canvas')
		canvas.style.position = 'fixed'
		canvas.style.top = "0px"
		canvas.style.left = "0px"
		const w = canvas.width = body.clientWidth
		const h = canvas.height = body.clientHeight
		canvas.setAttribute('width', w)
		canvas.setAttribute('height', h)
		canvas.style.width = w + "px"
		canvas.style.height = h + "px"
		body.insertBefore(canvas, body.firstChild)
		const ctx = canvas.getContext('2d')
		ctx.lineWidth = 5;
		ctx.strokeStyle = 'black';

		// draw Logics
		const points = []
		const footstamps = []

		const v = 1;
		const directions = [{vx: v, vy: 0}, {vx: 0, vy: v}, {vx: -v, vy: 0}, {vx: 0, vy: -v}];
		const seqAgeMax = 50;
		const seqAgeMin = 10;
		const mouse = {x: -100, y: -100};
		for (let i = 0; i < 20; i++) {
			const p = {
				x: Math.random() * w,
				y: Math.random() * h,
				dire: {},
				seqAge: Math.floor(Math.random() * (seqAgeMax - seqAgeMin) + seqAgeMin)
			}
			Object.assign(p.dire, directions[Math.floor(Math.random() * 4)]);
			points.push(p);
		}
		setInterval(() => {
			ctx.clearRect(0, 0, w, h)
			for (let i = 0; i < points.length; i++) {
				const p = points[i];
				const x = p.x + p.dire.vx;
				const y = p.y + p.dire.vy;
				if (x < 0 || x >= w || y < 0 || y >= h) {
					p.dire.vx *= -1;
					p.dire.vy *= -1;
				}
				const footstamp = {
					life: 6
				};
				p.x += p.dire.vx * p.seqAge;
				p.y += p.dire.vy * p.seqAge;
				p.seqAge--;
				if (p.seqAge < 5) {
					p.seqAge = Math.floor(Math.random() * (seqAgeMax - seqAgeMin) + seqAgeMin);
					const t = p.dire.vy;
					p.dire.vy = p.dire.vx;
					p.dire.vx = t;
				}
				Object.assign(footstamp, p);
				footstamps.push(footstamp);
			}
			for (let i = 0; i < footstamps.length; i++) {
				if (footstamps[i].life < 1) {
					continue;
				}
				ctx.beginPath();
				ctx.arc(footstamps[i].x, footstamps[i].y, footstamps[i].life / 2, 0, Math.PI * 2, false);
				footstamps[i].life--;
				ctx.fill();
				ctx.closePath();
			}
		}, 50)
		canvas.addEventListener("mousemove", e => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		});
	}
}
