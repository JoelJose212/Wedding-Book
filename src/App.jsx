import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import PhotographersWelcome from './components/PhotographersWelcome/PhotographersWelcome';
import WeddingBookDifference from './components/WeddingBookDifference/WeddingBookDifference';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <PhotographersWelcome />
      <WeddingBookDifference />
      <Footer />
    </>
  );
}

export default App;
