import './App.css';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header.js';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
