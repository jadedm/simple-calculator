import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Buttons } from './../../components/Buttons';
import elements from './../fixtures/buttonElements';

configure({ adapter: new Adapter() });

test('should render individual buttons', () => {
	const wrapper = shallow(<Buttons />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});