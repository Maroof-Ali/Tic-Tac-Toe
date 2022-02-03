var playerOneSign = 'O';
var playerTwoSign = 'X';
var currentPlayer = 1;
var totalMoves = 0;
var gameFinish = false;

function tap(cell){
	
	if(document.getElementById(cell).innerText != "" || gameFinish)
		return;
	
	var boxValue = document.getElementById(cell).innerText = (currentPlayer == 1) ? "O" : "X";
	
	totalMoves++;
	
	checkForWin();
	checkForDraw();
	currentPlayer = (currentPlayer == 1) ? 2 : 1;
	document.getElementById("currentPlayer").innerText = currentPlayer;
}

function checkForDraw(){
	if(totalMoves >= 9){
		document.getElementById("successTitle").innerText = "Game Draw";
	}
}

function checkForWin(){
	
	if((getBoxValue(1) == getBoxValue(2) && getBoxValue(1) == getBoxValue(3) && getBoxValue(1) != "" )){
		finishGame();
		changeBoxColorForWin(1,2,3);
		return;
	}
	
	if((getBoxValue(4) == getBoxValue(5) && getBoxValue(4) == getBoxValue(6) && getBoxValue(4) != "" )){
		finishGame();
		changeBoxColorForWin(4,5,6);
		return;
	}
	
	if((getBoxValue(7) == getBoxValue(8) && getBoxValue(7) == getBoxValue(9) && getBoxValue(7) != "" )){
		finishGame();
		changeBoxColorForWin(7,8,9);
		return;
	}
	
	if((getBoxValue(1) == getBoxValue(4) && getBoxValue(1) == getBoxValue(7) && getBoxValue(1) != "" )){
		finishGame();
		changeBoxColorForWin(1,4,7);
		return;
	}
	
	if((getBoxValue(2) == getBoxValue(5) && getBoxValue(2) == getBoxValue(8) && getBoxValue(2) != "" )){
		finishGame();
		changeBoxColorForWin(2,5,8);
		return;
	}
	
	if((getBoxValue(3) == getBoxValue(6) && getBoxValue(3) == getBoxValue(9) && getBoxValue(3) != "" )){
		finishGame();
		changeBoxColorForWin(3,6,9);
		return;
	}
	
	if((getBoxValue(1) == getBoxValue(5) && getBoxValue(1) == getBoxValue(9) && getBoxValue(1) != "" )){
		finishGame();
		changeBoxColorForWin(1,5,9);
		return;
	}
	
	if((getBoxValue(3) == getBoxValue(5) && getBoxValue(3) == getBoxValue(7) && getBoxValue(3) != "" )){
		finishGame();
		changeBoxColorForWin(7,8,9);
		return;
	}
	
}

function finishGame(){
	gameFinish = true;
	document.getElementById("successTitle").innerText = "Player "+ currentPlayer +" Victory";
}

function changeBoxColorForWin(b1,b2,b3){
	document.getElementById(String(b1)).style.backgroundColor = "#8eff78";
	document.getElementById(String(b2)).style.backgroundColor = "#8eff78";
	document.getElementById(String(b3)).style.backgroundColor = "#8eff78";
} 

function getBoxValue(boxNumber){
	return document.getElementById(String(boxNumber)).innerText;
}