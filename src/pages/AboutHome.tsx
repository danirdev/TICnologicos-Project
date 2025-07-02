import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Lightbulb, ShieldCheck, Target, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    titleKey: "aboutHome.innovation.title",
    descKey: "aboutHome.innovation.description",
  },
  {
    icon: ShieldCheck,
    titleKey: "aboutHome.security.title",
    descKey: "aboutHome.security.description",
  },
  {
    icon: Target,
    titleKey: "aboutHome.focus.title",
    descKey: "aboutHome.focus.description",
  },
  {
    icon: Users,
    titleKey: "aboutHome.collaboration.title",
    descKey: "aboutHome.collaboration.description",
  },
];

export const AboutHome = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl px-4 mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("aboutHome.title")}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("aboutHome.description")}
        </motion.p>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 text-left bg-gray-100 rounded-2xl dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <feature.icon className="w-10 h-10 mb-4 text-indigo-600" />
              <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {t(feature.titleKey)}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
