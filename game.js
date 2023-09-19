const DEFAULT_GRID_SIZE = 4;

function getColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function decreaseBrightness(element){
    const filterValue = element.style.filter;
    const currentBrightness = filterValue.match(/brightness\(([\d.]+)\)/);
    console.log(currentBrightness);
    let newBrightness = currentBrightness[1] - 0.1;
    return `brightness(${newBrightness})`;
}


function initGame(num){

    const flexBasis = 100 / num;
    
    const canvas = document.querySelector('.game-ui');
    canvas.innerHTML = '';
    for(let i = 0; i < num * num; i++){
        const square = document.createElement('div');
        square.classList.add('square')
        square.style.flexBasis = `${flexBasis}%`;
        square.style.filter = `brightness(1)`;
        canvas.appendChild(square);
    }

    const grid = document.querySelectorAll('.square');

    grid.forEach((element) => {
        element.addEventListener("mouseenter", (event)=>{
            console.log("mouse over");
            element.style.backgroundColor = getColor();
            element.style.filter = decreaseBrightness(element);
        }, 
        false,
        );
    }, false
    );
}

function changeGridSize(){
    let num = 0;
    do{
        num = parseInt(prompt("Please enter the number of squares per side of the grid (less than 100)"), 10);
    } while (num == null || num == "" || typeof num !== "number" || num > 100);

    initGame(num);
}

function clearGrid(){
    const grid = document.querySelectorAll('.square');
    grid.forEach((element) => {
        element.style.backgroundColor = "white";
        element.style.filter = "brightness(1)";
    }, false
    );
}

const gameSizeButton = document.querySelector('.game-size-btn');
gameSizeButton.addEventListener("click", (event) => {
    changeGridSize();
}, false, 
);

const clearGridButton = document.querySelector('.clear-board-btn');
clearGridButton.addEventListener("click", (event)=>{
    clearGrid();
}, false,
);

initGame(DEFAULT_GRID_SIZE);