import React, { Component, PropTypes } from 'react';

const SubscriptionRow = ({ onClick, status, organizationID, startDate, endDate }) => (
    <tr>
        <td style={{color: status ? 'green' : 'red'}}>{organizationID}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>Renew Subscription</td>
        <td>Cancel Subscription</td>
    </tr>
)

SubscriptionRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  organizationID: PropTypes.integer.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
}

export default SubscriptionRow