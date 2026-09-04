import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { FiX, FiTrash2, FiMail, FiUser, FiClock, FiInbox, FiLogOut } from 'react-icons/fi';
import './MessagesPanel.css';

const MessagesPanel = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/users/comments', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setMessages(data.data || []);
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this message?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/v1/comments/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        setMessages(prev => prev.filter(m => m._id !== id));
      }
    } catch {
      // Silently fail
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHrs < 24) return `${diffHrs}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  if (!isOpen) return null;

  return (
    <div className="messages-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="messages-panel">
        {/* Header */}
        <div className="messages-header">
          <div className="messages-header-left">
            <h2 className="messages-title">
              <FiInbox className="messages-title-icon" />
              Messages
            </h2>
            <span className="messages-count">{messages.length}</span>
          </div>
          <div className="messages-header-right">
            <button className="messages-logout" onClick={handleLogout} title="Logout">
              <FiLogOut />
              <span>Logout</span>
            </button>
            <button className="messages-close" onClick={onClose} aria-label="Close messages">
              <FiX />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="messages-content">
          {loading ? (
            <div className="messages-loading">
              <div className="messages-loading-spinner" />
              <p>Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="messages-empty">
              <FiInbox className="messages-empty-icon" />
              <h3>No messages yet</h3>
              <p>When someone leaves a message via your contact form, it will appear here.</p>
            </div>
          ) : (
            <div className="messages-list">
              {messages.map((msg, index) => (
                <div
                  className="message-card"
                  key={msg._id}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="message-card-header">
                    <div className="message-sender">
                      <div className="message-avatar">
                        {msg.name?.charAt(0).toUpperCase()}
                      </div>
                      <div className="message-sender-info">
                        <span className="message-name">
                          <FiUser className="message-meta-icon" />
                          {msg.name}
                        </span>
                        <span className="message-email">
                          <FiMail className="message-meta-icon" />
                          {msg.email}
                        </span>
                      </div>
                    </div>
                    <div className="message-actions">
                      <span className="message-time">
                        <FiClock className="message-meta-icon" />
                        {formatDate(msg.createdAt)}
                      </span>
                      <button
                        className="message-delete"
                        onClick={() => handleDelete(msg._id)}
                        disabled={deletingId === msg._id}
                        title="Delete message"
                        aria-label="Delete message"
                      >
                        {deletingId === msg._id ? (
                          <span className="message-delete-spinner" />
                        ) : (
                          <FiTrash2 />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="message-body">{msg.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPanel;
