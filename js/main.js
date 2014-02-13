( function( $ ){
	$( '#circle' ).progressCircle();

	$( '#submit' ).click( function() {
		var nPercent        = $( '#percent' ).val() ? $( '#percent' ).val() : 50;
		var showPercentText = $( '#percentOn' ).prop( 'checked' );
		var thickness       = $( '#thickness' ).val() ? $( '#thickness' ).val() : 3;
		var circleSize      = $( '#circle-size' ).val() ? $( '#circle-size' ).val() : 100;

		$( '#circle' ).progressCircle({
			nPercent        : nPercent,
			showPercentText : showPercentText,
			thickness       : thickness,
			circleSize      : circleSize
		});
	})
})( jQuery );