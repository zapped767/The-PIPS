import React from "react";
import {
  LogIn,
  UserPlus,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
const MobileWidgets = () => {
  return (
    <div className="mobile-widget-area">
      {/* LOGIN + SIGN IN SAME ROW */}
      <div className="mobile-account-row">
        <a
          href="https://portal.thepips.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-widget-item mobile-login-item"
        >
          <LogIn size={20} strokeWidth={2} />
          <span>Login</span>
        </a>

        <a
          href="https://portal.thepips.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-widget-item mobile-signin-item"
        >
          <UserPlus size={20} strokeWidth={2} />
          <span>Sign In</span>
        </a>
      </div>

      {/* CONTACT */}
      <a
        href="tel:+447441429188"
        className="mobile-widget-item mobile-contact-item"
      >
        <Phone size={20} strokeWidth={2} />

        <div className="mobile-widget-row">
          <span className="mobile-widget-label">
            Contact
          </span>

          <span className="mobile-widget-value">
            +44 7441 429188
          </span>
        </div>
      </a>

      {/* EMAIL */}
      <a
        href="mailto:support@thepips.com"
        className="mobile-widget-item mobile-email-item"
      >
        <Mail size={20} strokeWidth={2} />

        <div className="mobile-widget-row">
          <span className="mobile-widget-label">
            Email
          </span>

          <span className="mobile-widget-value">
            support@thepips.com
          </span>
        </div>
      </a>
    </div>
  );
};

export default MobileWidgets;