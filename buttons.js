"use strict"
var gGameStates = []
var gCurrStateIdx = -1
const gBall1MinDiameter = 100
const gBall2MinDiameter = 200


function saveGameState() {
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')
    const elBody = document.querySelector('body')
    // const elBall1Color = //window.getComputedStyle(elBall1).backgroundColor
    // const elBall2Color = //window.getComputedStyle(elBall2).backgroundColor
    // const elBodyColor = //window.getComputedStyle(elBody).backgroundColor
    const elBall1Color = elBall1.style.backgroundColor//window.getComputedStyle(elBall1).backgroundColor
    const elBall2Color = elBall2.style.backgroundColor//window.getComputedStyle(elBall2).backgroundColor
    const elBodyColor = window.getComputedStyle(elBody).backgroundColor

    console.log(elBodyColor)
    var gameState = {
        ball1: { size: +elBall1.innerHTML, bgcColor: elBall1Color },
        ball2: { size: +elBall2.innerHTML, bgcColor: elBall2Color },
        page: { bgcColor: elBodyColor }
    }

    gGameStates.push(gameState)
    gCurrStateIdx = gGameStates.length - 1
    console.log(gGameStates)
}

function restoreGameState() {
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')
    const elBody = document.querySelector('body')


    if (gCurrStateIdx >= 0 && gCurrStateIdx < gGameStates.length) {
        var prevState = gGameStates[gCurrStateIdx];

        elBall1.style.width = prevState.ball1.size + 'px';
        elBall1.style.height = prevState.ball1.size + 'px';
        elBall1.style.backgroundColor = prevState.ball1.bgcColor
        elBall1.innerHTML = prevState.ball1.size

        elBall2.style.width = prevState.ball2.size + 'px';
        elBall2.style.height = prevState.ball2.size + 'px';
        elBall2.style.backgroundColor = prevState.ball2.bgcColor
        elBall2.innerHTML = prevState.ball2.size

        elBody.style.backgroundColor = prevState.page.bgcColor

    }
}

function undo() {
    gCurrStateIdx = Math.max(0, gCurrStateIdx - 1);
    restoreGameState();
}

function redo() {
    gCurrStateIdx = Math.min(gGameStates.length - 1, gCurrStateIdx + 1);
    restoreGameState();

}

function makeInitialStyleMap() {
    const elBall1 = document.querySelector('.ball-1')
    const elBall2 = document.querySelector('.ball-2')
    const elBody = document.querySelector('body')
    const elBall1Color = elBall1.style.backgroundColor//window.getComputedStyle(elBall1).backgroundColor
    const elBall2Color = elBall2.style.backgroundColor//window.getComputedStyle(elBall2).backgroundColor
    const elBodyColor = elBody.style.backgroundColor//window.getComputedStyle(elBody).backgroundColor

    gGameStates = [
        {
            ball1: { size: gBall1MinDiameter, bgcColor: elBall1Color },
            ball2: { size: gBall2MinDiameter, bgcColor: elBall2Color },
            page: { bgcColor: elBodyColor }
        }
    ]
}

