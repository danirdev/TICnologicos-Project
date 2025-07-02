import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { useState } from "react";

export const Footer = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [, setActiveSection] = useState("home");

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation(section.startsWith("/") ? section : `/${section}`);
    }
  };

  return (
    <footer className="py-12 text-white bg-gray-900 dark:bg-black">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
              TICnológicos
            </h3>
            <p className="mb-4 text-gray-400">{t("footer.description")}</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🏥</span>
              <span>Pastillero Inteligente Rotatorio</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
              <span>🌐</span>
              <span>Telemedicina & IoT</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("footer.links.title")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => handleNavigation("home")}
                  className="hover:text-white transition-colors"
                >
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/projects")}
                  className="hover:text-white transition-colors"
                >
                  {t("nav.projects")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("footer.contact.title")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>ticnologicos.AADL@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>+54 (388) 311-8692</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>{t("footer.contact.location")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🎓</span>
                <span>Estudiantes TICs</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2025 TICnológicos - Pastillero Inteligente. {t("footer.rights")}</p>
          <p className="text-sm mt-2">Proyecto académico de Tecnologías de la Información y Comunicación</p>
        </div>
      </div>
    </footer>
  );
};