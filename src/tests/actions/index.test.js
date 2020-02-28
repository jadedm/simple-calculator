import { addElement, clearScreen, calculateValue } from './../../actions/';

test('should setup addElement action object for calculator', () => {
	const action = addElement('23');

	expect(action).toEqual({
		type: 'ADD_ELEMENT',
		text: '23'
	});
});

test('should setup clearScreen action object for calculator', () => {
	const action = clearScreen();
	expect(action).toEqual({
		type: 'CLEAR'
	})
});

test('should setup calculateValue action object for calculator', () => {
	const action = calculateValue(22);
	expect(action).toEqual({
		type: 'EQUAL',
		value: 22
	})
});