import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { projects, type Project, type ProjectSection } from "../data/projects";
import { Modal } from "../components/Modal";

interface ProjectsProps {
  id?: string;
}

export const ProjectDetails: React.FC<ProjectsProps> = ({ id }) => {
  const project = projects.find((p) => p.id === id);
  const { t } = useTranslation();

  // Estados para modal y control de imagen actual
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Abrir modal con imagen en índice dado
  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 dark:text-gray-300">
        Proyecto en desarrollo.
      </div>
    );
  }

  // Tarjetas circulares Conceptos Clave
  const CircularCard: React.FC<{ section: ProjectSection; index: number }> = ({
    section,
    index,
  }) => {
    const Icon = section.sectionIcon;
    const content = t(`projects.ticProject.sections.${section.id}.content`);

    if (typeof content !== "string") {
      return null;
    }
    const gradients = {
      introduction: {
        light: "from-indigo-200 to-purple-300",
        dark: "from-indigo-800 to-purple-900",
        icon: "text-indigo-600 dark:text-indigo-300",
      },
      justification: {
        light: "from-purple-200 to-pink-300",
        dark: "from-purple-800 to-pink-900",
        icon: "text-purple-600 dark:text-purple-300",
      },
      objective: {
        light: "from-pink-200 to-indigo-300",
        dark: "from-pink-800 to-indigo-900",
        icon: "text-pink-600 dark:text-pink-300",
      },
    };

    const gradient = gradients[section.id as keyof typeof gradients] || {
      light: `from-${section.color}-100 to-${section.color}-300`,
      dark: `from-${section.color}-800 to-${section.color}-600`,
      icon: `text-${section.color}-600 dark:text-${section.color}-300`,
    };

    return (
      <motion.div
        className={`p-8 rounded-full bg-gradient-to-br ${gradient.light} dark:${gradient.dark} shadow-2xl flex flex-col items-center text-center w-80 h-80 justify-center `}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: index * 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.15, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
      >
        <Icon className={`w-12 h-12 mb-3 ${gradient.icon}`} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {t(`projects.ticProject.sections.${section.id}.title`)}
        </h3>
        <p className=" text-gray-700 text-sm  font-medium dark:text-gray-300 mt-2 leading-relaxed">
          {content}
        </p>
      </motion.div>
    );
  };

  // Elemento Timeline con texto e imagenes
  const TimelineItem: React.FC<{
    section: ProjectSection;
    images: Project["images"];
    index: number;
  }> = ({ section, images, index }) => {
    const Icon = section.sectionIcon;
    const content = t(`projects.ticProject.sections.${section.id}.content`, {
      returnObjects: true,
    });
    const isList = Array.isArray(content);

    // Busca la imagen que corresponde al id de la sección
    const imageIndex = images.findIndex((img) => section.id.includes(img.id));

    const handleImageClick = () => {
      if (imageIndex !== -1) openImageModal(imageIndex);
    };

    return (
      <motion.div
        className={`flex mb-8 ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } items-center`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-1/2 p-6">
          <h3
            className={`text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center text-${section.color}-500`}
          >
            <Icon className={`w-8 h-8 mr-3`} />
            {t(`projects.ticProject.sections.${section.id}.title`)}
          </h3>
          {isList ? (
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {(content as string[]).map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-lg whitespace-pre-line">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : typeof content === "string" ? (
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {content}
            </p>
          ) : null}
          {imageIndex !== -1 && (
            <button
              onClick={handleImageClick}
              onMouseEnter={handleImageClick}
              className="mt-4 text-indigo-600 hover:underline font-semibold"
            >
              {t(`projects.ticProject.images.${section.id}`)}
            </button>
          )}
        </div>
        <div className="w-1/12 flex justify-center">
          <div className={`w-4 h-4 rounded-full bg-${section.color}-500`} />
        </div>
        <div className="w-1/2" />
      </motion.div>
    );
  };

  // Carrusel de imágenes (controlado desde ProjectDetails)
  const ImageCarousel: React.FC<{
    images: Project["images"];
    currentImageIndex: number;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
    openImageModal: (index: number) => void;
  }> = ({
    images,
    currentImageIndex,
    setCurrentImageIndex,
    openImageModal,
  }) => {
    const nextImage = () =>
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () =>
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );

    return (
      <motion.div
        className="relative bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Galería de Imágenes
        </h3>
        <div className="relative h-64">
          <motion.img
            key={images[currentImageIndex].id}
            src={images[currentImageIndex].placeholder}
            alt={t(
              `projects.ticProject.images.${images[currentImageIndex].id}`
            )}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => openImageModal(currentImageIndex)}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
          >
            →
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          {t(`projects.ticProject.images.${images[currentImageIndex].id}`)}
        </p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-5xl px-4 mx-auto text-center text-white">
          <motion.h1
            className="text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {t(`projects.ticProject.title`)}
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {t(`projects.ticProject.subtitle`)}
          </motion.p>
        </div>
      </section>

      {/* Circular Cards Conceptos Clave */}
      <section className="py-16">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Conceptos Clave
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {project.sections
              .filter((section) =>
                ["introduction", "justification", "objective"].includes(
                  section.id
                )
              )
              .map((section, index) => (
                <CircularCard
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Carrusel de imágenes */}
      <section className="py-16">
        <div className="max-w-4xl px-4 mx-auto">
          <ImageCarousel
            images={project.images}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            openImageModal={openImageModal}
          />
        </div>
      </section>

      {/* Timeline - Análisis y solución */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl px-4 mx-auto relative">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Análisis y Solución
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full" />
          {project.sections
            .filter((section) =>
              [
                "systemDescription",
                "telemedicine",
                "problem",
                "proposal",
                "objectives",
                "technical",
                "reflection",
                "aiUsage",
              ].includes(section.id)
            )
            .map((section, index) => (
              <TimelineItem
                key={section.id}
                section={section}
                images={project.images}
                index={index}
              />
            ))}
        </div>
      </section>

      {/* Grid Objetivos y Componentes Técnicos */}
      <section className="py-16">
        <div className="max-w-6xl px-4 mx-auto">
          {project.sections
            .filter((section) => section.isCard)
            .map((section) => (
              <div key={section.id} className="mb-12">
                <motion.div
                  className="grid gap-8 justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, staggerChildren: 0.2 }}
                >
                  <motion.div
                    className={`p-8 rounded-2xl bg-gradient-to-br from-${section.color}-100 to-${section.color}-300 dark:from-${section.color}-800 dark:to-${section.color}-600 shadow-lg transform hover:-translate-y-2 transition-transform duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <section.sectionIcon
                      className={`w-12 h-12 mb-4 text-${section.color}-600 dark:text-${section.color}-300`}
                    />
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      {t(`projects.ticProject.sections.${section.id}.title`)}
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {(
                        t(
                          `projects.ticProject.sections.${section.id}.content`,
                          { returnObjects: true }
                        ) as string[]
                      ).map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={project.images}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
        title={
          project.images[currentImageIndex]
            ? t(
                `projects.ticProject.images.${project.images[currentImageIndex].id}`
              )
            : ""
        }
      />
    </div>
  );
};
