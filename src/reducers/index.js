import { combineReducers } from 'redux';
import * as math from 'mathjs';

const calculatorReducerInitialState = { value: 0, error: '' };
export const calculatorReducer = (state = calculatorReducerInitialState, action) => {
    switch (action.type) {
        case 'ADD_ELEMENT':
            return {
                error: '',
                value: state.value === 0 ? (action.text) : state.value + action.text
            }
            
        case 'CLEAR':
            return {
                ...state,
                value: 0
            }
            
        case 'EQUAL':
            try {
                return{
                    error: '',
                    value: math.evaluate(action.value)
                }
            } catch (err) {
                return {
                    value: 0,
                    error: 'Please use valid expressions'
                }
            }
        default:
            return state;
    }
}

let reducer = combineReducers({
    calculator: calculatorReducer
});

export default reducer;