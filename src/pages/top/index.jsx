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
		document.getElementsByTagName('body')[0].style.height = '100%'
		document.getElementById('container').style.height = '100%'
	}
}
