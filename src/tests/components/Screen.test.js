import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Screen } from './../../components/Screen';
import elements from './../fixtures/valueElements';

configure({ adapter: new Adapter() });

describe('should', () => {
	
	test('should render individual buttons', () => {
		const wrapper = shallow(<Screen {...elements[0]}/>);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	test('should render error message', () => {
		const wrapper = shallow(<Screen {...elements[1]}/>);
		expect(toJSON(wrapper)).toMatchSnapshot();
	})

});