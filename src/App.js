// import dependencies
import { Switch, Route } from 'react-router-dom'

// import files
import './App.css';
import Challenges from './components/Challenges';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import Specials from './components/Specials';

function App() {
  return (
    <>
      <Switch>
        {/* set different paths for each component */}
        <Route path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/specials' component={Specials} />
        <Route path='/challenges' component={Challenges} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
