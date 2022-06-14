let game = ['rock', 'paper', 'scissors']
let playerscore = 0
let cpuscore = 0
let howmanygames = parseInt(prompt('How many times do you want to play?! '))


function computerPlay(){
    let computerChoice = game[parseInt(Math.floor(Math.random()*3))]
    console.log(`Computer Choice = ${computerChoice}`)
    return computerChoice
}


function letsplay(player, cpu){
    let me = player.toLowerCase()
    switch (me) {
        case 'rock':
            if (cpu==='paper'){
                console.log('You lost! Paper beats Rock!')
                cpuscore += 1
            }
            else if (cpu==='scissors'){
                console.log('You won! Rock beats Scissors')
                playerscore += 1
            }
            else{console.log(`You chose ${me} and the computer chose ${cpu}... Thats a Tie!`)}
            break;
        case 'paper':
            if (cpu==='rock'){
                console.log('You won! Paper beats Rock!')
                playerscore += 1
            }
            else if (cpu==='scissors') {
                console.log('You lost! Scissors beats Paper!')
                cpuscore += 1
            }
            else{console.log(`You chose ${me} and the computer chose ${cpu}... Thats a Tie!`)}
            break;
        case 'scissors':
            if (cpu==='rock'){
                console.log('You lost! Rock beats scissors!')
                cpuscore += 1
            }
            else if (cpu==='paper'){
                console.log('You won! Scissors beats Rock')
                playerscore += 1
            }
            else{console.log(`You chose ${me} and the computer chose ${cpu}... Thats a Tie!`)}
            break;
        default:
            console.log('Only Rock Paper or Scissors!!!!')
            break;
    }
}


function games(rounds){
    for(i=1;i<=rounds;i++){
        let playerChoice = prompt('Lança a braba!')
        let cpuChoice = computerPlay()
        letsplay(playerChoice,cpuChoice)
    }

    if(playerscore>cpuscore){
        console.log(`You won ${playerscore} games. CPU won ${cpuscore} games... YOU WON!!!`)
    } else if (playerscore<cpuscore){
        console.log(`You won ${playerscore} games. CPU won ${cpuscore} games... YOU LOST!!!`)
    }else{console.log(`You won ${playerscore} games. CPU won ${cpuscore} games... TIE!!!`)}
}


games(howmanygames)