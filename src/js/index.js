// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const startButtonElement = document.getElementById('start-button');
const boardContainer = document.getElementById('board');
const inputLevels = document.querySelectorAll('.level input');
const labelsLevels = document.querySelectorAll('.level label');
const reStartButtonElement = document.getElementById('restart-button');

const resetPage = () => {
  boardContainer.textContent = '';
  inputLevels.forEach(input => {
    input.disabled = false;
  });
};

const createNumbers = () => {
  let numbers = [];

  while (numbers.length !== 9) {
    const number = Math.ceil(Math.random() * 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
      //console.log(number);
    }
  }

  return numbers;
};

/*
const createBoard = () => {
    resetPage()
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 9; i++) {
    const bigContainer = document.createElement('div');

    bigContainer.classList.add('board__card');
    
    const numbers = createNumbers()

    for (let j = 0; j < 9; j++) {
      const input = document.createElement('input');

      input.classList.add('board__input');


      bigContainer.append(input);
    }

    fragment.append(bigContainer);
  }

  boardContainer.append(fragment);
};
*/

const createBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 9; i++) {
    const bigContainer = document.createElement('div');

    bigContainer.classList.add('board__card');


    for (let j = 0; j < 3; j++) {
      const smallContainer = document.createElement('div')

      smallContainer.classList.add('board__card2')
      for(let k= 0; k<3;k++){
        const input = document.createElement('input');

        input.classList.add('board__input');
        
        

        smallContainer.append(input);
        
      }

      

      bigContainer.append(smallContainer)
    }

    fragment.append(bigContainer);
  }

  boardContainer.append(fragment);
};

const chooseDifficulty = () => {
  inputLevels.forEach(input => {
    if (input.checked) {
      const level = input.id;
      return level;
    } else {
      input.disabled = true;
    }
  });
};

const createGame = () => {
  const inputs = document.querySelectorAll('.board__card');
  console.log(inputs)
  for (let i = 0; i < inputs.length; i++) {
    //console.log(inputs[i].children);
    for (let j = 0; j<3; j++){
      console.log(inputs[i].children[j])
      
    }
  }
};

const reStart = () => {
  resetPage();
  chooseDifficulty();
};

//sresetPage();

startButtonElement.addEventListener('click', createGame);
reStartButtonElement.addEventListener('click', reStart);

createBoard();
//console.log(inputLevels);
