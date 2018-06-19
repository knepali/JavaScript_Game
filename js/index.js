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
    }
  });
}
