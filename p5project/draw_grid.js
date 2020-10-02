function drawGrid() {
	strokeWeight(0.5);
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=30) {
		line(x, -height, x, height);
	}
	for (var y=-height; y < height; y+=30) {
		line(-width, y, width, y);
	}
}
