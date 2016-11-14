import React from 'react'
import { shallow } from 'enzyme'
import OrganizationTable from './OrganizationTable'

describe('<OrganizationTable />', () => {
    const initialOrgState = [
        {id: 0, organizationName: 'Org1'},
        {id: 1, organizationName: 'Org2'},
        {id: 2, organizationName: 'Org3'},
        {id: 3, organizationName: 'Org4'},
        {id: 4, organizationName: 'Org5'}
    ];
    
    it('renders without crashing', () => {
        shallow(<OrganizationTable organizations={initialOrgState}/>);
    });
});
