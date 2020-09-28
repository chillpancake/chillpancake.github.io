function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
	}
}
