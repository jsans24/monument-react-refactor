import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Landing from './pages/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
