import foodOrderAppImage from "../assets/food-order-app.png";
import investmentsCalculatorImage from "../assets/investments-calculator.png"
import placePickerImage from "../assets/place-picker.png"
import quizImage from "../assets/quiz-app.png"
import timerGame from "../assets/timer-game.png"
import personalWebsiteImage from "../assets/personal-website.png"
import clinicImage from "../assets/clinic-system.png"
interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'WIP | Clinic Apointment System',
    description: `This is a new project that im working at the moment and it still not finished. Will go live when its done`,
    image: clinicImage,
    GitHub: '#',
    hosted: '#',
  },
  {
    title: 'React | Minimal Personal Website',
    description: `Developed this react minimal personal website while learning this technology`,
    image: personalWebsiteImage,
    GitHub: 'https://github.com/daniel-wdv/new-personal-website/tree/master',
    hosted: 'https://danielcarvalho.netlify.app',
  },
  {
    title: 'Timer Game',
    description: `A game with different click timers so you can try to get a perfect score. try to get the timing after you click the button`,
    image: timerGame,
    GitHub: 'https://github.com/daniel-wdv/react-testing-timer-game-app',
    hosted: `https://timer-game-test.netlify.app/`,
  },
  {
    title: 'Quiz App',
    description: `A quiz APP with questions about React. It checks for right and wrong answers and it gives you a score after`,
    image: quizImage,
    GitHub: 'https://github.com/daniel-wdv/react-testing-quiz-app',
    hosted: `https://quizz-app.netlify.app/`,
  },
  {
    title: 'Investment Calculator',
    description: `Basic calculator to manage your investments and income and make you financially stable`,
    image: investmentsCalculatorImage,
    GitHub: 'https://github.com/daniel-wdv/react-testing-investments-calculator',
    hosted: `https://investment-calculator-test.netlify.app/`,
  },
  {
    title: 'Simple Placepicker',
    description: `A simple placepicker with tons of places to visit. it gets your location and gets the places closer to you`,
    image: placePickerImage,
    GitHub: 'https://github.com/daniel-wdv/react-testing-placepicker',
    hosted: 'https://simple-placepicker.netlify.app/',
  },
  {
    title: 'Food Order APP',
    description: `React food order app that was made while learning this technology. Has a dummy backend made in express JS`,
    image: foodOrderAppImage,
    GitHub: 'https://github.com/daniel-wdv/react-testing-food-order-app',
    hosted: 'https://food-order-testing.netlify.app/',
  },
];
