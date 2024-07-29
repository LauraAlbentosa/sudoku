// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const startButtonElement = document.getElementById('start-button');
const boardContainer = document.getElementById('board');
const inputLevels = document.querySelectorAll('.level input');
const labelsLevels = document.querySelectorAll('.level label');
const reStartButtonElement = document.getElementById('restart-button');

const createNumbers = () => {
  let numbers = [];

  while (numbers.length !== 9) {
    const number = Math.ceil(Math.random() * 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
      //console.log(row1);
    }
  }

  //console.log(numbers + '    ' +row1)
  //console.log(numbers + '    ' +row2)
  //console.log(numbers + '    ' +row3)

  return numbers;
};

const createBoard = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 9; i++) {
    const bigContainer = document.createElement('div');

    bigContainer.classList.add('board__card');

    //console.log(test);

    for (let j = 0; j < 3; j++) {
      const smallContainer = document.createElement('div');

      smallContainer.classList.add('board__card2');
      for (let k = 0; k < 3; k++) {
        const input = document.createElement('input');

        input.classList.add('board__input');

        smallContainer.append(input);
      }

      bigContainer.append(smallContainer);
    }

    fragment.append(bigContainer);
  }

  boardContainer.append(fragment);
};

const fillBoard = () => {
  const inputs = document.querySelectorAll('.board__card');
  //console.log(inputs[0].children);

  let numbers = createNumbers();
  let squareValues = [];

  let row1 = numbers.slice(0, 3);
  let row2 = numbers.slice(3, 6);
  let row3 = numbers.slice(6, 9);

  squareValues.push(row1, row2, row3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const input = inputs[0].children[i].children[j];

      input.value = squareValues[i][j];
    }
  }

  return squareValues;
  //const newORder = reOrderNumbers(inputs[0].children)
};

const fillPart2 = ()=>{
  const squareValues = fillBoard()
  const inputs =document.querySelectorAll('.board__card2')

  for ( let i = 1; i<9;i++){
    
  }

  console.log(squareValues)
}

const reOrderColums = array => {
  let newArray = [];

  newArray.push(array[2], array[0], array[1]);

  console.log(newArray);

  return newArray;
};

const reOrderRows = arrays =>{
  for (const array of arrays){
    const newArray = testFunction(array)
    console.log(array + ' - ' + newArray)
  }
}

createBoard();
fillBoard()
fillPart2()

/*
const array = [[1,2,3], [4,5,6], [7,8,9]]
const arrayb = [1,2,3]
const testFunction = array =>{
  let newArray = []

  newArray.push(array[2], array[0], array[1])

  console.log(newArray)

  return newArray
}
//testFunction(array)
const reOrder = arrays =>{
  for (const array of arrays){
    const newArray = testFunction(array)
    console.log(array + ' - ' + newArray)
  }
}
reOrder(array)
*/

/*
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
      //console.log(row1);
    }
  }

  //console.log(numbers + '    ' +row1)
  //console.log(numbers + '    ' +row2)
  //console.log(numbers + '    ' +row3)

  return numbers;
};

//createNumbers()

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


const createBoard = () => {
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 9; i++) {
    const bigContainer = document.createElement('div');

    bigContainer.classList.add('board__card');

    let numbers = createNumbers();
    let test = [];

    let row1 = numbers.slice(0, 3);
    let row2 = numbers.slice(3, 6);
    let row3 = numbers.slice(6, 9);

    test.push(row1, row2, row3);

    //console.log(test);

    for (let j = 0; j < 3; j++) {
      const smallContainer = document.createElement('div');

      smallContainer.classList.add('board__card2');
      for (let k = 0; k < 3; k++) {
        const input = document.createElement('input');

        input.classList.add('board__input');
        input.value = test[j][k];

        smallContainer.append(input);
      }

      bigContainer.append(smallContainer);
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
  let row2 = []
  let row3 = []
  const inputs = document.querySelectorAll('.board__card');
  //console.log(inputs)
  for (let i = 0; i < inputs.length; i++) {
    
    //console.log(inputs[i].children);
    for (let j = 0; j < 3; j++) {
      let row1 = []
      //console.log(inputs[i].children[j].children)
      row3 = row1
      for (let k = 0; k < 3; k++) {
        //console.log(inputs[i].children[j].children[k].value)
        
        row1.push(inputs[i].children[j].children[k].value)
        
       
      }
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

*/
