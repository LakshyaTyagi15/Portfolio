import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useAuth } from "../AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon, FiLock, FiMessageSquare } from "react-icons/fi";
import LoginModal from "./LoginModal";
import MessagesPanel from "./MessagesPanel";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { isAuthenticated } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="container navbar-container">
                    <a href="#" className="logo">
                        Lakshya<span className="logo-dot">.dev</span>
                    </a>

                    <div className="nav-right">
                        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                            <li>
                                <a
                                    href="#hero"
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "dark" ? <FiSun /> : <FiMoon />}
                        </button>

                        {isAuthenticated ? (
                            <button
                                className="nav-auth-btn nav-messages-btn"
                                onClick={() => setShowMessages(true)}
                                title="View messages"
                                id="nav-messages-btn"
                            >
                                <FiMessageSquare />
                                <span className="nav-auth-label">Messages</span>
                            </button>
                        ) : (
                            <button
                                className="nav-auth-btn nav-login-btn"
                                onClick={() => setShowLogin(true)}
                                title="Admin login"
                                id="nav-login-btn"
                            >
                                <FiLock />
                                <span className="nav-auth-label">Login</span>
                            </button>
                        )}

                        <div className="menu-icon" onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </nav>

            <LoginModal
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
            />
            <MessagesPanel
                isOpen={showMessages}
                onClose={() => setShowMessages(false)}
            />
        </>
    );
};

export default Navbar;
