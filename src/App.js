import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Formation from './components/Formation';
import Project from './components/Project';
import Contact from './components/Contact';
import './index.css'; // Importa o arquivo CSS do Tailwind
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
function App() {
     return (
          <>
               <div className=''>
                    <NavBar />
                    <Introduction />
                    <Experience />
                    <Formation />
                    <Project />
                    <Contact />
                    <Footer />
                    <ScrollButton />
               </div>
          </>
     );
}

export default App;
