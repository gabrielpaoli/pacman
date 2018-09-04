$(document).ready(function() {
  
  var hasGP = false;
  var repGP;

  function canGame() {
      return "getGamepads" in navigator;
  }

  function reportOnGamepad() {
    var gp = navigator.getGamepads()[0];

    if(gp.buttons[2].pressed){
   		var href_list = $('.play_logo a').attr("href");
   		if(href_list !== undefined){
				window.location.href = href_list;
			}
    }

  	if(gp.axes[0]){
  		if(gp.axes[0] === 1 && gp.axes[1] === 0){
				simulateKeyPress(39);
				jQuery( "body" ).trigger( e );

  		}
  		if(gp.axes[0] === -1 && gp.axes[1] === 0){
				simulateKeyPress(37);
  		}

  	}

  	if(gp.axes[1]){
  		if(gp.axes[0] === 0 && gp.axes[1] === -1){
				simulateKeyPress(38);
  		}
  		if(gp.axes[0] === 0 && gp.axes[1] === 1){
				simulateKeyPress(40);
  		}
  	}
  }

	if(canGame()) {

    $(window).on("gamepadconnected", function() {
        hasGP = true;
        repGP = window.setInterval(reportOnGamepad,100);
    });

    $(window).on("gamepaddisconnected", function() {
        window.clearInterval(repGP);
    });

    //setup an interval for Chrome
    var checkGP = window.setInterval(function() {
      if(navigator.getGamepads()[0]) {
          if(!hasGP) $(window).trigger("gamepadconnected");
          window.clearInterval(checkGP);
      }
    }, 500);
  }

	function simulateKeyPress(character) {
		var e = jQuery.Event( "keydown", { keyCode: character } );
		jQuery( "body" ).trigger( e );
	}

});
