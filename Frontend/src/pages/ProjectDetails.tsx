import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface ProjectsProps {
  id?: string;
}

export const ProjectDetails: React.FC<ProjectsProps> = ({ id }) => {
  const project = projects.find((p) => p.id === id);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 dark:text-gray-300">
        Proyecto no encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl px-4 mx-auto text-center text-white">
          <motion.h1
            className="mb-6 text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t(`${project.translationKey}.title`)}
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t(`${project.translationKey}.subtitle`)}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="grid max-w-6xl gap-12 px-4 mx-auto md:grid-cols-2">
          {project.cards?.map((card) => {
            const Icon = card.icon;
            const items = t(
              `${project.translationKey}.cards.${card.id}.items`,
              {
                returnObjects: true,
              }
            ) as string[];

            return (
              <motion.div
                key={card.id}
                className={`p-8 shadow-lg rounded-2xl bg-white dark:bg-gray-800 border-l-4 border-${card.color}-500`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Icon className={`w-12 h-12 mb-4 text-${card.color}-500`} />
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {t(`${project.translationKey}.cards.${card.id}.title`)}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {t(`${project.translationKey}.cards.${card.id}.description`)}
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
