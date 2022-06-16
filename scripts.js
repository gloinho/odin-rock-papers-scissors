let game = ['rock', 'paper', 'scissors']


const computerclick = document.getElementById('computer')
function computerPlay(){
    let computerChoice = game[parseInt(Math.floor(Math.random()*3))]
    computerclick.textContent = `CPU play: ${computerChoice}`
    computerclick.removeAttribute('class')
    computerclick.classList.add(computerChoice)
    return computerChoice
}

const player = document.getElementById('player')
const result = document.getElementById('result')
const playerscore = document.getElementById('playerscore')
const cpuscore = document.getElementById('cpuscore')

const rock = document.getElementById('rock')  
rock.addEventListener('click', () => {
    if (parseInt(playerscore.innerText.slice(-2)) === 5){result.textContent='YOU WON'}
    else if (parseInt(cpuscore.innerText.slice(-2)) === 5){result.textContent='CPU WON'}
    else {    
        player.textContent = `You played: ${rock.id}`
        player.removeAttribute('class')
        player.classList.add(`${rock.id}`)
        let cpu = computerPlay()
        if (cpu==='paper'){
            result.textContent=('You lost! Paper beats Rock!')
            cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
        }
        else if (cpu==='scissors'){
            result.textContent=('You won! Rock beats Scissors')
            playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
        }
        else{result.textContent=(`You chose ${rock.id} and the computer chose ${cpu}... Thats a Tie!`)}
    }   
})

const paper = document.getElementById('paper')   
paper.addEventListener('click', () => {
    player.textContent = `You played: ${paper.id}`
    player.removeAttribute('class')
    player.classList.add(`${paper.id}`)
    if (parseInt(playerscore.innerText.slice(-2)) === 5){result.textContent='YOU WON'}
    else if (parseInt(cpuscore.innerText.slice(-2)) === 5){result.textContent='CPU WON'}
    else {
        let cpu = computerPlay()
        if (cpu ==='rock'){
            result.textContent=('You won! Paper beats Rock!')
            playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
        }
        else if (cpu==='scissors') {
            result.textContent=('You lost! Scissors beats Paper!')
            cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
        }
        else{result.textContent=(`You chose ${paper.id} and the computer chose ${cpu}... Thats a Tie!`)}
    }
    
})

const scissors = document.getElementById('scissors')   
scissors.addEventListener('click', () => {
    player.textContent = `You played: ${scissors.id}`
    player.removeAttribute('class')
    player.classList.add(`${scissors.id}`)
    if (parseInt(playerscore.innerText.slice(-2)) === 5){result.textContent='YOU WON'}
    else if (parseInt(cpuscore.innerText.slice(-2)) === 5){result.textContent='CPU WON'}
    else {
            let cpu = computerPlay()
        if (cpu==='rock'){
            result.textContent=('You lost! Rock beats scissors!')
            cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
        }
        else if (cpu==='paper'){
            result.textContent=('You won! Scissors beats Rock')
            playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
        }
        else{result.textContent=(`You chose ${scissors.id} and the computer chose ${cpu}... Thats a Tie!`)}
    }

})

console.log(cpuscore)