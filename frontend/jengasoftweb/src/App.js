import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for details.');
  };

  // Expose a global function to receive OTP from Android
  useEffect(() => {
    window.setOtpFromNative = (otp) => {
      setFormData(prev => ({
        ...prev,
        otp: otp
      }));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter your OTP"
            maxLength={6} 
            required
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
