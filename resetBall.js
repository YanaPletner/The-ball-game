"use strict"

var gResetBallIntrvl
var gCycleCount = 0
var gMaxCycles = 10

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
    gResetBallIntrvl = false
}

function startResetBallInterval() {
    if (!gResetBallIntrvl) {
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
}

function mouseOverReset() {
    if (!gResetBallIntrvl) {
        gCycleCount = 0
        setTimeout(startResetBallInterval, 2000)
    }
}

function mouseoutReset() {
    if (gResetBallIntrvl) clearInterval(gResetBallIntrvl)
}