// @flow

import React from 'react'

import Item, { DummyItem } from '../../components/item'
import Contact, { DummyContact } from '../../components/contact'
import { getAA } from '../../api'
import palette from './palette'

import {
	Main,
	Page,
	EyeCatch,
	Title,
	Layer2,
	Layer3,
	Layer4,
	Menu,
	Contacts,
} from './Wrapper'

export default class TopPage extends React.Component<{}> {
	render() {
		return (
			<Main>
				<Page>
					<EyeCatch>
						<Title>elzup.com</Title>
					</EyeCatch>
					<Layer2>
						<Menu>
							<Item label="Product" name="product" />
							<Item label="Art" name="art" />
							<DummyItem />
							<Item label="Log" name="log" />
						</Menu>
						<Layer3>
							<Layer4 />
							<Contacts>
								<DummyContact />
								<DummyContact />
								<Contact
									label="Github"
									link="//github.com/elzup"
									type="github"
								/>
								<DummyContact />
								<Contact
									label="Twitter"
									link="//twitter.com/_elzup_"
									type="twitter"
								/>
								<Contact
									label="Facebook"
									link="//www.facebook.com/takahashiroto"
									type="facebook"
								/>
								<Contact
									label="Hatena"
									link="http://elzup.hatenablog.com/"
									type="hatena"
								/>
								<Contact label="Qiita" link="//qiita.com/elzup" type="qiita" />
								<Contact
									label="Tumbler"
									link="//elzup.tumblr.com"
									type="tumblr"
								/>
							</Contacts>
						</Layer3>
					</Layer2>
				</Page>
			</Main>
		)
	}

	componentDidMount() {
		this.loadAA()
		palette()
	}

	async loadAA() {
		const { aa1, aa2 } = await getAA()
		console.log(aa1)
		console.log(`%c${aa2}`, 'font-size: 10px;')
	}
}
