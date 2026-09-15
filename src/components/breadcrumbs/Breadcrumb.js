import PropTypes from "prop-types";


const Breadcrumb = () => {
  return (
    <div
      className="ht__bradcaump__area"
      style={{
        background: `rgba(0, 0, 0, 0) url(${
          process.env.PUBLIC_URL + "/images/about/bull_right_side.jpg"
        }) repeat scroll center center/105% 100%`,
      }}
    >
      <div className="ht__bradcaump__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>We are the Pips</h1>
              <p>
                We exist to make the financial markets accessible for everyone,
                from curious beginners taking their first step to aspiring
                professionals ready to trade smarter and invest wisely.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
};

export default Breadcrumb;
