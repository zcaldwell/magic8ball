import { answers } from './answers.js';

const getRandomNumber = (max)=>{
  return Math.floor(Math.random() * max);
};



const buttonPress = document.getElementById('shake-8ball')
const answer = document.getElementById('answer');

buttonPress.addEventListener('click', ()=> {
  const randomAnswer = getRandomNumber(answers.length);
  return answer.textContent = answers[randomAnswer];
  
})