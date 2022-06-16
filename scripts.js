let game = ['rock', 'paper', 'scissors']
let playerscore = 0
let cpuscore = 0


const computerclick = document.getElementById('computer')
function computerPlay(){
    let computerChoice = game[parseInt(Math.floor(Math.random()*3))]
    computerclick.textContent = `CPU play: ${computerChoice}`
    computerclick.classList.add(computerChoice)
    console.log(computerclick.className)
    return computerChoice
}

window.addEventListener('load', computerPlay)

function letsplay(){
    const playerClick = document.querySelectorAll('button');
    const player = document.getElementById('player')
    playerClick.forEach((button) => {
    button.addEventListener('click',() => {
        if (button.id==='rock'){player.textContent = `You played: ${button.id}`, player.classList.add(`${button.id}`)}
        if (button.id==='scissors'){player.textContent = `You played: ${button.id}`, player.classList.add(`${button.id}`)}
        if (button.id==='paper'){player.textContent = `You played: ${button.id}`, player.classList.add(`${button.id}`)}
    }, {once:true})
    });
}
