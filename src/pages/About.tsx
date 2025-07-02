import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Users,
  Code,
  Brain,
  Palette,
  Database,
  Linkedin,
  Github,
  Mail,
  Globe,
  Lightbulb,
  Rocket,
} from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "Alexander Fernando Aljama",
    role: "UI/UX Designer",
    descriptionKey: "about.members.alexander.description",
    image: "Images/alexander.jpg",
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
    descriptionKey: "about.members.alejandro.description",
    image: "Images/alejandro.jpg",
    skills: ["Figma", "Adobe Creative", "Prototyping", "User Research"],
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    social: {
      linkedin: "https://www.linkedin.com/in/alejandro-samuel-rg/",
      github: "https://github.com/alejandro-samuel-mercado",
      email: "maria@techflow.com",
    },
  },
  {
    id: "3",
    name: "Leandro Francisco Moreno",
    role: "Backend Engineer",
    descriptionKey: "about.members.leandro.description",
    image: "Images/leandro.jpg",
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
    name: "Daniel Alberto Ramos",
    role: "AI/ML Engineer",
    descriptionKey: "about.members.danie.description",
    image: "Images/daniel.jpg",
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

export const About = () => {
  const { t } = useTranslation();
  const [activeMember, setActiveMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);

  const stats = [
    { number: "50+", label: t("about.stats.projects"), icon: Award },
    { number: "25+", label: t("about.stats.clients"), icon: Users },
    { number: "4", label: t("about.stats.team"), icon: Users },
    { number: "3+", label: t("about.stats.experience"), icon: Code },
  ];

  const extra = [
    {
      icon: Globe,
      title: t("about.extra.global.title"),
      description: t("about.extra.global.description"),
    },
    {
      icon: Lightbulb,
      title: t("about.extra.innovation.title"),
      description: t("about.extra.innovation.description"),
    },
    {
      icon: Rocket,
      title: t("about.extra.growth.title"),
      description: t("about.extra.growth.description"),
    },
  ];

  const TeamMemberModal: React.FC<{
    member: (typeof teamMembers)[number];
    onClose: () => void;
  }> = ({ member, onClose }) => {
    return (
      <motion.div
        className="fixed z-50 flex items-center justify-center w-full p-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseLeave={onClose}
      >
        <div className="text-center">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-48 h-48 mx-auto rounded-full"
          />
        </div>
      </motion.div>
    );
  };

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

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-4 mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl px-4 mx-auto grid gap-10 md:grid-cols-3">
          {extra.map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <feature.icon className="w-10 h-10 mb-4 text-indigo-600" />
              <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="px-4 mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="overflow-hidden bg-white shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <AnimatePresence>
                {activeMember?.id === member.id && (
                  <TeamMemberModal
                    member={member}
                    onClose={() => setActiveMember(null)}
                  />
                )}
              </AnimatePresence>
              <div className={`h-48 bg-gradient-to-r ${member.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <member.icon className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="p-6 relative">
                <motion.h3
                  className="mb-1 text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400"
                  onClick={() => setActiveMember(member)}
                  onMouseEnter={() => setActiveMember(member)}
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>

                <p className="mb-3 font-medium text-indigo-600 dark:text-indigo-400">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {t(member.descriptionKey)}
                </p>

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

                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-green-600"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
