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

export const About: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: "1",
      name: "Alexander Fernando Aljama",
      role: "UI/UX Designer",
      description:
        "Creative designer focused on user-centered design principles. Specializes in creating intuitive and beautiful digital experiences.",
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
      name: "Alejandro Samuel Mercado",
      role: "Full Stack Developer",
      description:
        "Passionate about creating scalable web applications with modern technologies. Expert in React, Node.js, and cloud architecture.",
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
      name: "Leandro Francisco Moreno",
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
      name: "Danie Alberto  Ramos",
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

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="overflow-hidden transition-all duration-300 bg-white shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Profile Image/Icon */}
                <div
                  className={`h-48 bg-gradient-to-r ${member.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <member.icon className="w-16 h-16 text-white" />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs text-white rounded-full bg-white/20 backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium text-indigo-600 dark:text-indigo-400">
                    {member.role}
                  </p>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-blue-600"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 transition-colors hover:text-green-600"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
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
              className="p-8 text-center border-2 border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl"
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
              className="p-8 text-center bg-white border-2 border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl"
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
              className="p-8 text-center bg-white border-2 border-gray-200 shadow-xl dark:bg-gray-800 rounded-2xl"
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
