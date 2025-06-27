import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About Us",
        contact: "Contact",
      },
      hero: {
        title: "Innovation Through Technology",
        subtitle:
          "We transform ideas into digital solutions that drive your business forward",
        cta: "Discover Our Work",
      },
      home: {
        motto: "Building the Future, One Solution at a Time",
        whoWeAre: {
          title: "Who We Are",
          content:
            "We are a team of passionate developers and innovators dedicated to creating cutting-edge digital solutions that solve real-world problems.",
        },
        whatWeDo: {
          title: "What We Do",
          content:
            "We specialize in developing custom software, mobile applications, and web platforms that help businesses optimize their operations and reach their goals.",
        },
        whyChooseUs: {
          title: "Why Choose Us",
          content:
            "Our commitment to excellence, innovative approach, and deep understanding of technology trends make us the ideal partner for your digital transformation journey.",
        },
        methodology: {
          title: "Our Methodology",
          description:
            "We follow an agile Kanban approach to ensure efficient project delivery",
        },
        technologies: {
          title: "Technologies We Use",
          description: "Cutting-edge tools and frameworks for modern solutions",
        },
        testimonials: {
          title: "What Our Clients Say",
        },
        cta: {
          title: "Ready to Start Your Project?",
          description: "Let's work together to bring your vision to life",
          button: "Get in Touch",
        },
      },
      projects: {
        title: "Our Projects",
        subtitle: "Innovative solutions we've built for our clients",
        ticProject: {
          title: "ICT Health System",
          subtitle: "Innovating digital health",
          cards: {
            analysis: {
              title: "System Analysis",
              description:
                "Comprehensive analysis of the current healthcare system.",
              items: ["Patient safety", "Medical efficiency", "Cost reduction"],
            },
            telemedicine: {
              title: "Telemedicine",
              description: "Advanced platform for remote medical care.",
              items: [
                "Video calls",
                "Mobile monitoring",
                "Secure transmission",
              ],
            },
            pillbox: {
              title: "Smart Pill Dispenser",
              description: "IoT-enabled device for medication management.",
              items: ["Reminders", "Mobile app", "Emergency alerts"],
            },
            scalability: {
              title: "Scalability",
              description: "System prepared for millions of users.",
              items: ["99.9% uptime", "24/7 support"],
            },
          },
        },
        financeApp: {
          title: "Smart Finance App",
          subtitle: "Full control of your finances",
          cards: {
            expenses: {
              title: "Expense Tracking",
              description: "Monitor all your expenses in real time.",
              items: ["Charts", "Alerts", "Goals"],
            },
            savings: {
              title: "Smart Savings",
              description: "Optimize your savings with AI.",
              items: ["Categorization", "Interest", "Automatic analysis"],
            },
            goals: {
              title: "Financial Goals",
              description: "Define and achieve your saving targets.",
              items: ["Monthly goals", "Notifications", "Visual tracking"],
            },
          },
        },
        eduPlatform: {
          title: "Online Education Platform",
          subtitle: "Transforming distance learning",
          cards: {
            interactiveCourses: {
              title: "Interactive Courses",
              description: "Engaging content with real-time interaction.",
              items: ["Live classes", "Quizzes", "Student tracking"],
            },
            mobileLearning: {
              title: "Mobile Learning",
              description: "Access your courses from anywhere.",
              items: [
                "Responsive design",
                "Push notifications",
                "Offline mode",
              ],
            },
          },
        },
        energyDashboard: {
          title: "Renewable Energy Dashboard",
          subtitle: "Real-time data visualization",
          cards: {
            energyMonitoring: {
              title: "Energy Monitoring",
              description: "Track usage and production in real time.",
              items: ["Solar/Wind input", "Consumption reports", "Alerts"],
            },
            sustainabilityGoals: {
              title: "Sustainability Goals",
              description: "Set and track your green energy targets.",
              items: ["CO2 savings", "Efficiency metrics", "Monthly goals"],
            },
          },
        },
      },
      about: {
        title: "Meet Our Team",
        subtitle: "The talented individuals behind our success",
      },
      contact: {
        title: "Get in Touchs",
        subtitle: "Ready to start your next project? Let's talk!",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
        },
      },
      floatingMenu: {
        sound: "Toggle Sound",
        theme: "Toggle Theme",
        projects: "Projects",
        contact: "Contact",
        language: "Language",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        about: "Nosotros",
        contact: "Contacto",
      },
      hero: {
        title: "Innovación a Través de la Tecnología",
        subtitle:
          "Transformamos ideas en soluciones digitales que impulsan tu negocio hacia adelante",
        cta: "Descubre Nuestro Trabajo",
      },
      home: {
        motto: "Construyendo el Futuro, Una Solución a la Vez",
        whoWeAre: {
          title: "¿Quiénes Somos?",
          content:
            "Somos un equipo de desarrolladores e innovadores apasionados dedicados a crear soluciones digitales de vanguardia que resuelven problemas del mundo real.",
        },
        whatWeDo: {
          title: "¿Qué Hacemos?",
          content:
            "Nos especializamos en desarrollar software personalizado, aplicaciones móviles y plataformas web que ayudan a las empresas a optimizar sus operaciones y alcanzar sus objetivos.",
        },
        whyChooseUs: {
          title: "¿Por Qué Elegirnos?",
          content:
            "Nuestro compromiso con la excelencia, enfoque innovador y profundo entendimiento de las tendencias tecnológicas nos convierten en el socio ideal para tu viaje de transformación digital.",
        },
        methodology: {
          title: "Nuestra Metodología",
          description:
            "Seguimos un enfoque ágil Kanban para asegurar una entrega eficiente del proyecto",
        },
        technologies: {
          title: "Tecnologías que Usamos",
          description:
            "Herramientas y frameworks de vanguardia para soluciones modernas",
        },
        testimonials: {
          title: "Lo que Dicen Nuestros Clientes",
        },
        cta: {
          title: "¿Listo para Comenzar tu Proyecto?",
          description: "Trabajemos juntos para dar vida a tu visión",
          button: "Ponte en Contacto",
        },
      },
      projects: {
        title: "Nuestros Proyectos",
        subtitle:
          "Soluciones innovadoras que hemos construido para nuestros clientes",
        ticProject: {
          title: "Sistema de Salud Inteligente",
          subtitle: "Innovando la salud digital",
          cards: {
            analysis: {
              title: "Análisis del Sistema",
              description: "Análisis integral del sistema de salud actual.",
              items: [
                "Seguridad del paciente",
                "Eficiencia médica",
                "Reducción de costos",
              ],
            },
            telemedicine: {
              title: "Telemedicina",
              description: "Plataforma avanzada para atención remota.",
              items: ["Videollamadas", "Monitoreo móvil", "Transmisión segura"],
            },
            pillbox: {
              title: "Pastillero Inteligente",
              description: "Dispensador IoT para manejo de medicación.",
              items: ["Recordatorios", "App móvil", "Alertas de emergencia"],
            },
            scalability: {
              title: "Escalabilidad",
              description: "Sistema preparado para millones de usuarios.",
              items: ["99.9% uptime", "Soporte 24/7"],
            },
          },
        },
        financeApp: {
          title: "App de Finanzas Inteligente",
          subtitle: "Control total de tus finanzas",
          cards: {
            expenses: {
              title: "Control de Gastos",
              description: "Monitorea todos tus gastos en tiempo real.",
              items: ["Gráficos", "Alertas", "Metas"],
            },
            savings: {
              title: "Ahorros Inteligentes",
              description: "Optimiza tus ahorros con IA.",
              items: ["Categorización", "Intereses", "Análisis automático"],
            },
            goals: {
              title: "Objetivos Financieros",
              description: "Define y alcanza tus metas de ahorro.",
              items: [
                "Objetivos mensuales",
                "Notificaciones",
                "Seguimiento visual",
              ],
            },
          },
        },
        eduPlatform: {
          title: "Plataforma de Educación Online",
          subtitle: "Transformando el aprendizaje a distancia",
          cards: {
            interactiveCourses: {
              title: "Cursos Interactivos",
              description:
                "Contenido atractivo con interacción en tiempo real.",
              items: [
                "Clases en vivo",
                "Cuestionarios",
                "Seguimiento de estudiantes",
              ],
            },
            mobileLearning: {
              title: "Aprendizaje Móvil",
              description: "Accede a tus cursos desde cualquier lugar.",
              items: [
                "Diseño responsivo",
                "Notificaciones push",
                "Modo offline",
              ],
            },
          },
        },
        energyDashboard: {
          title: "Panel de Energía Renovable",
          subtitle: "Visualización de datos en tiempo real",
          cards: {
            energyMonitoring: {
              title: "Monitoreo de Energía",
              description: "Seguimiento del uso y producción en tiempo real.",
              items: ["Entrada solar/eólica", "Reportes de consumo", "Alertas"],
            },
            sustainabilityGoals: {
              title: "Metas de Sostenibilidad",
              description: "Establece y monitorea tus objetivos verdes.",
              items: [
                "Ahorro de CO2",
                "Métricas de eficiencia",
                "Metas mensuales",
              ],
            },
          },
        },
      },
      about: {
        title: "Conoce Nuestro Equipo",
        subtitle: "Las personas talentosas detrás de nuestro éxito",
      },
      contact: {
        title: "Ponte en Contacto",
        subtitle: "¿Listo para comenzar tu próximo proyecto? ¡Hablemos!",
        form: {
          name: "Nombre",
          email: "Correo",
          message: "Mensaje",
          send: "Enviar Mensaje",
        },
      },
      floatingMenu: {
        sound: "Alternar Sonido",
        theme: "Alternar Tema",
        projects: "Proyectos",
        contact: "Contacto",
        language: "Idioma",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
