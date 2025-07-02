import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Users,
  Target,
  Award,
  Code,
  Smartphone,
  Globe,
  Database,
  Brain,
  Quote,
  GitGraph,
  Star,
  CodeXml,
  RadioTower,
  Cpu,
  Palette,
} from "lucide-react";

interface HomeProps {
  onNavigate: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const technologies = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "NextJS", icon: CodeXml, color: "text-red-500" },
    { name: "Node.js", icon: Database, color: "text-green-500" },
    { name: "Django", icon: GitGraph, color: "text-yellow-500" },
    { name: "Python", icon: Brain, color: "text-yellow-600" },
    { name: "Arduino", icon: Cpu, color: "text-green-600" },
    { name: "IoT", icon: RadioTower, color: "text-teal-500" },
    { name: "Mobile Apps", icon: Smartphone, color: "text-purple-500" },
    { name: "Web Apps", icon: Globe, color: "text-orange-500" },
    { name: "AI/ML", icon: Brain, color: "text-pink-500" },
    { name: "UX/UI", icon: Palette, color: "text-rose-500" },
  ];
  const testimonials = [
    {
      name: "María González",
      company: "Tech Solutions Inc.",
      message:
        "Exceptional work quality and professional service. They delivered exactly what we needed.",
      rating: 5,
    },
    {
      name: "Carlos Rodriguez",
      company: "Digital Innovations",
      message:
        "Outstanding team with great communication. Highly recommend their services.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "StartUp Labs",
      message:
        "They transformed our vision into reality. Professional and efficient.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Motto Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <motion.h2
            className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("home.motto")}
          </motion.h2>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Who We Are */}
            <motion.div
              className="p-8 text-center  transition-shadow bg-white shadow-xl border-2 border-blue-300 dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-16 h-16 mx-auto mb-6 text-indigo-500" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.whoWeAre.title")}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {t("home.whoWeAre.content")}
              </p>
            </motion.div>

            {/* What We Do */}
            <motion.div
              className="p-8 text-center transition-shadow bg-white  shadow-xl border-2 border-green-300 dark:bg-gray-800 rounded-2xl hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-16 h-16 mx-auto mb-6 text-purple-500" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.whatWeDo.title")}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {t("home.whatWeDo.content")}
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="p-8 text-center transition-shadow bg-white shadow-xl border-2 border-violet-300 dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-16 h-16 mx-auto mb-6 text-pink-500" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {t("home.whyChooseUs.title")}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {t("home.whyChooseUs.content")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl px-4 mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("home.methodology.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("home.methodology.description")}
            </p>
          </motion.div>

          {/* Kanban Board Visualization */}
          <motion.div
            className="grid gap-6 md:grid-cols-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {["Backlog", "In Progress", "Review", "Done"].map((column) => (
              <div
                key={column}
                className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <h4 className="mb-4 font-semibold text-center text-gray-900 dark:text-white">
                  {column}
                </h4>
                <div className="space-y-3">
                  {[1, 2].map((item) => (
                    <motion.div
                      key={item}
                      className="p-3 rounded-lg shadow-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-800 dark:to-purple-800"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="h-3 mb-2 bg-gray-300 rounded dark:bg-gray-600"></div>
                      <div className="w-3/4 h-2 bg-gray-200 rounded dark:bg-gray-700"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("home.technologies.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("home.technologies.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="p-6 text-center transition-all duration-300 bg-white shadow-lg border-2 border-gray-200 dark:bg-gray-800 rounded-xl hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <tech.icon className={`w-12 h-12 ${tech.color} mx-auto mb-3`} />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-6xl px-4 mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("home.testimonials.title")}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Quote className="w-8 h-8 mb-4 text-indigo-500" />
                <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              {t("home.cta.title")}
            </h2>
            <p className="mb-8 text-xl text-indigo-100">
              {t("home.cta.description")}
            </p>
            <motion.button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 text-lg font-semibold text-indigo-600 transition-colors duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home.cta.button")}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
