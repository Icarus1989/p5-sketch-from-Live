let angle = 0;
let total = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
	stroke(255);
  strokeWeight(2);
	noFill();

	
	let total = 31;

	for(let i = 0; i < total; i++){
		let h = map(i ,0, total, 0, 20) ** 2;
		let s = sin(angle);
		let offset ,x;
		if ( i < total / 2) {
			offset = map(i, 0, total / 2, 200, 0);
			x = map(s, -1, 1, -offset, offset);
		}else{
			offset = map(i, total/ 2, total, 0, 200);
		  x = map(s, -1, 1, offset, -offset);
		}
		let w = map(abs(x), 0, offset, h, 4);
		ellipse(x, 0 ,w, h);
		h *= 0.8;
	
	}

	angle += 0.1;
}
