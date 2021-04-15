const player = "X"
const computer = "O"

function handleCellClick(clickedCellEvent) {
    var item = document.getElementsByClassName('one').length;
    var item2 = document.getElementsByClassName('xo').length;
    document.getElementsByClassName('one')[0].getElementsByClassName('xo')[0].innerHTML = 'X';
    document.getElementsByClassName('two')[0].getElementsByClassName('xo')[0].innerHTML = 'O';

    // document.getElementsByClassName('one')[0].innerHTML = next;
    
}


// This will reset the game
function resetGame() {
    location.reload();
    document.getElementsByClassName("one").reset() = '';
    document.getElementsByClassName("two").reset() = '';
    document.getElementsByClassName("three").reset() = '';
}

