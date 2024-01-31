"use strict"

function onBallClick(elBall, maxDiameter, minDiameter) {
    const randomExpand = getRandomInt(20, 60)
    var elBallWidth = +elBall.innerHTML

    if (elBallWidth + randomExpand >= maxDiameter) {
        getMaxDiameter(elBall, maxDiameter)

    } else {
        elBall.style.width = elBallWidth + randomExpand + "px"
        elBall.style.height = elBallWidth + randomExpand + "px"
        elBall.innerHTML = elBallWidth + randomExpand
    }
    if (elBallWidth === +maxDiameter) {
        getMinDiameter(elBall, minDiameter)
    }
    changeBallColor(elBall)
}

function swapColorAndSize() {
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')

    const elBall1Size = +elBall1.innerHTML
    const elBall2Size = +elBall2.innerHTML

    elBall1.style.width = elBall2Size + 'px'
    elBall1.style.height = elBall2Size + 'px'

    elBall1.innerHTML = elBall2Size
    elBall2.innerHTML = elBall1Size

    elBall2.style.width = elBall1Size + 'px'
    elBall2.style.height = elBall1Size + 'px'

    const elBall1Color = window.getComputedStyle(elBall1).backgroundColor
    const elBall2Color = window.getComputedStyle(elBall2).backgroundColor
    elBall1.style.backgroundColor = elBall2Color
    elBall2.style.backgroundColor = elBall1Color
}

function reduceByRandomSize() {
    const minDiameter = 100
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')
    var elBall1Width = +elBall1.innerHTML
    var elBall2Width = +elBall2.innerHTML
    const randomReduce = getRandomInt(20, 60)

    if (elBall1Width - randomReduce < minDiameter) {
        getMinDiameter(elBall1, minDiameter)

    } else {
        getReducedBall(elBall1, randomReduce)
    }
    if (elBall2Width - randomReduce < minDiameter) {
        getMinDiameter(elBall2, minDiameter)

    } else {
        getReducedBall(elBall2, randomReduce)
    }
}

function changePageColor() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
    elBody.style.transition = '1s'
}

function reset() {
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')
    const elBody = document.querySelector('body')
    const minDiameterBall1 = 100
    const minDiameterBall2 = 200

    getMinDiameter(elBall1, minDiameterBall1)
    getMinDiameter(elBall2, minDiameterBall2)

    elBall1.style.backgroundColor = 'rgb(189, 145, 188)'
    elBall2.style.backgroundColor = 'rgb(154, 123, 184)'
    elBody.style.backgroundColor = 'rgb(15, 15, 15)'
}

function changeBallColor(elB) {
    const randomColor = getRandomColor()
    elB.style.backgroundColor = randomColor
}

function getMinDiameter(elBall, minDiameter) {
    elBall.style.width = minDiameter + 'px'
    elBall.style.height = minDiameter + 'px'
    elBall.innerHTML = minDiameter
}

function getMaxDiameter(elBall, maxDiameter) {
    elBall.style.width = maxDiameter + 'px'
    elBall.style.height = maxDiameter + 'px'
    elBall.innerHTML = maxDiameter
}

function getReducedBall(elBall, randomReduce) {
    const elBallWidth = +elBall.innerHTML
    elBall.style.width = elBallWidth - randomReduce + 'px'
    elBall.style.height = elBallWidth - randomReduce + 'px'
    elBall.innerHTML = elBallWidth - randomReduce
}

var gResetBallIntrvl
var gCycleCount = 0
var gMaxCycles = 10

function startResetBallInterval() {

    gResetBallIntrvl = setInterval(() => {
        console.log('start intrvl')
        const elBall1 = document.querySelector('.ball-1')
        const elBall2 = document.querySelector('.ball-2')
        const elBall3 = document.querySelector('.ball-3')
        const elBall4 = document.querySelector('.ball-4')

        elBall1.click()
        elBall2.click()
        elBall3.click()
        elBall4.click()

        gCycleCount++
        if (gCycleCount >= gMaxCycles) clearInterval(gResetBallIntrvl)
    }, 2000)
}

function mouseOverReset() {
    gCycleCount = 0
    setTimeout(startResetBallInterval, 2000)
}

function mouseoutReset() {
    if (gResetBallIntrvl) clearInterval(gResetBallIntrvl)
}
