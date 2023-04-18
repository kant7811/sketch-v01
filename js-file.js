let color = 'black';
let click = true;

//function for making a sketch board
function populateBoard(size) {
    let board = document.querySelector('.drawing-board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    //function for individual squares
    let zbir = size * size;

    for(i = 0; i < zbir; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white' ;
        board.insertAdjacentElement('beforeend', square);
    }
    
}

populateBoard(16);

  //changing the size of the board and setting the input
  function changeSize(input) {
    if(input >=2 && input <= 100){
        populateBoard(input);
    }
    else{
        return;
    }
  } 
//filling the squares with color
  function colorSquare() {
    if (click) {
      if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
       this.style.backgroundColor = color;
      }
   }
  }
 

  function changeColor(choice) {
    color = choice;
  }
  
  function resetBoard() {
   let board = document.querySelector('.drawing-board');
    let squares = board.querySelectorAll('div');
   squares.forEach((div) => (div.style.backgroundColor = 'white'));
  }

  document.querySelector("body").addEventListener("click", () =>{
    click = !click;
  });
  
