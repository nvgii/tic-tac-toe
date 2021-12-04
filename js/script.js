var turn = true;
var spielfeld = [
    ['', '', ''], //0,0 1,1 2,2
    ['', '', ''], //0,2 1,1 0,2 
    ['', '', ''],
];


// horizontale Ermittlung
// diagonale Ermittlung

$(document).on('click', '.th-click', function () {
    spielerInHtmlSetzen($(this));
    spieler = $(this).text();
    feldId = $(this).attr('id');
    fillArrayWithPlayerValues(spieler, feldId);
    werIstGewinner(spieler, feldId);
});

function fillArrayWithPlayerValues(inhalt, index) { //1 -> 00 //2 -> 01 // 3 -> 02 //      4 -> 10 // 5 -> 11 // 6- > 12 
    console.log("halooooooo",inhalt,index);
    //reihe 0
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

function spielerInHtmlSetzen(feld) {
    if (turn == true) {
        turn = false;
        console.log(turn);
        feld.html('x');
    } else if (turn == false) {
        turn = true;
        console.log(turn);
        feld.html('o');
    }
}


function testVertical() {
    for (var index = 0; index < spielfeld.length; index++) {
        if (spielfeld[0][index] == 'x' && spielfeld[1][index] == 'x' && spielfeld[2][index] == 'x') {
            console.log("Gewinner Vertical X");
        } else if (spielfeld[0][index] == 'o' && spielfeld[1][index] == 'o' && spielfeld[2][index] == 'o') {
            console.log("Gewinner Vertical O");
        }
    }
}

function testHorizontal() {
    for (var index = 0; index < spielfeld.length; index++) {
        if (spielfeld[index][0] == 'x' && spielfeld[index][1] == 'x' && spielfeld[index][2] == 'x') {
            console.log("Gewinner Horizontal X");
        } else if (spielfeld[index][0] == 'o' && spielfeld[index][1] == 'o' && spielfeld[index][2] == 'o') {
            console.log("Gewinner Horizontal O");
        }
    }
}

function testDiagonal() {
    if (spielfeld[0][0] == 'x' && spielfeld[1][1] == 'x' && spielfeld[2][2] == 'x') {
        console.log("Gewinner dia X");
    } else if (spielfeld[2][0] == 'x' && spielfeld[1][1] == 'x' && spielfeld[0][2] == 'x') {
        console.log("Gewinner dia X");
    } else if (spielfeld[0][0] == 'o' && spielfeld[1][1] == 'o' && spielfeld[2][2] == 'o') {
        console.log("Gewinner dia O");
    } else if (spielfeld[2][0] == 'o' && spielfeld[1][1] == 'o' && spielfeld[0][2] == 'o') {
        console.log("Gewinner dia O");
    }
}


function werIstGewinner(spieler, feldId) {
    testHorizontal();
    testVertical();
    testDiagonal();
}