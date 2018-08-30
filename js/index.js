var countGoats = 21;
var leftGoat = document.getElementById('goatsOnBoard');
var life = 4;

var lifeLeft = document.getElementById('life');
//var win = document.getElementById('win');//winning condition that inputs in html
var result = document.getElementById('result');
var box = document.getElementsByClassName('box'); //gets classname of grids
var reset = document.getElementById('reset');
var modal = document.getElementById('mymodal');
var instruction = document.getElementById('instruction');
var close = document.getElementsByClassName('close');
var goatSound = document.getElementById('goatSound');
var tigerSound = document.getElementById('tigerSound');
var lose = document.getElementById('lose');
var win = document.getElementById('win');

instruction.addEventListener('click', function() {
  modal.style.display = "block";
});

close[0].addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

reset.addEventListener('click', function() {
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
    tigerSound.play();
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
    if (life === 0) {
      losingmsg();
      return;
    }
  });
}

function goat() {
  box[i].addEventListener('click', function(e) {
    goatSound.play();
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
    }
    if (life !== 0) {
      winCondition();
    }
  });
}

function winCondition() {
  if (countGoats == 0 && life == 4) {
    winningmsg();
  } else if (countGoats == 0 && life == 3) {
    winningmsg();
  } else if (countGoats == 0 && life == 2) {
    winningmsg();
  } else if (countGoats == 0 && life == 1) {
    winningmsg();
  }
}

function losingmsg() {
  lose.play();
  swal({
    title: 'You lost',
  });
}

function winningmsg(){
  win.play();
  swal("Congratulations!", "You won!", "success", {
    button: "Aww yiss!",
  });
}

function resetBoard() {
  location.reload();
}
