import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  LayoutGrid,
} from "lucide-react";

import { motion } from "framer-motion";

import "./FeatureSection.scss";


const features = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Beginner-Focused Learning",
  },

  {
    id: 2,
    icon: ShieldCheck,
    title: "Secure & Transparent",
  },

  {
    id: 3,
    icon: LayoutGrid,
    title: "All-in-One Platform",
  },
];


const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
    },
  },
};


const FeatureSection = () => {
  return (
    <section className="premium-feature-section">

      <motion.div
        className="premium-feature-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <motion.div
              className="premium-feature-item"
              key={feature.id}
              variants={item}
            >

              <div className="premium-feature-icon">
                <Icon
                  size={25}
                  strokeWidth={1.7}
                />
              </div>

              <h3>
                {feature.title}
              </h3>

            </motion.div>
          );
        })}

      </motion.div>

    </section>
  );
};

export default FeatureSection;