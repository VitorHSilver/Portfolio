import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Formation from './components/Formation';
import Project from './components/Project';
import Contact from './components/Contact';
import './index.css'; // Importa o arquivo CSS do Tailwind
function App() {
     return (
          <>
               <NavBar />
               <Introduction />
               <Experience />
               <Formation />
               <Project />
               <Contact />
          </>
     );
}

export default App;
