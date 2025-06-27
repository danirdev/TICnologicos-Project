import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ExternalLink,
  Globe,
  Smartphone,
  TrendingUp,
  Stethoscope,
  PiggyBank,
  BookOpen,
  Leaf,
} from "lucide-react";
import { useLocation } from "wouter";

const iconMap = {
  ticProject: Stethoscope,
  financeApp: PiggyBank,
  eduPlatform: BookOpen,
  energyDashboard: Leaf,
};

const colorMap = {
  ticProject: "from-green-500 to-blue-500",
  financeApp: "from-yellow-500 to-orange-500",
  eduPlatform: "from-indigo-500 to-purple-500",
  energyDashboard: "from-lime-500 to-teal-500",
};

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  const projectIds = [
    "ticProject",
    "financeApp",
    "eduPlatform",
    "energyDashboard",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl px-4 mx-auto text-center text-white">
          <motion.h1
            className="mb-6 text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("projects.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectIds.map((id, index) => {
              const Icon = iconMap[id as keyof typeof iconMap] || Globe;
              const color =
                colorMap[id as keyof typeof colorMap] ||
                "from-gray-400 to-gray-600";

              return (
                <motion.div
                  key={id}
                  className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer group dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setLocation(`/projects/${id}`)}
                >
                  {/* Image / Icon */}
                  <div
                    className={`h-48 bg-gradient-to-r ${color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {t(`projects.${id}.title`)}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {t(`projects.${id}.subtitle`)}
                    </p>

                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-1 text-indigo-600 transition-colors dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">
                          {t("projects.viewDetails", "View Details")}
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
