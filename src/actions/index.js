export const addElement = (text) => {
	return {
		type: 'ADD_ELEMENT',
		text
	}
}

export const clearScreen = () => {
	return {
		type: 'CLEAR'
	}
}

export const calculateValue = (value) => {
	return {
		type: 'EQUAL',
		value
	}
}