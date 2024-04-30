import { motion } from "framer-motion";
import { Certificate } from "../../components/Certificate/Certificate";
import { CertificatesData } from "../../data/CertificatesData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./certificates.module.scss";

const projectsOpen = "<certificates>";
const projectsClose = "</certificates>";

const Certificates = () => {
  return (
    <div className={styles.certificates}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.projectsOpen}>{projectsOpen}</h3>

          <div className={styles.projects_content}>
            {CertificatesData.map((item, index) =>
              index % 2 === 0 ? (
                <Certificate key={item.image} image={item.image} url={item.url} />
              ) : (
                <Certificate key={item.image} image={item.image} url={item.url}/>
              )
            )}
          </div>

          <h3 className={styles.projectsClose}>{projectsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;
