import React, { useState } from "react";
import { motion } from "framer-motion";

import { SkillsData } from "../../data/SkillsData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./skills.module.scss";

const skillsOpen = "<skills>";
const skillsClose = "</skills>";

const Skills = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: "" });

  const showTooltip = (name: string) => {
    setTooltip({ visible: true, text: name });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, text: "" });
  };

  return (
    <div className={styles.skills}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsOpen}</h3>
          <div className={styles.skills_content}>
            {SkillsData.map((item) => (
              <div
                key={item.name}
                onMouseOver={() => showTooltip(item.name)}
                onMouseOut={hideTooltip}
                className={styles.skillIconWrapper}
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
                {tooltip.visible && tooltip.text === item.name && (
                  <div className={styles.tooltip}>{tooltip.text}</div>
                )}
              </div>
            ))}
          </div>
          <h3 className={styles.skillsclose}>{skillsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
