// const browserWidth = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth
//
// if (screen && browserWidth > 1000) {
//
// 	const randTilt = () => Math.floor(Math.random() * 3) + Math.random()
// 	const randMove = () => Math.floor(Math.random() * 50)
//
// 	const panels = document.querySelectorAll('.panel')
// 	const primaryBorders = document.querySelectorAll('.panel .border-primary')
// 	const secondaryBorders = document.querySelectorAll('.panel .border-secondary')
// 	const content = document.querySelectorAll('.panel .content')
//
// 	for (let i=0;i<panels.length;i++){
// 		const primaryTilt = randTilt() + 1
// 		const secondaryTilt = randTilt() + 2
// 		const moveDirection = Math.random() > 0.5 ? '-' : ''
//
// 		primaryBorders[i].style.transform = `rotate(${primaryTilt}deg)`
// 		secondaryBorders[i].style.transform = `rotate(${secondaryTilt}deg)`
// 		content[i].style.transform = `rotate(-${(primaryTilt + secondaryTilt)}deg)`
// 		panels[i].style.transform = `translate(${moveDirection}${randMove()}%, 0)`
// 	}
//
// }
