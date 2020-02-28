import { Rectangle } from './../src/app.js';

describe('Rectangle', () => {
	test('creating a new rectangle should return 2 sets of equal sides.'),
		() => {
			var rectangle = new Rectangle(2, 4);
			expect(rectangle.side1).toEqual(2);
			expect(rectangle.side2).toEqual(2);
			expect(rectangle.side3).toEqual(4);
			expect(rectangle.side4).toEqual(4);
		};
});
