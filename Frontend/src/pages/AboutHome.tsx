import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Linkedin,
  Github,
  Mail,
  Code,
  Palette,
  Database,
  Brain,
  Users,
  Award,
} from "lucide-react";

export const AboutHome: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: "1",
      name: "Alex Rodriguez",
      role: "Full Stack Developer",
      description:
        "Passionate about creating scalable web applications with modern technologies. Expert in React, Node.js, and cloud architecture.",
      image: "/api/placeholder/300/300",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      social: {
        linkedin: "https://linkedin.com/in/alexrodriguez",
        github: "https://github.com/alexrodriguez",
        email: "alex@techflow.com",
      },
    },
    {
      id: "2",
      name: "Maria Santos",
      role: "UI/UX Designer",
      description:
        "Creative designer focused on user-centered design principles. Specializes in creating intuitive and beautiful digital experiences.",
      image: "/api/placeholder/300/300",
      skills: ["Figma", "Adobe Creative", "Prototyping", "User Research"],
      icon: Palette,
      color: "from-pink-500 to-purple-500",
      social: {
        linkedin: "https://linkedin.com/in/mariasantos",
        github: "https://github.com/mariasantos",
        email: "maria@techflow.com",
      },
    },
    {
      id: "3",
      name: "Carlos Mendez",
      role: "Backend Engineer",
      description:
        "Backend specialist with expertise in database design, API development, and system architecture. Ensures robust and secure solutions.",
      image: "/api/placeholder/300/300",
      skills: ["Python", "PostgreSQL", "Docker", "Microservices"],
      icon: Database,
      color: "from-green-500 to-teal-500",
      social: {
        linkedin: "https://linkedin.com/in/carlosmendez",
        github: "https://github.com/carlosmendez",
        email: "carlos@techflow.com",
      },
    },
    {
      id: "4",
      name: "Ana Garcia",
      role: "AI/ML Engineer",
      description:
        "Machine learning expert working on intelligent solutions and data-driven applications. Specializes in healthcare and IoT systems.",
      image: "/api/placeholder/300/300",
      skills: ["Python", "TensorFlow", "Data Science", "IoT"],
      icon: Brain,
      color: "from-orange-500 to-red-500",
      social: {
        linkedin: "https://linkedin.com/in/anagarcia",
        github: "https://github.com/anagarcia",
        email: "ana@techflow.com",
      },
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "4", label: "Team Members", icon: Users },
    { number: "3+", label: "Years Experience", icon: Code },
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
            {t("about.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("about.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
                <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-16 h-16 mx-auto mb-6 text-blue-500" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly explore new technologies and methodologies to
                deliver cutting-edge solutions that push boundaries.
              </p>
            </motion.div>

            <motion.div
              className="p-8 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-16 h-16 mx-auto mb-6 text-green-500" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of teamwork and open communication to
                achieve exceptional results together.
              </p>
            </motion.div>

            <motion.div
              className="p-8 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-16 h-16 mx-auto mb-6 text-purple-500" />
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to delivering high-quality solutions that
                exceed expectations and create lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
