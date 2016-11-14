import React from 'react'
import { shallow } from 'enzyme'
import SubscriptionTable from './SubscriptionTable'

describe('<SubscriptionTable />', () => {
    it('renders without crashing', () => {
        shallow(<SubscriptionTable />);
    });
});
