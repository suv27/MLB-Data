$(document).ready(function() {


  var myJSON = {
    "particles": {
      "number": {
        "value": 200
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": 2,
        "random": true
      },
      "line_linked": {
        "enable": true
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": 'random',
        "straight": false
      }
    },
    "interactivity": {
      "detect_on": "particles-js",
      "events": {
        "onhover": {
          "enable": true
        }
      },
      "modes": {
        "push": {
          "particles_nb": 12
        }
      }
    }
  }

  // initializing the particle.js library
  particlesJS(myJSON);
});
