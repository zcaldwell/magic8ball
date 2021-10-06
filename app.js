import { answers } from './answers.js';

const getRandomNumber = (max)=>{
  return Math.floor(Math.random() * max);
};

const buttonPress = document.getElementById('shake-8ball');
const answer = document.getElementById('8ballanswer');
const shakeBall = document.getElementById('theball');
const playAudio = document.getElementById('audio')

buttonPress.addEventListener('click', ()=> {
  const randomAnswer = getRandomNumber(answers.length);
  playAudio.play();
  shakeBall.classList.remove('shake');
  void shakeBall.offsetWidth;
  shakeBall.classList.add('shake');
  document.getElementById('8ballanswer').className = 'hide';
  document.getElementById('8ballanswer').className = 'show';
  return answer.textContent = answers[randomAnswer];

})