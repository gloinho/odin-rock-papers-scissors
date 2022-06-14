let game = ['rock', 'paper', 'scissors']
function computerPlay(){
    let computerChoice = game[parseInt(Math.floor(Math.random()*3))]
    console.log(`Computer Choice = ${computerChoice}`)
    return computerChoice
}

let playerChoice = 'rock'
let cpuChoice = computerPlay()


function letsplay(player, cpu){
    let me = player.toLowerCase()
    switch (me) {
        case 'rock':
            if (cpu==='paper'){
                console.log('You lost! Paper beats Rock!')
            }
            else if (cpu==='scissors'){
                console.log('You won! Rock beats Scissors')
            }
            else{console.log(`You chose ${me} and the computer chose ${cpu}... Thats a Tie!`)}
            break;
        case 'paper':
            if (cpu==='rock'){
                console.log('You won! Paper beats Rock!')
            }
            else if (cpu==='scissors') {
                console.log('You lost! Scissors beats Paper!')
            }
            else{console.log(`You chose ${me} and the computer chose ${cpu}... Thats a Tie!`)}
            break;
        case 'scissors':
            if (cpu==='rock'){
                console.log('You lost! Rock beats scissors!')
            }
            else if (cpu==='paper'){
                console.log('You won! Scissors beats Rock')
            }
            else{console.log(`You chose ${me} and the computer chose ${cpu}... Thats a Tie!`)}
            break;
        default:
            console.log('Error')
            break;
    }
}

letsplay(playerChoice, cpuChoice)