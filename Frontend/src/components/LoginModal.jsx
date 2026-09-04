import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { FiLock, FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(password);
      setPassword('');
      onClose();
    } catch (err) {
      setError(err.message || 'Invalid password');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <div className={`login-modal ${shake ? 'shake' : ''}`}>
        <button className="login-close" onClick={onClose} aria-label="Close login modal">
          <FiX />
        </button>

        <div className="login-icon-wrap">
          <FiLock className="login-lock-icon" />
        </div>

        <h2 className="login-title">Welcome back</h2>
        <p className="login-subtitle">Enter your password to continue</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="login-input"
              autoFocus
              required
              id="login-password"
            />
            <button
              type="button"
              className="login-eye"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            className="login-submit"
            disabled={isLoading || !password}
          >
            {isLoading ? (
              <span className="login-spinner" />
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
