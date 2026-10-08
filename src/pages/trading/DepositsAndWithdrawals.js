import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbDepositsAndWithdrawals from "../../components/breadcrumbs/trading/BreadcrumbDepositsAndWithdrawals";
import DepositsAndWithdrawalsContentThree from "../../components/trading-contents/deposits-and-withdrawals-contents/DepositsAndWithdrawalsContentThree";
import DepositsAndWithdrawalsContentFour from "../../components/trading-contents/deposits-and-withdrawals-contents/DepositsAndWithdrawalsContentFour";
import DepositsAndWithdrawalsContentTwo from "../../components/trading-contents/deposits-and-withdrawals-contents/DepositsAndWithdrawalsContentTwo";
import DepositsAndWithdrawalsContentOne from "../../components/trading-contents/deposits-and-withdrawals-contents/DepositsAndWithdrawalsContentOne";

const DepositsAndWithdrawals = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Deposits and Withdrawals</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbDepositsAndWithdrawals title="Deposits and Withdrawals" />
        <DepositsAndWithdrawalsContentOne />
        <DepositsAndWithdrawalsContentTwo />
        <DepositsAndWithdrawalsContentThree />
        <DepositsAndWithdrawalsContentFour />
      </LayoutTwo>
    </Fragment>
  );
};

export default DepositsAndWithdrawals;
