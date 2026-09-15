import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import BreadcrumbContact from "../components/breadcrumbs/BreadcrumbContact";
import ContactMap from "../components/contact-maps/ContactMap";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Contact</title>
        <meta name="description" content="Contact page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        {/* breadcrumb */}
        <BreadcrumbContact title="CONTACT" />
        {/* contact page content */}
        <section className="conact__area pt--140">
          <div
            className="container"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/12.png"})`,
              backgroundSize: "70%",
              backgroundPositionX: "-17%",
              backgroundPositionY: "-20%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__title">
                  <img
                    className="floating-image-contact"
                    src={process.env.PUBLIC_URL + "/images/contact/contact.png"}
                    alt="contact images"
                  />
                  <h2>Contact Our Team</h2>
                  <p className="color-white">
                    Our global support team is available 24/7, ensuring that no
                    matter where you are or when you trade, expert help is
                    always within reach.
                  </p>
                </div>

                <div className="contact__cards row justify-content-center mt-5">
                  {/* Call Us */}
                  <div className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="contact__card">
                      <div className="icon">
                        <i className="ti-headphone-alt" />
                      </div>
                      <h4>Call Us</h4>
                      <p>
                        <a href="tel:+447441429188">+44 7441 429188</a>
                        <br />
                      </p>
                    </div>
                  </div>

                  {/* Email Inquiries */}
                  <div className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="contact__card">
                      <div className="icon">
                        <i className="ti-email" />
                      </div>

                      <h4>Email Inquiries</h4>

                      <p>
                        <a href="mailto:support@thepips.com">
                          support@thepips.com
                        </a>
                        <br />

                        <a href="mailto:compliance@thepips.com">
                          compliance@thepips.com
                        </a>
                        <br />
                      </p>
                    </div>
                  </div>

                  {/* Our Office */}
                  <div className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="contact__card">
                      <div className="icon">
                        <i className="ti-location-pin" />
                      </div>
                      <h4>Our Office</h4>
                      <p>
                        Cannon Bridge House, 
                        <br />
                        25 Dowgate Hill, London, EC4R 2YA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="google__map">
                  {/* contact map */}
                  <ContactMap />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 sm__mt--40 md__mt--40">
                <div className="dg__contact__wrapper">
                  <form className="contact-form">
                    <div className="single-contact-form">
                      <span>Full Name</span>
                      <input type="text" name="firstname" />
                    </div>
                    <div className="single-contact-form">
                      <span>Email</span>
                      <input type="email" name="email" />
                    </div>
                    <div className="single-contact-form">
                      <span>Subject</span>
                      <input type="text" name="subject" />
                    </div>
                    <div className="single-contact-form message">
                      <span>Message</span>
                      <textarea name="message" defaultValue={""} />
                    </div>
                    <div className="contact-btn">
                      <button type="submit">
                        Submit
                        <span className="ti-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutTwo>
    </Fragment>
  );
};

export default Contact;
