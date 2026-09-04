import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <div className="app">
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
