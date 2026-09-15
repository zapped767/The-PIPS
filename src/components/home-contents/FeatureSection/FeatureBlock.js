// import React from "react";
import PropTypes from "prop-types";
// import { FaGlobe, FaCheckCircle } from "react-icons/fa"; // Example icons

/**
 * Reusable component to display a feature with an icon, title, and text.
 * @param {object} props - Component properties
 * @param {object} props.icon - The icon component (e.g., <FaGlobe />)
 * @param {string} props.title - The title of the feature
 * @param {string} props.text - The description of the feature
 * @param {string} props.extraClass - Optional class for custom styling
 */
const FeatureBlock = ({ icon: Icon, title, text, extraClass }) => {
  return (
    <div className={`feature-block text-center ${extraClass}`}>
      <div className="feature-icon mx-auto mb-3">
        {/* Render the icon component passed via props */}
        {Icon && <Icon className="icon" />}
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-text">{text}</p>
      </div>
    </div>
  );
};

FeatureBlock.propTypes = {
  icon: PropTypes.elementType, // Allows passing a React component (like an icon)
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};

export default FeatureBlock;