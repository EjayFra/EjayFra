let isPlayerOne = true;
let cells = document.getElementsByClassName("cells");

for (let i=0; i <cells.length; i++) {
    cells[i].addEventListener("clik" , userMove)
}

function userMove (e) {
    let cellValue = e.target.innerHTML;
    if (!cellValue.length){
        e.target.innerHTML = isPlayerOne? "X" : "O";
        isPlayerOne = isPlayerOne;

        checkline(0, 1, 2);
        checkline(3, 4, 5);
        checkline(6, 7, 8);
        checkline(0, 3, 6);
        checkline(1, 4, 7);
        checkline(2, 5, 8);
        checkline(0, 4, 8);
        checkline(6, 4, 2);
    }

}

function checkline(c1, c2, c3){
    if(
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML
    ){
        showWinner(cells[c1].innerHTML);
    }
}

function showWinner (player){
    document.querySelector("#result").innerHTML = player + "win";
}
