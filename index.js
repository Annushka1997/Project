"use strict";

const div = document.getElementById("div");
let x = 0;
let y = 0;
let speed = 1;
document.addEventListener('keydown',function (event) {
    switch(event.code) {
    case 'KeyA': div.style.left = (x -= speed) + 'px'; break; 
    case 'KeyD': div.style.left = (x += speed) + 'px'; break; 
    case 'KeyS': div.style.top = (y += speed) + 'px'; break; 
    case 'KeyW': div.style.top = (y -= speed) + 'px'; break; 
        default: alert ("Please click current key");
   }   
});

// լրացուցիչ 
const changeColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = "#" + randomColor;
};
  
document.addEventListener('keydown',changeColor);


