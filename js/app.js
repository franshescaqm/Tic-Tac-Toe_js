/*window.onload=function(){
  var board = document.querySelector('.board-js')

  board.addEventListener('click',function(event){

    event.target.style.backgroundColor='black';
  });

board.removeEventListener("dblclick", addBgc);
};

function addBgc(event){
  event.target.style.backgroundColor = "black";
}*/


/* ---> Respuesta del profe: aunque no sale la X o 0 establecida <---
window.onload=function() {
  var board = document.querySelector('.board-js');

  board.addEventListener("click", addX);
};

var centinel = true;

function addX(event){
  if (centinel)
  event.target.textContent = "X";
  centinel = false;
else
  event.target.textContent = "O";

 centinel = !centinel;
  }
}*/

window.onload=function() {
  var board = document.querySelector('.board-js');

  board.addEventListener("click", addX);
};

var centinel = true;

function addX(event){
  if (centinel){
  event.target.textContent = "X";
  centinel = false;
}else{
  event.target.textContent = "O";
  centinel = true;
  }
}
