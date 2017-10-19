var firstPath = new Path.Circle({
	center: [80, 50],
	radius: 35
});

firstPath.strokeColor = '#ff0000';
firstPath.fillColor = 'blue';

// secondPath doesn't have a strokeColor yet:
var secondPath = new Path.Circle({
	center: [160, 50],
	radius: 35
});

// Apply the style of firstPath to that of secondPath:
secondPath.style = firstPath.style;