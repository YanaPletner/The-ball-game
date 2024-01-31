"use strict"

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