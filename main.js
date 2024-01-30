"use strict"

function onBallClick(elBall, maxDiameter) {
    const randomExpand = getRandomInt(20, 60)
    var elBallWidth = elBall.innerHTML

    if (elBallWidth < maxDiameter) {
        elBall.style.width = +elBallWidth + randomExpand + "px"
        elBall.style.height = +elBallWidth + randomExpand + "px"
        elBall.innerHTML = +elBallWidth + randomExpand
    }
    if (elBallWidth >= maxDiameter) {
        elBall.innerHTML = 100
        elBall.style.width = +elBall.innerHTML + "px"
        elBall.style.height = +elBall.innerHTML + "px"
    }
    changeBallColor(elBall)
}

function changeBallColor(elB) {
    const randomColor = getRandomColor()
    elB.style.backgroundColor = randomColor
}

function swapColorAndSize(elBall) {
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')

    const elBall1Size = elBall1.innerHTML
    const elBall2Size = elBall2.innerHTML
    elBall1.style.width = +elBall2Size + 'px'
    elBall1.style.height = +elBall2Size + 'px'

    elBall1.innerHTML = elBall2Size
    elBall2.innerHTML = elBall1Size

    elBall2.style.width = +elBall1Size + 'px'
    elBall2.style.height = +elBall1Size + 'px'

    const elBall1Color = window.getComputedStyle(elBall1).backgroundColor
    const elBall2Color = window.getComputedStyle(elBall2).backgroundColor
    elBall1.style.backgroundColor = elBall2Color
    elBall2.style.backgroundColor = elBall1Color
}