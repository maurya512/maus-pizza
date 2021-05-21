// import dependencies
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

// import files
import './App.css';
import Challenges from './components/Challenges';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Specials from './components/Specials';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        {/* set different paths for each component */}
        {/* The browser will look for an exact path to render */}
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/specials' component={Specials} />
        <Route exact path='/challenges' component={Challenges} />
        <Route exact path='/contact' component={Contact} />
        {/* Redirect the user to homepage if no matching exact route is hit */}
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
