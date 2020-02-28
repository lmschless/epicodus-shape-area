import { Rectangle } from './../src/app.js';

describe('Rectangle', () => {
	test('creating a new rectangle should return 2 sets of equal sides.', () => {
		var rectangle = new Rectangle(2, 4);
		expect(rectangle.length).toEqual(2);
		expect(rectangle.width).toEqual(4);
	});
});
