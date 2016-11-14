import React from 'react'
import { shallow } from 'enzyme'
import OrganizationTable from './OrganizationTable'

describe('<OrganizationTable />', () => {
    it('renders without crashing', () => {
        shallow(<OrganizationTable />);
    });
});
