'use strict'

function onBallClick(elBall) {
    if (elBall.style.width === '400px') {
        elBall.style.width = '100px'
        elBall.innerHTML = elBall.style.width
    }
    else {
        elBall.style.width = `${elBall.offsetWidth + 50}px`
        elBall.innerHTML = elBall.style.width
    }
}