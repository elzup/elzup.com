import React from "react"
import Item from "./item.jsx"

export default class DummyItem extends Item {
	render() {
		const style = require("./dummy-item.css")
		return <li className={style.item} />
	}
}
