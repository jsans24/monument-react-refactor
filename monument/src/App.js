import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Landing from './pages/Landing'

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
