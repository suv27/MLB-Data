// API INFORMATION
let apiKey1 = 'mevcburkuv7wpjvpnvc6gaw5';
let apiKey2 = '656e58ujs4q8a5cbpcabebea';
let apiKey3 = 'xpqwhygqcbzx39x3mgsq4hc9';
let apiKeyForRankings = 'http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/rankings.json?api_key=' + apiKey1;
let apiKeyForStanding = 'http://api.sportradar.us/mlb/trial/v6.5/en/seasons/2018/REG/standings.json?api_key=' + apiKey1;

$(document).ready(() => {

  let myJSON = {
    'particles': {
      'number': {
        'value': 200
      },
      'shape': {
        'type': 'circle'
      },
      'size': {
        'value': 2,
        'random': true
      },
      'color': {
        'value': '#FF0000'
      },
      'line_linked': {
        'enable': true
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'random',
        'straight': false,
      },
    },
    'interactivity': {
      'detect_on': 'particles-js',
      'events': {
        'onhover': {
          'enable': true
        },
      },
      'modes': {
        'push': {
          'particles_nb': 12,
        },
      },
    },
  };

  // initializing the particle.js library
  particlesJS(myJSON);
});
