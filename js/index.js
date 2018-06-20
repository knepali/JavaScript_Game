var countGoats = 21;
var leftGoat = document.getElementById('goatsOnBoard');
var life = 4;
var lifeLeft = document.getElementById('life');
//var win = document.getElementById('win');//winning condition that inputs in html
var result = document.getElementById('result');
var box = document.getElementsByClassName('box'); //gets classname of grids

var reset = document.getElementById('reset');
reset.addEventListener('click',function(){
  resetBoard();
})

for (var i = 0; i < box.length; i++) {
  if (i == 1 || i == 5 || i == 10 || i == 14) {
    tiger();
    i++;
  }
  if (i < 25) {
    goat();
  }
}

function tiger() {
  box[i].addEventListener('click', function(event) {
    var clear = this.getAttribute('clear');
    console.log(clear);
    if (clear === 'empty') {
      var img = document.createElement("img");
      img.src = "images/tiger.jpg";
      this.appendChild(img);
      img.style.width = '60%';
      img.style.textAlign = "center";
      this.setAttribute('clear', 'occupied');
      console.log(clear);
      life--;
      lifeLeft.innerHTML = "life left ::" + life;
      console.log("life on board : " + life);
    }
  });
}

function goat() {
  box[i].addEventListener('click', function() {
    var clear = this.getAttribute('clear');
    if (clear === 'empty') {
      var img = document.createElement("img");
      img.src = "images/goat.jpg";
      this.appendChild(img);
      img.style.width = '60%';
      this.setAttribute('clear', 'occupied');
      console.log(clear);
      winCondition();
      countGoats--;
      leftGoat.innerHTML = "Goats left :: " + countGoats;
    }
  });
}

function winCondition() {
  if (countGoats == 0 && life == 4) {
    //result.innerHTML = "You won";
    alert("you won");
  } else if (countGoats == 0 && life == 3) {
    //result.innerHTML = "You are so close to winning";
    alert("You are so close to winning");
  } else if (countGoats == 0 && life == 2) {
    //result.innerHTML = "You could do better!!";
    alert("You could do better!!");
    //this.removeEventListener('click',tiger);
  } else if (countGoats == 0 && life == 1) {
    //result.innerHTML = "Not good!!!";
    alert("Not good!!!");
  } else if (life == 0) {
    //result.innerHTML = " You lost!!!";
    alert("You lost!!!");
  }
}

function resetBoard(){
  location.reload();
  // for (var i = 0;i < box.length;i++) {
  //   //box[i].innerHTML = " ";
  //   box[i].style.display = "none";
  // }
}
