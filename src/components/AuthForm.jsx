import { useState } from 'react';
import './AuthForm.css';

function AuthForm(props) {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLoginMode
      ? 'https://learn-log-api.onrender.com/users/login'
      : 'https://learn-log-api.onrender.com/users/register';

    try {
      setIsLoading(true);
      setMessage('');

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Something went wrong');
      }

      if (isLoginMode) {
        localStorage.setItem('token', data.token);
        setMessage('Welcome back! 👋');
        props.onLoginSuccess();
      } else {
        setMessage('Account created! Now you can log in. ✨');
      }

      setFormData({
        email: '',
        password: '',
      });
    } catch (err) {
      setMessage(`Oops! ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-header">
        <h2>{isLoginMode ? 'Welcome Back' : 'Create Your Space'}</h2>
        <p>{isLoginMode ? 'Continue your learning journey' : 'Start tracking your growth today'}</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="primary-btn" disabled={isLoading}>
          {isLoading ? 'Wait a sec...' : isLoginMode ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <div className="auth-footer">
        <p>
          {isLoginMode ? "First time here?" : "Already have an account?"}
        </p>
        <button
          type="button"
          className="text-btn"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? 'Create an account' : 'Log in instead'}
        </button>
      </div>

      {message && (
        <div className={`auth-message ${message.startsWith('Oops') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
    </section>
  );
}

export default AuthForm;