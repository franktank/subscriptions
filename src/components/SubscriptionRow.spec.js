import React from 'react'
import { shallow } from 'enzyme'
import SubscriptionRow from './SubscriptionRow'

describe('<SubscriptionRow />', () => {
    it('renders without crashing', () => {
        shallow(<SubscriptionRow />);
    });
});
