 
import NavBar from './componants/NavBar';
import Hero from './componants/Hero';
import Skilles from './componants/Skilles';
import Sercices from './componants/Sercices';
import Contact from './componants/Contact';
import Footer from './componants/Footer';
function App() {
  return (
    <main className='  p-4 text-gray-400'>
    <NavBar/> 
    <Hero/>
    <Skilles/>
    <Sercices/>
    <Contact/>
    <Footer/>
    
    </main>
  );
}

export default App;
