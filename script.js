let firstTimeAtMiddle = true
let firstTimeAtBottom = true


window.onscroll = function(ev) {
		if ((firstTimeAtMiddle && window.innerHeight + window.scrollY) >= document.body.offsetHeight/2) {
				// you're at the bottom of the page
				console.log("at middle");
				document.querySelectorAll('.overlay img').forEach(
					sketch => sketch.classList.toggle('translucent')
				)

				firstTimeAtMiddle = false
		}
    if ((firstTimeAtBottom && window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
				console.log("at bottom");
				document.querySelectorAll('.overlay img').forEach(
					sketch => sketch.classList.toggle('fade')
				)

				firstTimeAtBottom = false
    }
};

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
