export class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
	findArea() {
		return this.length * this.width;
	}
}

// const test = new Rectangle(2, 4);
// console.log(test);
// console.log(test.findArea());
