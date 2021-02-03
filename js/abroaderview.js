var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

canvas.addEventListener("mousedown", plopImg, false);

// Setting Up audio & images
var sounds = ['hannah', 'josh', 'simon', 'samm', 'becky', 'badger', 'kelly'];
var howls = {};
for (var i=0; i<sounds.length; i++) {
    howls[sounds[i]] = new Howl({
        urls: ['audio/' + sounds[i] + '.mp3']
    });
}

var bgimg = 'img/bgfadein.png';

var imgsrc = ['zakjongun', 'zaksurprise', 'zakhat', 'zakshitdisgrace', 'zakovercharge', 'zakcloseup', 'zakpirate']
var images = [];
for (var j=0; j<imgsrc.length; j++) {
	images[j] = ['img/' + imgsrc[j] + '.jpg']
}

// YOU MUST BE THE LISTENER
$( window ).resize(function() {
	drawbackground();
});
	
$(document).ready(function() {
	drawbackground();
});
	
function drawbackground() {
	context.canvas.width  = window.innerWidth;
	context.canvas.height = window.innerHeight;
	var bgObj = new Image();

	bgObj.onload = function(){
		context.drawImage( bgObj, 0, 0 ,context.canvas.width ,  context.canvas.height);
	};

	bgObj.src= bgimg;
}

function plopImg(event) {
  var x = event.clientX;
  var y = event.clientY;
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, x - 143, y - 198);
  };

var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
howls[soundFile].play();

imageObj.src=images[Math.floor(Math.random() * images.length)];
}
