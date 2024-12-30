import './App.css';
import NavBar from './navBar';
import Introduction from './introduction';
import Experience from './experience';
import Formation from './formation';
import Contact from './contact';

import './index.css'; // Importa o arquivo CSS do Tailwind
function App() {
     return (
          <>
               <NavBar />
               <Introduction />
               <Experience />
               <Formation />
               <Contact />
          </>
     );
}

export default App;
