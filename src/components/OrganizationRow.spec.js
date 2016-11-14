import React from 'react'
import { shallow } from 'enzyme'
import OrganizationRow from './OrganizationRow'

describe('<OrganizationRow />', () => {
    it('renders without crashing', () => {
        shallow(<OrganizationRow />);
    });
});
