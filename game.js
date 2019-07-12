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
var myImg = 'tom.gif'
var Img = 'jerry.gif'
var player = myImg;
var handleClick = function(event){
    if (event.target.style.backgroundImage === "") {
        event.target.style.backgroundImage = "url(" + player + ")"
        Winner()
        if (player === myImg) {
            player = Img
        } else {
            player = myImg
        }
    }
}

var Winner = function (checkWin){
    if(squares[0].style.backgroundImage ===  myImg &&
       squares[1].style.backgroundImage ===  myImg &&
       squares[2].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[0].style.backgroundImage === Img &&
       squares[1].style.backgroundImage === Img &&
       squares[2].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[3].style.backgroundImage ===  myImg &&
    squares[4].style.backgroundImage ===  myImg &&
    squares[5].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[3].style.backgroundImage === Img &&
    squares[4].style.backgroundImage === Img &&
    squares[5].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[6].style.backgroundImage ===  myImg &&
    squares[7].style.backgroundImage ===  myImg &&
    squares[8].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[6].style.backgroundImage === Img &&
    squares[7].style.backgroundImage === Img &&
    squares[8].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[0].style.backgroundImage ===  myImg &&
    squares[4].style.backgroundImage ===  myImg &&
    squares[8].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[0].style.backgroundImage === Img &&
    squares[4].style.backgroundImage === Img &&
    squares[8].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[2].style.backgroundImage ===  myImg &&
    squares[4].style.backgroundImage ===  myImg &&
    squares[6].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[2].style.backgroundImage === Img &&
    squares[4].style.backgroundImage === Img &&
    squares[6].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[0].style.backgroundImage ===  myImg &&
       squares[3].style.backgroundImage ===  myImg &&
       squares[6].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[0].style.backgroundImage === Img &&
       squares[3].style.backgroundImage === Img &&
       squares[6].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[1].style.backgroundImage ===  myImg &&
       squares[4].style.backgroundImage ===  myImg &&
       squares[7].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[1].style.backgroundImage === Img &&
       squares[4].style.backgroundImage === Img &&
       squares[7].style.backgroundImage === Img
    ) { alert("Win")}
    if(squares[2].style.backgroundImage ===  myImg &&
       squares[5].style.backgroundImage ===  myImg &&
       squares[8].style.backgroundImage ===  myImg
    ) { alert("Win")}
    if(squares[2].style.backgroundImage === Img &&
       squares[5].style.backgroundImage === Img &&
       squares[8].style.backgroundImage === Img
    ) { alert("Win")}

}

squares.forEach(function(item) {
    item.addEventListener('click', handleClick)
})

  
 