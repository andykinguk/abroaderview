// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

  var sax = new Howl({
      urls: ['audio/sax.mp3'],
      volume: 0.3,
      loop: true
  });

// add keydown event listener
window.addEventListener('keydown', function(e) {
var key = allowedKeys[e.keyCode];
var requiredKey = konamiCode[konamiCodePosition];


  if (key == requiredKey) {
    konamiCodePosition++;
    
    if (konamiCodePosition == konamiCode.length) {
      activateMemes();
      konamiCodePosition = 0;
    }

  } else {
    konamiCodePosition = 0;
  }
});

function activateMemes() {
document.getElementById('konamiWaiting').innerHTML = '<img src=\'img/giphy.gif\'>';
document.getElementById('konamiWaiting').className += "centered";

bgimg = 'img/black.png';
drawbackground();

sax.play();
}
