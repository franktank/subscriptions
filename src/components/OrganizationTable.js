import React, { Component, PropTypes } from 'react';
// Components
import OrganizationRow from './OrganizationRow';

const organizationTable = ({ organizations, onAddButtonClick }) => (
    <table>
        <thead>
          <tr>
            <th>OrganizationID</th>
            <th>Name</th>
            <th>Add Subscription</th>
          </tr>
        </thead>
        <tbody>
            {organizations.map(organization =>
                <OrganizationRow
                    key = {organization.id}
                    {...organization}
                    onClick={() => onAddButtonClick(organization.id)}
                />
            )}
        </tbody>
    </table>
)

organizationTable.propTypes = {
  organizations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    organizationName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onAddButtonClick: PropTypes.func.isRequired
}

export default organizationTable