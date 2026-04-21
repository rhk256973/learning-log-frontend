import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showHome, setShowHome] = useState(!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowHome(true);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <main className="main-content">
        {showHome && !isLoggedIn ? (
          <HomePage onGetStarted={() => setShowHome(false)} />
        ) : !isLoggedIn ? (
          <AuthForm onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <Dashboard />
        )}
      </main>
    </>
  );
}

export default App;