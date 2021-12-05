$(document).ready(function() {
var turn = false;
var spielfeld = [
    ['', '', ''], 
    ['', '', ''], 
    ['', '', ''],
];
var scoreX = parseInt($(".x").html());
var scoreO = parseInt($(".o").html());

$(document).on('click', '.th-click', function () {
    setPlayer($(this));
    spieler = $(this).text();
    feldId = $(this).attr('id');
    fillArrayWithPlayerValue(spieler, feldId);
    werIstGewinner();
});



function newGame(){
    console.log("Neues Spiel");
    turn = true;
    spielfeld = [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']];
    $('.th-click').html('');
}

function fillArrayWithPlayerValue(inhalt, index) { //1 -> 00 //2 -> 01 // 3 -> 02 //      4 -> 10 // 5 -> 11 // 6- > 12 
    //reihe 0
    console.log(inhalt);
    console.log(index);
    if(index<3){
        spielfeld[0][index]=inhalt;
    }
     //reihe 1
    if(index>=3 && index <6){
        index=index-3;
        spielfeld[1][index]=inhalt;
    }
     //reihe 2
    if(index>=6 && index <9){
        index=index-6;
        spielfeld[2][index]=inhalt;
    }
}

function setPlayer(feld) {
    console.log("Spieler gewechselt");
    if (turn) {
        console.log(turn);
        feld.html('X');
    } else{
        console.log(turn);
        feld.html('O');    
    }
   changePlayer();  
}

function changePlayer(){
    
    turn=!turn; 
    console.log("changePlayer()" +turn);
}

// vertikale Ermittlung
function testVertical() {
    console.log("mein name ist testVertikal()");
    for (var index = 0; index < spielfeld.length; index++) {
        if (spielfeld[0][index] == 'X' && spielfeld[1][index] == 'X' && spielfeld[2][index] == 'X') {
            spielstand('x');
            console.log("Gewinner Vertical X");
        } else if (spielfeld[0][index] == 'O' && spielfeld[1][index] == 'O' && spielfeld[2][index] == 'O') {
            spielstand('o');
            console.log("Gewinner Vertical O");
        }
    }
}
// horizontale Ermittlung
function testHorizontal() {
    console.log("mein name ist testHorizontal()");
    for (var index = 0; index < spielfeld.length; index++) {
        if (spielfeld[index][0] == 'X' && spielfeld[index][1] == 'X' && spielfeld[index][2] == 'X') {
            spielstand('x');
            console.log("Gewinner Horizontal X");
        } else if (spielfeld[index][0] == 'O' && spielfeld[index][1] == 'O' && spielfeld[index][2] == 'O') {
            spielstand('o');
            console.log("Gewinner Horizontal O");
        }
    }
}
// diagonale Ermittlung
function testDiagonal() {
    console.log("mein name ist testDiagonal()");
    if (spielfeld[0][0] == 'X' && spielfeld[1][1] == 'X' && spielfeld[2][2] == 'X') {
        spielstand('x');
        console.log("Gewinner dia X");
    } else if (spielfeld[2][0] == 'X' && spielfeld[1][1] == 'X' && spielfeld[0][2] == 'X') {
        spielstand('x');
        console.log("Gewinner dia X");
    } else if (spielfeld[0][0] == 'O' && spielfeld[1][1] == 'O' && spielfeld[2][2] == 'O') {
        spielstand('o');
        console.log("Gewinner dia O");
    } else if (spielfeld[2][0] == 'O' && spielfeld[1][1] == 'O' && spielfeld[0][2] == 'O') {
        spielstand('o');
        console.log("Gewinner dia O");
    }
}


function werIstGewinner() {
    console.log("mein name ist wer ist gewinner");
    testHorizontal();
    testVertical();
    testDiagonal();
}

function spielstand(gewinner){
    console.log(gewinner);
    if (gewinner == 'x'){
        scoreX++;
        console.log(scoreX);
        $('.x').text(scoreX);
        alert("Spieler X hat gewonnen");
    }else if(gewinner == 'o'){
        scoreO++;
        console.log(scoreO);
        $('.o').html(scoreO);
        alert("Spieler O hat gewonnen");
    }
    newGame();
}
});