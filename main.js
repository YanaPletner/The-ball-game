"use strict"

function onBallClick(elB) {
    const expandBy = 50
    var elBallWidth = +elB.innerHTML
    const elBall = document.querySelector('.ball')
    elBall.style.width = +elBallWidth + expandBy + "px"
    elBall.style.height = +elBallWidth + expandBy + "px"
    elB.innerHTML = +elBallWidth + expandBy
}