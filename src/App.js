
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Camera from './components/Cameras/Camera';
import Card from './components/Cards/Card';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="container">
    <Navbar/>
    <Camera/>
    <Card/>
    <Footer/>
    
    </div>
  );
}

export default App;
