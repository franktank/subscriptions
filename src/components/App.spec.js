import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { render } from 'enzyme';


describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });
});
