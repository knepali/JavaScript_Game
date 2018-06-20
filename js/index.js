var countGoats = 21;
var leftGoat = document.getElementById('goatsOnBoard');
var life = 4;
var lifeLeft = document.getElementById('life');
var win = document.getElementById('win');
var box = document.getElementsByClassName('box'); //gets classname of grids


for (var i = 0; i < box.length; i++) {
  if (i == 0 || i == 4 || i == 20 || i == 24) {
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
      countGoats--;
      leftGoat.innerHTML = "Goats left :: " + countGoats;
      if (countGoats == 0 && life == 4) {
        win.innerHTML = "You won";
        console.log("you won");
      } else if (countGoats == 0 && life == 3) {
        win.innerHTML = "You are so close to winning";
      } else if (countGoats == 0 && life == 2 || life == 1 || life == 0) {
        win.innerHTML = "Better luck next time";
      }
    }
  });
}
