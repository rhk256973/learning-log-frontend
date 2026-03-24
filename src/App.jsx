import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Learn Log</h1>
        <p>Track your learning topics and entries</p>
      </main> 
    </>
  );
}

export default App
