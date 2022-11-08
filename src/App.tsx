import React from 'react';
import NameDisplay from './components/NameDisplay';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/appStyle.scss';

function App() {
  return (
    <div className="App">
      <NameDisplay />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
