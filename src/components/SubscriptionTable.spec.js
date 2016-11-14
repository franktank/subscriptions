import React from 'react'
import { shallow } from 'enzyme'
import SubscriptionTable from './SubscriptionTable'

describe('<SubscriptionTable />', () => {
    const initialState = [
            {
                id: 1,
                organizationID: 1,
                startDate: "1/1/2016",
                endDate: "1/31/2016",
                status: true
            },
            {
                endDate: "1/31/2016",
                id: 2,
                organizationID: 2,
                startDate: "1/1/2016",
                status: true,
            }
        ];
    
    it('renders without crashing', () => {
        let enzymeWrapper = shallow(<SubscriptionTable subscriptions={initialState}/>);
        expect(enzymeWrapper.find('table').hasClass('subscription-table')).toBe(true)
    });
});
