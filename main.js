"use strict"

function onBallClick(elB) {
    // const expandBy = 50
    const elBall = document.querySelector('.ball')
    const randomExpand = getRandomInt(20, 60)
    console.log(randomExpand)
    var elBallWidth = +elB.innerHTML
    if (elBallWidth < 400) {
        elBall.style.width = +elBallWidth + randomExpand + "px"
        elBall.style.height = +elBallWidth + randomExpand + "px"
        elB.innerHTML = +elBallWidth + randomExpand
    }
    if (elBallWidth >= 400) {
        elB.innerHTML = 100
        elBall.style.width = +elB.innerHTML + "px"
        elBall.style.height = +elB.innerHTML + "px"
    }
}