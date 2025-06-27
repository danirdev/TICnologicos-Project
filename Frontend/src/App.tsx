import React, { useState, useEffect } from "react";
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
              <section id="about">
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

        <footer className="py-12 text-white bg-gray-900 dark:bg-black">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="col-span-2">
                <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                  TechFlow
                </h3>
                <p className="mb-4 text-gray-400">
                  Building the future through innovative technology solutions.
                  We transform ideas into digital experiences that drive
                  business growth.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button
                      onClick={() => handleNavigation("home")}
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigation("/projects")}
                      className="transition-colors hover:text-white"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigation("about")}
                      className="transition-colors hover:text-white"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigation("/contact")}
                      className="transition-colors hover:text-white"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>contact@techflow.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
              <p>&copy; 2025 TechFlow. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
