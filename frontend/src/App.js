import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import TechStack from './pages/TechStack/TechStack';
import Projects from './pages/Projects/Projects';
import Educations from './pages/Educations/Educations';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import {useTheme} from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from './components/MobileNav/MobileNav';
import './App.css';

function App() {
  const [theme] = useTheme()
  return (
    <> 
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
            <About />
            <Educations />
            <TechStack />
            <Projects />
            <WorkExperience />
            <Contact />
        <hr />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With 😍 Bhatti Tech Solutions &copy; 2023</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#019cf8"
        style={{ backgroundColor: "#1e1e1e", borderRadius: "20px" }}
      />
    </>
  )
}

export default App;
