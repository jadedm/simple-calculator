import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from './../../components/Header';

configure({ adapter: new Adapter() });
test('should render Header component correctly', () => {
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();

	const wrapper = shallow(<Header />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});