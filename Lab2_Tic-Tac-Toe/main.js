//our players
var playerX = 'X';
var playerO = 'O';

var xWins = 0;
var oWins = 0;

var whoseTurn = playerX;
var gameOver = false;

var gameBoard = [1,2,3,4,5,6,7,8,9];
var moves = 1;

//must display these at load time
document.getElementsByClassName("display_score")[0].innerHTML = "X="+xWins+"\tO="+oWins;
document.getElementsByClassName("display_player")[0].innerHTML = whoseTurn;

// when a cell is clicked 
function handleCellClick(clickedCellEvent) {
    if(gameOver != true){
        alert("clicked cell = "+clickedCellEvent);
        // alert(document.getElementById(clickedCellEvent).innerHTML)
        if(checkValid(clickedCellEvent)){
            markCell(clickedCellEvent);
            document.getElementById(clickedCellEvent).getElementsByClassName("xo")[0].innerHTML = whoseTurn;
            
            if(wonGame(clickedCellEvent)){
                updateWins(whoseTurn);
                gameOver=true;
                return;
            }
            nextTurn();

        }
    }
}

function checkValid(clickedCellEvent){
    return document.getElementById(clickedCellEvent).getElementsByClassName("xo")[0].innerHTML.length == 0;
}

function updateWins(player){
    if(player == playerX){
        xWins+=1;
    }else if(player == playerO){
        oWins+=1;
    }
    document.getElementsByClassName("display_score")[0].innerHTML = "X="+xWins+"\tO="+oWins;
}

//handle the next move and elements that have to change
function nextTurn(){
    moves = moves +1;
    let player = whoseTurn;
    if(player == playerO){
        whoseTurn = playerX;
    }else{
        whoseTurn = playerO;
    }
    document.getElementsByClassName("display_player")[0].innerHTML = whoseTurn;

    if(moves > 9){
        gameOver=true;
        alert("Game over!");
    }
}

function markCell(number){
    gameBoard[number-1] = whoseTurn;
    document.getElementById(number).getElementsByClassName("xo")[0].style.backgroundColor = "#eb3452";

}

function resetGame(){
    location.reload();
}

function newGame(){
    whoseTurn = playerX;
    let num = 1;
    gameOver=false;
    moves=1;

    var className = document.getElementsByClassName('cell');
    for(var index=1;index <= className.length;index++){
        document.getElementById(index.toString()).getElementsByClassName("xo")[0].innerHTML = "";
    }

    document.getElementsByClassName("display_score")[0].innerHTML = "X="+xWins+"\tO="+oWins;
    document.getElementsByClassName("display_player")[0].innerHTML = whoseTurn;
}

function wonGame(number){
    //dont need to check 
    if(moves < 5){
        return false;
    }

    if(checkHorizontal(number)){
        return true;
    }
    else if(checkVertical(number)){
        return true;
    }
    else if(checkDiagonal(number)){
        return true;
    }else{
        return false;
    }
}

function checkHorizontal(number){
    number = parseInt(number);
    switch(number)
    {
        case 3:
        case 6:
        case 9:
            return (document.getElementById(number-1).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number-2).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 2:
        case 5:
        case 8:
            return (document.getElementById(number+1).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number-1).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
        case 1:
        case 4:
        case 7:
            return (document.getElementById(number+1).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+2).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
    }
}

// This will Check the Vertical rows of the board 1, 2, 3 then 4, 5, 6 and last 7, 8, 9
function checkVertical(number){
    number = parseInt(number);
    switch(number)
    {
        case 1:
        case 2: 
        case 3: 
            return (document.getElementById(number+3).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+6).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 4:
        case 5:
        case 6:
            return (document.getElementById(number-3).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+3).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 7:
        case 8: 
        case 9:
            return (document.getElementById(number-3).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number-6).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
    }
}

// This will check only diagonal rows of the board 
function checkDiagonal(number){
    number = parseInt(number);
    switch(number)
    {
        case 1:
            return (document.getElementById(number+4).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+8).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 5:
            return (document.getElementById(number-4).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+4).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 9: 
            return (document.getElementById(number-4).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number-8).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 3:
            return (document.getElementById(number+2).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+4).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 5:
            return (document.getElementById(number-2).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number+2).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
        case 7:
            return (document.getElementById(number-2).getElementsByClassName("xo")[0].innerHTML == whoseTurn) 
            && (document.getElementById(number-4).getElementsByClassName("xo")[0].innerHTML == whoseTurn) ; 
            break;
    }
}