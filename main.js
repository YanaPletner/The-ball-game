"use strict"

function onBallClick(elB) {
    const randomExpand = getRandomInt(20, 60)
    var elBallWidth = +elB.innerHTML

    if (elBallWidth < 400) {
        elB.style.width = +elBallWidth + randomExpand + "px"
        elB.style.height = +elBallWidth + randomExpand + "px"
        elB.innerHTML = +elBallWidth + randomExpand
    }
    if (elBallWidth >= 400) {
        elB.innerHTML = 100
        elB.style.width = +elB.innerHTML + "px"
        elB.style.height = +elB.innerHTML + "px"
    }
    changeBallColor(elB)
}

function changeBallColor(elB) {
    const randomColor = getRandomColor()
    elB.style.backgroundColor = randomColor
}