import './App.css';
import NavigationBar from './homescreen/navigationbar';
import "./style/landingPage.css"
import Intro from './homescreen/intro';
import Trending from './homescreen/tranding';
import SuperHero from './homescreen/superhero';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar/>
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>
      <div className="trending">
        <SuperHero />
      </div>

    </div>
    
  );
}

export default App;
