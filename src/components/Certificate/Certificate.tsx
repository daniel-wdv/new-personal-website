import { FC } from "react";

import styles from "./certificate.module.scss";

interface CertificateProps {
  image: string;
  url: string;
}

const Certificate: FC<CertificateProps> = (props) => {
  return (
    <div className={styles.certificate}>
      <div className={styles.imagewrapper}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt="Certificate"/>
        </a>
      </div>
    </div>
  );
};

export { Certificate };
