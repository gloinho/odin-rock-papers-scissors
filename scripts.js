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


function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
  };
  

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('transitionend', removeTransition))
buttons.forEach(button => button.addEventListener('click', function play() {
    if (this.id==='scissors'){
        this.classList.add('playing')
        player.textContent = `You played: ${this.id}`;
        player.removeAttribute('class');
        player.classList.add(`${this.id}`);
        let cpu = computerPlay();
        if (cpu==='rock'){
            result.textContent=('You lost! Rock beats Scissors!')
            cpuscore.textContent = `CPU score: ${parseInt(cpuscore.innerText.slice(-2)) + 1}`
        }
        else if (cpu==='paper'){
            result.textContent=('You won! Scissors beats Paper!')
            playerscore.textContent = `Player score: ${parseInt(playerscore.innerText.slice(-2)) + 1}`
        }
        else{result.textContent=(`Thats a Tie!`)};
        if (parseInt(playerscore.innerText.slice(-2)) === 5){
            result.textContent='YOU WON'
            this.removeEventListener('click', play)
        }
        else if (parseInt(cpuscore.innerText.slice(-2)) === 5){
            result.textContent='CPU WON'
            this.removeEventListener('click', play)
        };
    }
    else if (this.id==='paper'){
        this.classList.add('playing')
        player.textContent = `You played: ${this.id}`;
        player.removeAttribute('class');
        player.classList.add(`${this.id}`);
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
            this.removeEventListener('click', play)
        }
        else if (parseInt(cpuscore.innerText.slice(-2)) === 5){
            result.textContent='CPU WON'
            this.removeEventListener('click', play)
        };
    } else if (this.id==='rock') {
        this.classList.add('playing')
        player.textContent = `You played: ${this.id}`;
        player.removeAttribute('class');
        player.classList.add(`${this.id}`);
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
            this.removeEventListener('click', play)
        }
        else if (parseInt(cpuscore.innerText.slice(-2)) === 5){
            result.textContent='CPU WON'
            this.removeEventListener('click', play)
        };
    };
}))
