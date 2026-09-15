import PropTypes from "prop-types";
import React from "react";

const ProfessionalAccountTableSingle = ({ data }) => {
  return (
    <tr>
      <td className="account-tier">{data.Tier}</td>
      <td className="account-subheadline">{data.Subheadline}</td>
      <td className="account-description">{data.Description}</td>
      <td className="account-deposit">{data["Minimum Deposit"]}</td>
    </tr>
  );
};

ProfessionalAccountTableSingle.propTypes = {
  data: PropTypes.object,
};

export default ProfessionalAccountTableSingle;
