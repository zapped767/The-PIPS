import React from "react";
import professionalAccountsData from "../../../data/trading-tables/professional-accounts-table.json";
import ProfessionalAccountTableSingle from "../../../components/trading-tables/ProfessionalAccountTableSingle.js";
import TopicTwo from "../../../components/trading-contents/professional-accounts-contents/TopicTwo";

const ProfessionalAccountsContentOne = () => {
  return (
    <>
      <TopicTwo />

      <div className="market__table bg--white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 table-responsive">
              <table className="mkt__pre__list">
                <thead>
                  <tr>
                    <th className="account-tier">Tier</th>
                    <th className="account-subheadline">Subheadline</th>
                    <th className="account-description">Description</th>
                    <th className="account-deposit">
                      <span className="nobr">Minimum Deposit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {professionalAccountsData &&
                    professionalAccountsData.map((single, key) => {
                      return <ProfessionalAccountTableSingle data={single} key={key} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalAccountsContentOne;
