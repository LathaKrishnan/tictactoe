// var MakingAMove = function(event){
//     console.log('click is working');
//     event.target.textcontent = player
//     if (player === 'X'){
//         player ='O'
//     }else{
//         player = 'X'
//     }
// }
var squares = document.querySelectorAll('.item');
//var myImg = 'tom.gif'
//var Img = 'jerry.gif'
var player = "X";
//var player = myImg;

var handleClick = function(event){
    if (event.target.textContent === "") {
        event.target.textContent =  player 
        "url(" + player + ")"
        Winner()

        if (player === "X") {
            player = "O"
        } else {
            player = "X"
        }
    }
}

var Winner = function (checkWin){
    if(squares[0].textContent === "X" &&
       squares[1].textContent === "X" &&
       squares[2].textContent === "X"
    ) {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}
    if(squares[0].textContent === "O" &&
       squares[1].textContent === "O" &&
       squares[2].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[3].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[5].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[3].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[5].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[6].textContent === "X" &&
    squares[7].textContent === "X" &&
    squares[8].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[6].textContent === "O" &&
    squares[7].textContent === "O" &&
    squares[8].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[0].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[8].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[0].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[8].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[2].textContent === "X" &&
    squares[4].textContent === "X" &&
    squares[6].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[2].textContent === "O" &&
    squares[4].textContent === "O" &&
    squares[6].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[0].textContent === "X" &&
       squares[3].textContent === "X" &&
       squares[6].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[0].textContent === "O" &&
       squares[3].textContent === "O" &&
       squares[6].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[1].textContent === "X" &&
       squares[4].textContent === "X" &&
       squares[7].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[1].textContent === "O" &&
       squares[4].textContent === "O" &&
       squares[7].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "O" won the game !!!'}}
    if(squares[2].textContent === "X" &&
       squares[5].textContent === "X" &&
       squares[8].textContent === "X"
    ) { {document.querySelector('.winner').textContent = 'Congrats player "X" won the game !!!'}}
    if(squares[2].textContent === "O" &&
       squares[5].textContent === "O" &&
       squares[8].textContent === "O"
    ) { {document.querySelector('.winner').textContent = 'Congrats player  "O" won the game !!!'}}

}

squares.forEach(function(item) {
    item.addEventListener('click', handleClick)
})

  
 