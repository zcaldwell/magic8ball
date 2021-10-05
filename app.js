import { answers } from './answers.js';

const getRandomNumber = (max)=>{
  return Math.floor(Math.random() * max);
};

const buttonPress = document.getElementById('shake-8ball');
const answer = document.getElementById('8ballanswer');
const shakeBall = document.getElementById('theball');

buttonPress.addEventListener('click', ()=> {
  const randomAnswer = getRandomNumber(answers.length);
  shakeBall.classList.add('shake');
  document.getElementById('8ballanswer').className = 'hide';
  document.getElementById('8ballanswer').className = 'show';
  onclick="reset_animation()"
  return answer.textContent = answers[randomAnswer];

})