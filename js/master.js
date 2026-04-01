"use strict";

function hideImage(){
    var image =
    document.getElementById("gallery");
    if (image.style.display === "grid"){
        image.style.display ="none"
    }else{
        image.style.display="grid"
    }
}

function toggleDarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var i = 0;
var txt = '«And music, that was where Lestat separated man from food. Music pierced his damn soul. And any human who were involved in the creation of it existed on an elevated plane in his eyes.» - Louis de Pointe du Lac'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}