"use strict"

function onBallClick(elB) {
    const expandBy = 50
    const elBall = document.querySelector('.ball')

    var elBallWidth = +elB.innerHTML
    if (elBallWidth < 400) {
        elBall.style.width = +elBallWidth + expandBy + "px"
        elBall.style.height = +elBallWidth + expandBy + "px"
        elB.innerHTML = +elBallWidth + expandBy
    }
    if (elBallWidth === 400) {
        elB.innerHTML = 100
        elBall.style.width = +elB.innerHTML + "px"
        elBall.style.height = +elB.innerHTML + "px"
    }
}