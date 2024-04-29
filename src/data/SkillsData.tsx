import { FaVuejs, FaReact, FaHtml5} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiDjango,
  SiPython,
  SiPhp,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiScrumalliance,
  SiGitlab,
  SiLinux,
  SiLaravel,
  SiBlender,
  SiJquery,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandThreejs } from "react-icons/tb";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "Python",
    icon: <SiPython color='#000000dc' />,
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: <SiDjango color='#000000dc' />,
    link: "https://www.djangoproject.com/",
  },
  {
    name: "PHP",
    icon: <SiPhp color='#000000dc' />,
    link: "https://www.php.net/",
  },
  {
    name: "Laravel",
    icon: <SiLaravel color='#000000dc' />,
    link: "https://laravel.com/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux color='#000000dc' />,
    link: "https://redux.js.org/",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative color='#000000dc' />,
    link: "https://reactnative.dev/",
  },
  {
    name: "VueJS",
    icon: <FaVuejs color='#000000dc' />,
    link: "https://threejs.org/",
  },
  {
    name: "ThreeJS",
    icon: <TbBrandThreejs color='#000000dc' />,
    link: "https://vuejs.org/",
  },
  {
    name: "Jquery",
    icon: <SiJquery color='#000000dc' />,
    link: "https://jquery.com/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss color='#000000dc' />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "MySQL",
    icon: <SiMysql color='#000000dc' />,
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color='#000000dc' />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Docker",
    icon: <SiDocker color='#000000dc' />,
    link: "https://www.docker.com/",
  },
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "GitLab",
    icon: <SiGitlab color='#000000dc' />,
    link: "https://about.gitlab.com/",
  },
  {
    name: "Linux",
    icon: <SiLinux color='#000000dc' />,
    link: "https://www.linux.org/",
  },
  {
    name: "Postman",
    icon: <SiPostman color='#000000dc' />,
    link: "https://www.postman.com/",
  },
  {
    name: "Blender",
    icon: <SiBlender color='#000000dc' />,
    link: "https://www.blender.org/",
  },
  {
    name: "Scrum",
    icon: <SiScrumalliance color='#000000dc' />,
    link: "https://www.scrum.org/",
  },
];
