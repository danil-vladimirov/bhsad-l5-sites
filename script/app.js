let body = document.body;

let r = Math.floor(Math.random() * 255); 
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
body.style.setProperty('background-color', 'rgb(' +r+ ',' +g+ ',' +b+ ')');