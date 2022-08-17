import React, { useState } from 'react';
import { TopPage } from './components/topPage'
import { Projects } from './components/projects'
import { About } from './components/about'
import { Contact } from './components/contact';
import { Footer } from './components/footer'
import { Up } from './components/up';

function App() {
  return (
    <>

      <TopPage />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <Up />
    </>
  );
}

export default App;
