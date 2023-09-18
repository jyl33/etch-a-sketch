function initGame(){
    const canvas = document.querySelector('.game-ui');
    for(i = 0; i < 16; i++){
        const square = document.createElement('div');
        square.classList.add('square')
        canvas.appendChild(square);
        console.log("appending square " + i)
    }

}

initGame();