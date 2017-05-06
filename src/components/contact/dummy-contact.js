import React from "react"
import Contact from "."

export default class DummyContact extends Contact {
	render() {
		const style = require("./dummy-contact.css")
		return <li className={style.contact} />
	}
}
