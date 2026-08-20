'use strict'

function onBallClick(elBall) {
    const cleanNumber = elBall.style.width.replace(/\D/g, "");
    const rngNum = getRandomIntInclusive(20, 50)

    if (+cleanNumber + rngNum >= 400) {
        elBall.style.width = '100px'
        elBall.innerHTML = elBall.style.width
        
    }
    else {
        elBall.style.width = `${elBall.offsetWidth + rngNum}px`
        elBall.innerHTML = elBall.style.width
        
    }
}