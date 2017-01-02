import React from "react";
import Item from "../../components/item/item.jsx";
import Contact from "../../components/contact/contact.jsx";

export default class TopPage extends React.Component {
	render() {
		const style = require("./top-page.css");
		return (
			<main className={style.wrap_main}>
				<div className={style.page}>
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
									link="//elzup.hatenablog.com/"
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
		const points = [{
			x: 0,
			y: 0,
			vx: 2,
			vy: 2
		}]
		ctx.lineWidth = 1
		setInterval(() => {
			ctx.clearRect(0, 0, w, h)
			for (let i = 0; i < points.length; i++) {
				points[i].x += points[i].vx
				points[i].y += points[i].vy
				ctx.beginPath()
				ctx.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2, false)
				ctx.fill()
				ctx.closePath()
			}
		}, 50)
		canvas.onclick
		canvas.addEventListener('click', e => {
			points.push({
				x: e.clientX,
				y: e.clientY,
				vx: 2,
				vy: 2
				}
			)
		}, false);
	}
}
