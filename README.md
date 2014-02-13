Progress Circle
===============

A jQuery plugin that creates a percentage circle based on pure CSS.

### Demo

iammary.github.io/progress-circle/

### How to use

1. Prepare the markup holder

	```HTML
	<div id="circle"></div>
	```

2. Invoke the progressCircle() function

	```JavaScript
	$( '#circle' ).progressCircle();
	```

### Additional Settings

Below is an example of the code with all available options and their defaults:

	```JavaScript
	$( '#circle' ).progressCircle({
		nPercent        : 50,
		showPercentText : true,
		thickness       : 100,
		circleSize      : 3
	});
```

