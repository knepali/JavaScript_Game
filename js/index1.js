var countGoats = 26;
var leftGoat = document.getElementById('goatsOnBoard');
var life = 4;
var lifeLeft = document.getElementById('life');
//var win = document.getElementById('win');//winning condition that inputs in html
var result = document.getElementById('result');
var box = document.getElementsByClassName('box'); //gets classname of grids
var reset = document.getElementById('reset');
var mysound;
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

reset.addEventListener('click',function(){
  resetBoard();
})

for (var i = 0; i < box.length; i++) {
  if (i == 4 || i == 10 || i == 17 || i == 24) {
    tiger();
    i++;
  }
  if (i < 30) {
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
      lifeLeft.innerHTML = "life left " + life;
      console.log("life on board : " + life);

    }
  });
}

function goat() {
  box[i].addEventListener('click', function(e) {

    var clear = this.getAttribute('clear');
    if (clear === 'empty') {
      var img = document.createElement("img");
      img.src = "images/goat.jpg";
      this.appendChild(img);
      img.style.width = '60%';
      this.setAttribute('clear', 'occupied');
      console.log(clear);
      countGoats--;
      leftGoat.innerHTML = "Goats left  " + countGoats;

    }
    winCondition();
    //sound('click');
  });
}

function winCondition() {
  if (countGoats == 7 && life == 4) {
    //result.innerHTML = "You won";
    //alert("you won");
    swal("Congratulations!", "You won!", "success", {
  button: "Aww yiss!",
});
} else if (countGoats == 7 && life == 3) {
    //result.innerHTML = "You are so close to winning";
    //alert("You won");
    swal("Congratulations!", "You won!", "success", {
  button: "Aww yiss!",
});

} else if (countGoats == 7 && life == 2) {
    //result.innerHTML = "You could do better!!";
    //alert("You won");
    swal("Congratulations!", "You won!", "success",{
  button: "Aww yiss!",
});

    //this.removeEventListener('click',tiger);
  } else if (countGoats == 7 && life == 1) {
    //result.innerHTML = "Not good!!!";
    //alert("You won");
    swal("Congratulations!", "You won!", "success", {
  button: "Aww yiss!",
});

  } else if (life == 0) {
    //result.innerHTML = " You lost!!!";
    swal( "Sorry","You Lost!", "warning", {
  button: "Noez!",
});
  }
}

function resetBoard(){
  location.reload();
}

// function sound(e){
//   mysound = new sound("images/goat.mp3");
//   if(!e){
//     return;
//   }
// }
