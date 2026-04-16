import { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
// import TopicList from './components/TopicList';
// import TopicForm from './components/TopicForm';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <main className="main-content">
        {!isLoggedIn ? (
          <AuthForm onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          
            <Dashboard />
   
        )}
      </main>
    </>
  );
}

export default App
