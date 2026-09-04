import { useState, useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import './Toast.css';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 4000 }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const handleClose = () => {
    setExiting(true);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`toast toast-${type} ${exiting ? 'toast-exit' : ''}`}>
      <div className="toast-icon-wrap">
        {type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
      </div>
      <p className="toast-message">{message}</p>
      <button className="toast-close" onClick={handleClose} aria-label="Close notification">
        <FiX />
      </button>
    </div>
  );
};

export default Toast;
