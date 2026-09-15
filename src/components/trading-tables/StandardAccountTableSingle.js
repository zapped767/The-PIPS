import PropTypes from "prop-types";
import React from "react";

const StandardAccountTableSingle = ({ data }) => {
  return (
    <tr>
      <td className="account-tier">{data["Account Type"]}</td>
      <td className="account-subheadline">{data["Premium Tagline"]}</td>
      <td className="account-description">{data["Key Features"]}</td>
      <td className="account-deposit">{data["Minimum Deposit"]}</td>
      <td className="account-deposit">
        <a
          className=""
          href="https://portal.thepips.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </td>
    </tr>
  );
};

StandardAccountTableSingle.propTypes = {
  data: PropTypes.object,
};

export default StandardAccountTableSingle;
