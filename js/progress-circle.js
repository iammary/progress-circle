/**************************************************************
*
* Progress Circle 1.0
*
**************************************************************/

( function( $ ){
	var ProgressCircle = function( element, options ){
		// Defaults are below
		var settings = $.extend( {}, $.fn.progressCircle.defaults, options );
		var nRadians = ( 360 * settings.nPercent ) / 100;

		// Thickness constant
		var thicknessConstant = 0.02;
		if ( settings.thickness > 10 ) {
			settings.thickness = 10;
		} else if ( settings.thickness < 1 ) {
			settings.thickness = 1;
		} else {
			settings.thickness = Math.round( settings.thickness );
		}
		var border = ( settings.thickness * thicknessConstant ) + 'em';
		var offset = ( 1 - thicknessConstant * settings.thickness * 2 ) + 'em';

		var circle = $( element );
		var progCirc = circle.find( '.prog-circle' );
		var circleDiv = progCirc.find( '.bar' );
		var circleSpan = progCirc.children( '.percenttext' );
		var circleFill = progCirc.find( '.fill' );
		var circleSlice = progCirc.find( '.slice' );

		if ( settings.nPercent == 0 ) {
			circleSlice.hide();
		} else {
			// Reset circle clip
			circleSlice.show();
			circleSpan.text( '' );
			circleSlice.removeClass( 'clipauto' )
			transformCircle( 20, circleDiv );
			transformCircle( 20, circleFill );

			// Draw percentage circle
			transformCircle( nRadians, circleDiv );
		}

		// Set circle size
		progCirc.css( 'font-size', settings.circleSize + 'px' );
		setBorderThickness();

		// Update percentage text if showPercentText is true
		settings.showPercentText && circleSpan.text( settings.nPercent + '%' );

		// Set clip if greater than 50%
		if( nRadians > 180 ) {
		    transformCircle( 180, circleFill );
		    circleSlice.addClass( ' clipauto ');
		}

		function transformCircle ( nRadians, cDiv ) {
			var rotate = "rotate(" + nRadians + "deg)";
	    cDiv.css({
	      "-webkit-transform" : rotate,
	      "-moz-transform"    : rotate,
	      "-ms-transform"     : rotate,
	      "-o-transform"      : rotate,
	      "transform"         : rotate
	    });
		}

		function setBorderThickness () {
			progCirc.find(' .slice > div ').css({
				'border-width' : border,
				'width'        : offset,
				'height'       : offset
			})
			progCirc.find('.after').css({
				'top'    : border,
				'left'   : border,
				'width'  : offset,
				'height' : offset
			})
		}
	};

	$.fn.progressCircle = function( options ) {
		return this.each( function( key, value ){
      var element = $( this );

      // Return early if this element already has a plugin instance
      if ( element.data( 'progressCircle' ) ) {
      	var progressCircle = new ProgressCircle( this, options );
      	return element.data( 'progressCircle' );
      }

      // Append components
    	$( this ).append( '<div class="prog-circle">' +
	                 			'	<div class="percenttext"> </div>' +
	                 			'	<div class="slice">' +
	                 			'		<div class="bar"> </div>' +
	                 			'		<div class="fill"> </div>' +
	                 			'	</div>' +
	                 			'	<div class="after"> </div>' +
	                 			'</div>');

    	// Pass options to plugin constructor
      var progressCircle = new ProgressCircle( this, options );
      // Store plugin object in this element's data
      element.data( 'progressCircle', progressCircle );
  	});
	};

	//Default settings
	$.fn.progressCircle.defaults = {
		nPercent        : 50,
		showPercentText : true,
		circleSize      : 100,
		thickness       : 3
	};

})( jQuery );