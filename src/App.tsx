import React from 'react';
import { NavBar } from './components/navbar'
import { Home } from './components/home'
import { Projects } from './components/projects'
import { About } from './components/about'
import { Contact } from './components/contact';
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
