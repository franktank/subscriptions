import React, { PropTypes } from 'react';

const OrganizationRow = ({ id, organizationName, onClick }) => (
    <tr>
        <td>{id}</td>
        <td>{organizationName}</td>
        <td>Add subscription</td>
    </tr>
)

OrganizationRow.propTypes = {
  id: PropTypes.number.isRequired,
  organizationName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default OrganizationRow