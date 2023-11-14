// import logo from './logo.svg';
import Name from './Name';
import profile from './Profile';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>

      <Name first = {profile.Name} />
      <Education second = {profile.Education}/>
      <Work third= {profile.Work}/>
      <Skills fourth = {profile.Skills} />
      <Contact fifth = {profile.Contact}/>
    </div>
  );
}

export default App;
