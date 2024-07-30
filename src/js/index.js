// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const startButtonElement = document.getElementById('start-button');
const boardContainer = document.getElementById('board');
const inputLevels = document.querySelectorAll('.level input');
const labelsLevels = document.querySelectorAll('.level label');
const reStartButtonElement = document.getElementById('restart-button');

const createBoard = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 9; i++) {
    const newRow = document.createElement('div');

    newRow.classList.add('board__card');

    for (let i = 0; i < 9; i++) {
      const newColum = document.createElement('input');

      newColum.classList.add('board__input');

      newRow.append(newColum);
    }

    fragment.append(newRow);
  }

  boardContainer.append(fragment);
};

const fillArray = ( array) => {
  while (array.length < 9) {
    const number = Math.ceil(Math.random() * 9);
    if (!array.includes(number)) {
      array.push(number);
    } 
  }
};

const createArrayValues = () => {

  let arrayBoard = [];

  for (let row = 0; row < 9; row++) {
    let newRowArray = [];
    for (let colum = 0; colum < 9; colum++) {
      fillArray(newRowArray)
    }

    arrayBoard.push(newRowArray);
  }

  console.log(arrayBoard);
};
createBoard();
//createArrayValues();


const test = [[1,2,3],[4,5,6],[7,8,9]]

//console.log(test[0].includes(3))

const arrayTest = (array) =>{
  let newBigArray = []

  for(let i = 0; i<3; i++){
    let newSmallArray = []

    while (newSmallArray.length <3){
      const number = Math.ceil(Math.random()*9)

      if(!newSmallArray.includes(number) && !array[i].includes(number)){
        newSmallArray.push(number)
        
      }
      
    }

    

    newBigArray.push(newSmallArray)
    
  }

  console.log(newBigArray)

}

arrayTest(test)