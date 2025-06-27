import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import {
  Menu,
  X,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  FolderOpen,
  Mail,
  Globe,
} from "lucide-react";

interface FloatingMenuProps {
  onNavigate: (section: string) => void;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const menuItems = [
    {
      icon: theme === "light" ? Moon : Sun,
      label: t("floatingMenu.theme"),
      onClick: toggleTheme,
      color: "text-yellow-500",
    },
    {
      icon: soundEnabled ? Volume2 : VolumeX,
      label: t("floatingMenu.sound"),
      onClick: () => setSoundEnabled(!soundEnabled),
      color: "text-blue-500",
    },
    {
      icon: FolderOpen,
      label: t("floatingMenu.projects"),
      onClick: () => onNavigate("projects"),
      color: "text-green-500",
    },
    {
      icon: Mail,
      label: t("floatingMenu.contact"),
      onClick: () => onNavigate("contact"),
      color: "text-red-500",
    },
    {
      icon: Globe,
      label: t("floatingMenu.language"),
      onClick: toggleLanguage,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Main button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>

        {/* Menu items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute left-20 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={item.onClick}
                    className="group relative w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon
                      size={20}
                      className={`${item.color} group-hover:scale-110 transition-transform`}
                    />

                    {/* Tooltip */}
                    <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.label}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
