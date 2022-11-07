import React from 'react';
import NameDisplay from './components/NameDisplay';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './styles/appStyle.scss';

function App() {
  return (
    <div className="App">
      <NameDisplay />
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
