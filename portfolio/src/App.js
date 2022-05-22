import './App.css';
import IntroComponent from './Component/IntroComponent';
import AboutComponent from './Component/AboutComponent';
import InspiringQuotesComponent from './Component/InspiringQuotesComponent';
import SkillsComponent from './Component/SkillsComponent';
import CoffieWithMeComponent from './Component/CoffieWithMeComponent';
import FooterComponent from './Component/FooterComponent';
import NavHeaderComponent from './Component/NavHeaderComponent';
import ProjectComponent from './Component/ProjectComponent';


function App() {
  return (
    <div className="App">
        <NavHeaderComponent />
        <IntroComponent />
        <AboutComponent />
        <InspiringQuotesComponent />
        <SkillsComponent />
        <ProjectComponent />
        <CoffieWithMeComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
