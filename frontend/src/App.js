import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import TechStack from './pages/TechStack/TechStack';
import Projects from './pages/Projects/Projects';
import Educations from './pages/Educations/Educations';
import WorkExperience from './pages/WorkExperience/WorkExperience';

function App() {
  return (
    <> 
      <Layout />
      <div className="container">
          <About />
          <TechStack />
          <Projects />
          <Educations />
          <WorkExperience />
      </div>
    </>
  )
}

export default App;
