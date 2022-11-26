
import Header from './header';
import './App.css';
import gsap from 'gsap';
import MainContent from './MainContent'

function App() {
  let timeline = gsap.timeline();
  return (
    <div className="App">
      <Header timeline= {timeline}/>
      <MainContent />
    </div>
  );
}

export default App;