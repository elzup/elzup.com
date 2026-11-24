// @flow

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { media } from '../../utils'
// CRA 4 (webpack 4) は package.json の exports を読まないので、サブパスではなくルートの mount を使う
import { mount } from 'particle-life-bg'

// Product 一覧の先頭に置く、新しいポートフォリオ (anozon.me) への案内カード。
// 幅と余白は product-box の Wrapper と揃え、一覧の 1 枚として並ぶようにする。
// 背景に anozon.me と同じ particle-life-bg を流して「向こうに続きがある」ことを見せる。
const Card = styled.li`
	width: 344px;
	min-height: 260px;
	margin: 5px;
	box-sizing: border-box;
	/* fire 配色の地色。canvas の描画前に一瞬見えても違和感がないように揃える */
	background: #120604;
	border-radius: 2px;
	overflow: hidden;
	position: relative;
	box-shadow: 0 0 0 1px #3a3a42;
	${media.handheld(`
		width: 94%;
	`)};
`

/* 粒子の数はカード 1 枚 (344x260 前後) で塊が見える程度。anozon.me の Profile (全画面で 1600) を面積比で縮めた値 */
const PARTICLE_COUNT = 360

const Canvas = styled.canvas`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
`

const CardLink = styled.a`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	color: white;
	text-decoration: none;
	/* 粒子の上でも文字が読めるよう、下側だけ黒を敷く */
	background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.85));

	&:focus-visible {
		outline: 2px solid white;
		outline-offset: -6px;
	}
`

const Note = styled.small`
	opacity: 0.75;
	font-size: 13px;
`

const Title = styled.strong`
	font-size: 24px;
	font-weight: normal;
	margin: 4px 0;
`

/* 文字だけだと見出しに見えてリンクと気づかれないので、押せる形を置く。
   粒子を隠さないよう半透明にし、カード全体がリンクなのでホバーはカードのどこにいてもここに出す */
const Cta = styled.span`
	align-self: flex-start;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin-top: 14px;
	padding: 7px 14px;
	border: 1px solid rgba(255, 255, 255, 0.35);
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.08);
	backdrop-filter: blur(6px);
	color: white;
	font-size: 14px;
	letter-spacing: 0.04em;
	transition: background 0.2s, color 0.2s, border-color 0.2s;

	${CardLink}:hover &,
	${CardLink}:focus-visible & {
		background: white;
		border-color: white;
		color: black;
	}
	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
`

const Arrow = styled.span`
	transition: transform 0.2s;

	${CardLink}:hover &,
	${CardLink}:focus-visible & {
		transform: translateX(3px);
	}
	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
`

const AnozonCard = () => {
	const canvasRef = useRef(null)
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return undefined
		const bg = mount(canvas, {
			scheme: 'fire',
			drawStyle: 'speedGlow',
			count: PARTICLE_COUNT,
			force: 6.5,
			// 粒子が少ないので 60fps でも負荷は小さく、30fps より動きが滑らかに見える
			fps: 60,
			// anozon.me と同じく OS の「動きを減らす」設定でも止めない (止まった 1 枚絵だとカードの意図が伝わらない)
			respectReducedMotion: false,
		})
		return () => bg.destroy()
	}, [])

	return (
		<Card>
			<Canvas ref={canvasRef} aria-hidden="true" />
			<CardLink href="https://anozon.me/">
				<Note>ここは 2012–2022 のアーカイブです</Note>
				<Title>2023 年からの制作は anozon.me</Title>
				<Cta>
					anozon.me<Arrow aria-hidden="true">→</Arrow>
				</Cta>
			</CardLink>
		</Card>
	)
}

export default AnozonCard
