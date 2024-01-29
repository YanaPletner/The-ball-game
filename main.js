"use strict"

function onBallClick(elB) {
    const expandBy = 50
    const elBall = document.querySelector('.ball')

    var elBallWidth = +elB.innerHTML
    elBall.style.width = +elBallWidth + expandBy + "px"
    elBall.style.height = +elBallWidth + expandBy + "px"
    elB.innerHTML = +elBallWidth + expandBy
}