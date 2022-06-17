let game = ['rock', 'paper', 'scissors'];


const computerclick = document.getElementById('computer');
function computerPlay(){
    let computerChoice = game[parseInt(Math.floor(Math.random()*3))];
    computerclick.textContent = `CPU play: ${computerChoice}`;
    computerclick.removeAttribute('class');
    computerclick.classList.add(computerChoice);
    return computerChoice;
}

const player = document.getElementById('player');
const result = document.getElementById('result');
const playerscore = document.getElementById('playerscore');
const cpuscore = document.getElementById('cpuscore');

const rock = document.getElementById('rock');  
rock.addEventListener('click', function play() {
    rock.classList.add('playing')
    player.textContent = `You played: ${rock.id}`;
    player.removeAttribute('class');
    player.classList.add(`${rock.id}`);
    let cpu = computerPlay();
    if (cpu==='paper'){
        result.textContent=('You lost! Paper beats Rock!')
        cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
    }
    else if (cpu==='scissors'){
        result.textContent=('You won! Rock beats Scissors')
        playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
    }
    else{result.textContent=(`Thats a Tie!`)};
    if (parseInt(playerscore.innerText.slice(-2)) === 5){
        result.textContent='YOU WON'
        rock.removeEventListener('click', play)
    }
    else if (parseInt(cpuscore.innerText.slice(-2)) === 5){
        result.textContent='CPU WON'
        rock.removeEventListener('click', play)
    };
});

const paper = document.getElementById('paper');   
paper.addEventListener('click', function play()  {
    paper.classList.add('playing')
    player.textContent = `You played: ${paper.id}`;
    player.removeAttribute('class');
    player.classList.add(`${paper.id}`);
    let cpu = computerPlay();
    if (cpu ==='rock'){
        result.textContent=('You won! Paper beats Rock!')
        playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
    }
    else if (cpu==='scissors') {
        result.textContent=('You lost! Scissors beats Paper!')
        cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
    }
    else{result.textContent=(`Thats a Tie!`)};
    if (parseInt(playerscore.innerText.slice(-2)) === 5){
        result.textContent='YOU WON'
        paper.removeEventListener('click', play)
    }
    else if (parseInt(cpuscore.innerText.slice(-2)) === 5){
        result.textContent='CPU WON'
        paper.removeEventListener('click', play)
    };
});

const scissors = document.getElementById('scissors');  
scissors.addEventListener('click', function play()  {
    scissors.classList.add('playing')
    player.textContent = `You played: ${scissors.id}`;
    player.removeAttribute('class');
    player.classList.add(`${scissors.id}`);
    let cpu = computerPlay();
    if (cpu==='rock'){
        result.textContent=('You lost! Rock beats scissors!')
        cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
    }
    else if (cpu==='paper'){
        result.textContent=('You won! Scissors beats Rock')
        playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
    }
    else{result.textContent=(`Thats a Tie!`)};
    if (parseInt(playerscore.innerText.slice(-2)) === 5){
        result.textContent='YOU WON'
        scissors.removeEventListener('click', play)
    }
    else if (parseInt(cpuscore.innerText.slice(-2)) === 5){
        result.textContent='CPU WON'
        scissors.removeEventListener('click', play)
    };
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
  };
  
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('transitionend', removeTransition))