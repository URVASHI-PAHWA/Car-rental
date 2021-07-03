import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Offers from './components/Offers';
import Book from './components/Book'
import Contact from './components/Contact';
import ScrollToTop from './Scroll';
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
    <>
      <ScrollToTop/>
      <Nav />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Offers" component={Offers} />
        <Route exact path="/Book" component={Book} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;





