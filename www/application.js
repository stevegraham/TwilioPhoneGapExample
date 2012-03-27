document.addEventListener("touchmove", function(ev) { ev.preventDefault() }, false);

document.addEventListener("deviceready", function(ev) {

  var tokenRequest    = new XMLHttpRequest();
  tokenRequest.onload = function() {
    Twilio.Device.setup(tokenRequest.responseText);
    Twilio.Device.connect({room: 'phonegap' })
  };

  tokenRequest.open('GET', 'http://yob.ro/token');
  tokenRequest.send();
}, false);
