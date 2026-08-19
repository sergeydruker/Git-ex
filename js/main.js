'use strict'

function onBallClick(elBall) {
elBall.style.width = `${elBall.offsetWidth + 50}px`
elBall.innerHTML = elBall.style.width
}