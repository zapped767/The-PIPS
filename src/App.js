import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogRightSidebar from "./pages/BlogRightSidebar";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Merchants from "./pages/Merchants";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";
import LoginRegister from "./pages/LoginRegister";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AboutBitcoin from "./pages/AboutBitcoin";
import ForexMarket from "./pages/markets/ForexMarket";
import CommoditiesMarket from "./pages/markets/CommoditiesMarket";
import IndicesMarket from "./pages/markets/IndicesMarket";
import StockMarket from "./pages/markets/StockMarket";
import CryptoMarket from "./pages/markets/CryptoMarket";

import AnalyticalTools from "./pages/resources/AnalyticalTools";
import BornToTradePodcast from "./pages/resources/BornToTradePodcast";
import CurrencyConverter from "./pages/resources/CurrencyConverter";
import ThePipsInsights from "./pages/resources/ThePipsInsights";
import EconomicCalendar from "./pages/resources/EconomicCalendar";
import TickHistory from "./pages/resources/TickHistory";
import TradingCalculator from "./pages/resources/TradingCalculator";
import VPSHosting from "./pages/resources/VPSHosting";

import PipsTerminal from "./pages/platforms/PipsTerminal";
import PipsTradeApp from "./pages/platforms/PipsTradeApp";
import MetaTrader4 from "./pages/platforms/MetaTrader4";
import MetaTrader4Mobile from "./pages/platforms/MetaTrader4Mobile";
import MetaTrader5 from "./pages/platforms/MetaTrader5";
import MetaTrader5Mobile from "./pages/platforms/MetaTrader5Mobile";
import MetaTraderWebTerminal from "./pages/platforms/MetaTraderWebTerminal";

import StandardAccounts from "./pages/trading/StandardAccounts";
import ProfessionalAccounts from "./pages/trading/ProfessionalAccounts";
import DemoTradingAccount from "./pages/trading/DemoTradingAccount";
import DepositsAndWithdrawals from "./pages/trading/DepositsAndWithdrawals";
import Fees from "./pages/trading/Fees";
import ClientProtection from "./pages/trading/ClientProtection";
// import OrderExecution from "./pages/trading/OrderExecution";

import Partners from "./pages/partners/Partners";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-one"}`}
            component={HomeOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-two"}`}
            component={HomeTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-three"}`}
            component={HomeThree}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-four"}`}
            component={HomeFour}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/company/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-bitcoin"}`}
            component={AboutBitcoin}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`}
            component={BlogRightSidebar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post"}`}
            component={BlogPost}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/company/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Service}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/merchants"}`}
            component={Merchants}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/wallet"}`}
            component={Wallet}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login-register"}`}
            component={LoginRegister}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={LoginPage}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/register"}`}
            component={Register}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/not-found"}`}
            component={NotFound}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/markets/forex-market"}`}
            component={ForexMarket}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/markets/commodities-market"}`}
            component={CommoditiesMarket}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/markets/indices-market"}`}
            component={IndicesMarket}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/markets/stock-market"}`}
            component={StockMarket}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/markets/crypto-market"}`}
            component={CryptoMarket}
          />
          //Platforms
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/pips-terminal"}`}
            component={PipsTerminal}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/pips-trade-app"}`}
            component={PipsTradeApp}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/meta-trader-4"}`}
            component={MetaTrader4}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/meta-trader-5"}`}
            component={MetaTrader5}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/meta-trader-5-mobile"}`}
            component={MetaTrader5Mobile}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/meta-trader-web-terminal"}`}
            component={MetaTraderWebTerminal}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/platforms/meta-trader-4-Mobile"}`}
            component={MetaTrader4Mobile}
          />
          //Resources
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/analytical-tools"}`}
            component={AnalyticalTools}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/born-to-trade-podcast"}`}
            component={BornToTradePodcast}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/currency-converter"}`}
            component={CurrencyConverter}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/economic-calendar"}`}
            component={EconomicCalendar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/the-pips-insights"}`}
            component={ThePipsInsights}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/tick-history"}`}
            component={TickHistory}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/trading-calculator"}`}
            component={TradingCalculator}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/resources/vps-hosting"}`}
            component={VPSHosting}
          />
          //Trading
          <Route
            path={`${process.env.PUBLIC_URL + "/trading/types-of-accounts"}`}
            component={StandardAccounts}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/trading/professional-accounts"}`}
            component={ProfessionalAccounts}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/trading/demo-trading-account"}`}
            component={DemoTradingAccount}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/trading/deposits-and-withdrawals"}`}
            component={DepositsAndWithdrawals}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/trading/fees"}`}
            component={Fees}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/trading/client-protection"}`}
            component={ClientProtection}
          />
          {/* <Route
            path={`${process.env.PUBLIC_URL + "/trading/order-execution"}`}
            component={OrderExecution}
          /> */}
          <Route
            path={`${process.env.PUBLIC_URL + "/partners"}`}
            component={Partners}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
