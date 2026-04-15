import { useState } from 'react';

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

    // Determine the endpoint based on the mode (login or register)
    const endpoint = isLoginMode
      ? 'https://learn-log-api.onrender.com/users/login'
      : 'https://learn-log-api.onrender.com/users/register';

    try {
      setIsLoading(true);
      setMessage('');

      // Make the API request to either login or register
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
        setMessage('Login successful');
        props.onLoginSuccess();
      } else {
        setMessage('Register successful. You can switch to Login now!');
      }

      setFormData({
        email: '',
        password: '',
      });
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="form-section">
      <h2>{isLoginMode ? 'Login Here' : 'Register Here'}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : isLoginMode ? 'Login' : 'Register'}
        </button>
      </form>

      <button
        type="button"
        onClick={() => setIsLoginMode(!isLoginMode)}
      >
        Switch to {isLoginMode ? 'Register' : 'Login'}
      </button>

      {message && <p>{message}</p>}
    </section>
  );
}

export default AuthForm;