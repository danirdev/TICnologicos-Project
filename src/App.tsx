import { useState, useEffect } from "react";
import { Route, Router, useLocation } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { FloatingMenu } from "./components/FloatingMenu";
import { Hero } from "./components/Hero";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { AboutHome } from "./pages/AboutHome";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetails } from "./pages/ProjectDetails";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [path, setLocation] = useLocation();
  const handleNavigation = (section: string) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation(
        section === "home"
          ? "/"
          : section.startsWith("/")
          ? section
          : `/${section}`
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (path === "/") setActiveSection("home");
    else if (path === "/projects") setActiveSection("projects");
    else if (path === "/about") setActiveSection("about");
    else if (path === "/contact") setActiveSection("contact");
  }, [path]);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        <Navbar activeSection={activeSection} />
        <FloatingMenu onNavigate={handleNavigation} />

        <Router>
          <Route path="/">
            <main>
              <section id="home">
                <Hero onNavigate={handleNavigation} />
              </section>
              <section id="home-content">
                <Home onNavigate={handleNavigation} />
              </section>
              <section id="about-home">
                <AboutHome />
              </section>
            </main>
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/projects/:id">
            {(params) => <ProjectDetails id={params.id} />}
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Router>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
