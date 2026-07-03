import React from 'react';
import ClassComponent from './components/ClassComponent';
import Footer from './components/Footer';
import FunctionalComponent from './components/FunctionalComponent';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <ClassComponent />
      <Footer />
      <FunctionalComponent />
      <Header />
      <Home />
    </div>
  );
}

export default App;
