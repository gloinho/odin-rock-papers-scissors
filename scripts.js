let game = ['rock', 'paper', 'scissors'];
let cpucount = 0
let playercount = 0

const computerclick = document.getElementById('computer');
function computerPlay(){
    let computerChoice = game[parseInt(Math.floor(Math.random()*3))];
    computerclick.textContent = `CPU play: ${computerChoice}`;
    computerclick.removeAttribute('class');
    computerclick.classList.add(computerChoice);
    return computerChoice;
};

const player = document.getElementById('player');
const result = document.getElementById('result');
const playerscore = document.getElementById('playerscore');
const cpuscore = document.getElementById('cpuscore');


function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
  };
  

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
buttons.forEach(button => button.addEventListener('click', function play() {
    if (cpucount < 5 && playercount < 5){
        if (this.id==='scissors'){
        playRound(this.id)
        this.classList.add('playing')
        player.textContent = `You played: ${this.id}`;
        player.removeAttribute('class');
        player.classList.add(`${this.id}`);
        }
        else if (this.id==='paper'){
            this.classList.add('playing')
            player.textContent = `You played: ${this.id}`;
            player.removeAttribute('class');
            player.classList.add(`${this.id}`);
            playRound(this.id)    
        } 
        else if (this.id==='rock') {
            this.classList.add('playing')
            player.textContent = `You played: ${this.id}`;
            player.removeAttribute('class');
            player.classList.add(`${this.id}`);
            playRound(this.id)
        };
    };
    if (playercount === 5){
        result.textContent='YOU WON'
        this.removeEventListener('click', play)
    }
    else if (cpucount === 5){
        result.textContent='CPU WON'
        this.removeEventListener('click', play)
    };
}));


function playRound(click){
    if (click==='scissors'){    
        let cpu = computerPlay();
        if (cpu==='rock'){
            cpucount++
            result.textContent=('You lost! Rock beats Scissors!')
            cpuscore.textContent = `CPU score: ${cpucount}`
        }
        else if (cpu==='paper'){
            playercount++
            result.textContent=('You won! Scissors beats Paper!')
            playerscore.textContent = `Player score: ${playercount}`
        }
        else{result.textContent=(`Thats a Tie!`)};
    }
    else if(click==='rock'){
        let cpu = computerPlay();
        if (cpu==='paper'){
            cpucount++
            result.textContent=('You lost! Paper beats Rock!')
            cpuscore.textContent = `CPU score: ${cpucount}`
        }
        else if (cpu==='scissors'){
            playercount++
            result.textContent=('You won! Rock beats Scissors')
            playerscore.textContent = `Player score: ${playercount}`
        }
        else{result.textContent=(`Thats a Tie!`)};
    }
    else if(click==='paper'){
        let cpu = computerPlay();
        if (cpu ==='rock'){
            playercount++
            result.textContent=('You won! Paper beats Rock!')
            playerscore.textContent = `Player score: ${playercount}`
        }
        else if (cpu==='scissors') {
            cpucount++
            result.textContent=('You lost! Scissors beats Paper!')
            cpuscore.textContent = `CPU score: ${cpucount}`
        }
        else{result.textContent=(`Thats a Tie!`)};   
    };  
};


