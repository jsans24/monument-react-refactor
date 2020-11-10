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
    <div className="App">
      <Navbar />
      <Landing />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
