import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.png";
import { Zoom } from "react-awesome-reveal";

const welcomeText = `${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  const cvLink = "https://daniel-carvalho-cv-2024.tiiny.site/";

  return (
    <div className={styles.home}>
      <Zoom cascade>
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
        <h3 className={styles.about}>{AboutData.about1}</h3>
      </Zoom>

      <h3 className={styles.about_next}>{AboutData.about2}</h3>
      <Zoom>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div>
          <a href={cvLink} target="_blank" rel="noopener noreferrer">
            <button>Download CV</button>
          </a>
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
