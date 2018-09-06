$(document).ready(function() {
  
  var hasGP = false;
  var repGP;

  const rightArrow = 37;
  const upArrow = 38;
  const leftArrow = 39;
  const downArrow = 40;


  function canGame() {
      return "getGamepads" in navigator;
  }

  function reportOnGamepad() {
    var gp = navigator.getGamepads()[0];

    if(gp.axes[0]){
  		if(gp.axes[0] === 1 && Math.trunc(gp.axes[1]) === 0){

				simulateKeyPress(leftArrow);
				jQuery( "body" ).trigger( e );

  		}
  		if(gp.axes[0] === -1 && Math.trunc(gp.axes[1]) === 0){
				simulateKeyPress(rightArrow);
  		}

  	}

  	if(gp.axes[1]){
  		if(Math.trunc(gp.axes[0]) === 0 && gp.axes[1] === -1){
				simulateKeyPress(upArrow);
  		}
  		if(Math.trunc(gp.axes[0]) === 0 && gp.axes[1] === 1){
				simulateKeyPress(downArrow);
  		}
  	}

    if(gp.buttons[2].pressed){
      var href_list = $('.play_logo a').attr("href");
      if(href_list !== undefined){
        window.location.href = href_list;
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
