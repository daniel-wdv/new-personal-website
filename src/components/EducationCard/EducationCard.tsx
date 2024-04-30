import { FC } from "react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

import styles from "./educationCard.module.scss";

interface EducationCardProps {
  title: string;
  date: string;
  details: string[];
  isLeft?: boolean;
}

const EducationCard: FC<EducationCardProps> = (props) => {
  return (
    <div
      className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}
    >
      <section>
        <HiOutlineBuildingLibrary className={styles.icon} />
        <div className={styles.date_styles}>
          <div className={styles.details}>
            <span className={styles.title}>{props.title}</span>
          </div>
          <div>
            <span>{props.date}</span>
          </div>
        </div>
        {props.details.map((item) => (
          <p key={item}>◉ {item}</p>
        ))}
      </section>
    </div>
  );
};

export { EducationCard };
