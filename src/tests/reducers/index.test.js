import { calculatorReducer } from './../../reducers/';
import * as math from 'mathjs';

test('should setup default reducer values', () => {
	const state = calculatorReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		value: 0,
		error: ''
	})
});

describe('should add elements to the expression', () => {
	test('should add 2+3+4 to the expression - multi addtion', () => {
		let value = 0;
		let text = '2+3+4';
		const currentState = {
			value,
			error: ''
		}
		const action = { type:'ADD_ELEMENT', text };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(text);	
	});

	test('should add 12/3 to the expression - division', () => {
		let value = 0;
		let text = '12/3';
		const currentState = {
			value,
			error: ''
		}
		const action = { type:'ADD_ELEMENT', text };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(text);	
	});

	test('should add 2 * 3 to the expression - multiplication', () => {
		let value = 0;
		let text = '2 * 3';
		const currentState = {
			value,
			error: ''
		}
		const action = { type:'ADD_ELEMENT', text };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(text);	
	});

	test('should add 5 - 5 to the expression - subtraction', () => {
		let value = 0;
		let text = '5 - 5';
		const currentState = {
			value,
			error: ''
		}
		const action = { type:'ADD_ELEMENT', text };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(text);	
	});

	test('should add 5 to the expression - subtraction', () => {
		let value = 0;
		let text = '5';
		const currentState = {
			value,
			error: ''
		}
		const action = { type:'ADD_ELEMENT', text };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(text);	
	});

});

describe('should clear expression from the value', () => {
	
	test('should clear the expression to 0', () => {
		let value = '4+1-9';
		const currentState = { 
			value,
			error: ''
		}
		const action = { type: 'CLEAR' };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(0);
	});

	test('should clear the expression to 0', () => {
		let value = '4 * 1 / 9';
		const currentState = { 
			value,
			error: ''
		}
		const action = { type: 'CLEAR' };
		const state = calculatorReducer(currentState, action);
		expect(state.value).toBe(0);
	});

});

describe('evaluate the value of the given expression', () => {
	test('should evaluate the expression to 10', () => {
		let value = '5 * 2';
		const currentState = { 
			value,
			error: ''
		}
		const action = { type: 'EQUAL', value };
		const state = calculatorReducer(currentState, action.value);
		expect(math.evaluate(state.value)).toBe(10);
	});

	test('should evaluate the expression to 2', () => {
		let value = '10 / 5';
		const currentState = { 
			value,
			error: ''
		}
		const action = { type: 'EQUAL', value };
		const state = calculatorReducer(currentState, action.value);
		expect(math.evaluate(state.value)).toBe(2);
	});

	test('should evaluate the expression to 15', () => {
		let value = '5 * 2 + 10 - 5';
		const currentState = { 
			value,
			error: ''
		}
		const action = { type: 'EQUAL', value };
		const state = calculatorReducer(currentState, action.value);
		expect(math.evaluate(state.value)).toBe(15);
	});
});