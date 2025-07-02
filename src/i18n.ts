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
      footer: {
        description:
          "Building the future through innovative technology solutions. We transform ideas into digital experiences that drive business growth.",
        links: {
          title: "Quick Links",
        },
        contact: {
          title: "Contact Info",
          location: "San Salvador de Jujuy, Jujuy - Argentina",
        },
        rights: "All rights reserved.",
      },
      projects: {
        title: "Our Projects",
        subtitle: "Innovative solutions we've built for our clients",
        ticProject: {
          title: "Smart Health System",
          subtitle: "Revolutionizing Healthcare with Telemedicine and IoT",
          sections: {
            introduction: {
              title: "Case Introduction",
              content:
                "This project explores Telemedicine in primary care, integrating IoT devices such as smart pill dispensers. It aims to improve care in remote and underserved areas, using technology to close access gaps.",
            },
            justification: {
              title: "Why Telemedicine?",
              content:
                "Telemedicine enables virtual consultations, digital prescriptions, and remote monitoring in remote regions. It’s ideal for applying ICT concepts, combining advanced technology with user-centered design.",
            },
            objective: {
              title: "Project Objective",
              content:
                "To analyze the role of ICT in public health through Telemedicine, focusing on the challenges of the smart pill dispenser. We propose improvements to optimize system efficiency.",
            },
            systemDescription: {
              title: "Health System Description",
              content: `The provincial healthcare system is an open system composed of hospitals, health centers, and clinics providing services such as primary care, emergencies, diagnostics, treatments, rehabilitation, and follow-up.\n
      Inputs: patient demands, human and technological resources.\n
      Processes: medical care, diagnostics, treatment prescriptions.\n
      Outputs: health improvements, patient discharge, continuity of care.\n
      Feedback: health statistics, performance indicators, and evaluations enable continuous adjustments.\n`,
            },
            telemedicine: {
              title: "Telemedicine Subsystem",
              content: `A solution based on information and communication technologies that enables remote medical care through secure digital platforms.\n
        This subsystem is a concrete implementation of ICT, allowing process digitization and expanding the reach of healthcare services.\n
        Reduces geographic and digital gaps in healthcare.\n
        Its goal is to bring medical care closer to people who cannot easily access health centers.`,
            },
            conceptualMap: {
              title: "Conceptual Map",
              content:
                "Visual representation of the health system, showing the integration of Telemedicine with hospitals, clinics, and IoT devices.",
            },
            problem: {
              title: "Identified Problem",
              content: `---- Limitations in the effectiveness of the smart pill dispenser within the Telemedicine subsystem of the public healthcare system ---- \n
      In the provincial public health system, Telemedicine incorporates the smart pill dispenser to improve adherence to treatment for chronic patients. However, its effectiveness is limited by disconnection from the digital health record, lack of technological appropriation by older and rural users, ineffective alerts, lack of clear clinical protocols, and connectivity issues.\n
      These failures, explained from a sociotechnical approach that includes people, processes, and culture, affect both patients and medical staff, compromising continuous control.\n
      A redesign and reintegration are required to achieve an inclusive and functional system.`,
            },
            contextDiagram: {
              title: "Context Diagram",
              content:
                "Shows interactions between Telemedicine, healthcare providers, patients, and external systems such as pharmacies, highlighting data flows and system boundaries.",
            },
            foda: {
              title: "SWOT Analysis",
              content:
                "Analyzes strengths (remote access), weaknesses (connectivity), opportunities (scalability), and threats (digital divide) of the Telemedicine subsystem.",
            },
            proposal: {
              title: "IT Proposal",
              content: `We propose a comprehensive redesign of the smart pill dispenser to overcome current limitations, such as disconnection from medical systems and lack of technological appropriation.\n
      The device will act as a subsystem integrated into Telemedicine, following principles of functional cohesion and modularity.\n
      Control mechanisms will detect non-compliance and trigger automatic, tiered responses: first notifying the patient, then a caregiver, and finally the doctor.\n
      The interface will be simplified and personalized to facilitate use, especially for older adults and people with low digital literacy. \n
      Automatic and secure synchronization with the Digital Health Record will be ensured, with alerts in case of technical issues.\n
      This design seeks to improve therapeutic adherence, automate communication, and close the digital divide, achieving a more inclusive and effective system that strengthens continuity of care for chronic patients.`,
            },
            objectives: {
              title: "Specific Objectives",
              content: `Simplified and accessible interface for all age groups\n
                Daily automatic synchronization with health records\n
                Tiered alert system for treatment non-compliance\n
                Improve therapeutic adherence through user-centered design\n
                Reduce hospital visits by 20% through remote monitoring\n
              `,
            },
            technical: {
              title: "Technical Components",
              content: `IoT pill dispensers with sensors, Arduino, and LED alerts\nMobile app for programming, alerts, and real-time monitoring\nCloud database with TCP/IP, Bluetooth/WiFi for secure transfer\nAI integration for predictive analysis of non-compliance risks\nScalable infrastructure for 1M users with 99.9% uptime`,
            },
            reflection: {
              title: "Scalability",
              content: `The smart pill dispenser is designed to grow and adapt to future needs of the healthcare system. Its modular architecture allows the addition of new features and connections with more devices without affecting performance.\n
      Automatic and secure synchronization enables efficient real-time data management, even in areas with limited connectivity.\n
      The adaptable interface ensures that users of different profiles can use it effectively, reducing the digital divide.\n
      The system can also integrate more complex clinical protocols and generate personalized alerts, strengthening therapeutic monitoring. \n
      This ensures continuous improvement, expanding its reach and effectiveness while maintaining quality in long-term care.`,
            },
            aiUsage: {
              title: "Use of Generative AI",
              content: `In our work, we used various generative AI tools such as:\n  ChatGPT\n Copilot\n Grok\n Gemini\n Canva\n
      AI helped us understand complex concepts and speed up content creation, helping us overcome creative blocks.\n
      It improved work quality by providing clear examples and allowing us to compare different versions to choose the best expression.\n
      AI was a complementary tool, never a replacement.\n
      We always cross-checked its input with our notes and personal understanding.\n
      We believe real learning happens by understanding, reflecting, and making decisions with our own judgment, maintaining a critical view of these technologies.`,
            },
            developmentModel: {
              title: "Development Model",
              content: [
                "The development model guides the planning, execution, and control of the project, structuring its progress.",
                "We considered three models: waterfall, iterative, and agile.",
                "The waterfall model follows sequential and well-documented phases but is rigid in the face of change. The iterative model progresses through prototypes, allowing early adjustments but requiring constant monitoring.",
                "We chose the agile model because it divides the work into short cycles, facilitating task prioritization and assignment. It enables collaborative and autonomous work, with open communication for constant feedback from peers and instructors",
                "This promotes adaptability and continuous improvement, aligning with open system principles such as self-regulation and flexibility. This way, we can adjust the project without major issues and progress efficiently",
              ],
            },

            flowchart: {
              title: "Flowchart",
              content:
                "Details the process flow of the redesigned pill dispenser system, from medication scheduling to alert escalation and data integration.",
            },
            kanban: {
              title: "Project Management",
              content: [
                "We used Trello and the Kanban methodology to manage the project, organizing tasks into columns: To Do, Doing, Testing/Review, and Done.",
                "Initially, we had trouble breaking down complex topics into concrete tasks, such as ICT theoretical integration or the development model.",
                "We resolved this through virtual meetings and chats where we discussed and refined task organization, and used labels for assignees and deadlines.",
                "Kanban helped us visualize progress, identify bottlenecks, and distribute responsibilities clearly.",
                "The Testing/Review phase was essential for peer validation, ensuring quality.",
                "Although we adjusted the process along the way, this method improved our organization and group collaboration.",
              ],
            },
          },
          images: {
            conceptualMapSystem: "Conceptual Map System",
            conceptualMapTelemedicine: "Conceptual Map Telemedicine",
            conceptualMapTelemonitoreo: "Conceptual Map Telemonitor",
            conceptualMapPastillero: "Conceptual Map Pastillero",
            contextDiagram: "Context Diagram",
            foda: "SWOT Analysis",
            diagram_proptype: "Diagram/Prototype",
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
        stats: {
          projects: "Projects Completed",
          clients: "Happy Clients",
          team: "Team Members",
          experience: "Years of Experience",
        },
        extra: {
          global: {
            title: "Global Reach",
            description: "We operate with clients from all over the world.",
          },
          innovation: {
            title: "Innovation First",
            description:
              "We apply creative thinking to solve technical challenges.",
          },
          growth: {
            title: "Scalable Solutions",
            description:
              "Our projects are designed to grow with your business.",
          },
        },
        members: {
          alexander: {
            description:
              "Specialist in clean interfaces and responsive layouts.",
          },
          alejandro: {
            description:
              "Creates full-stack applications with modern technologies.",
          },
          leandro: {
            description: "Handles backend logic and data architecture.",
          },
          daniel: {
            description: "Builds intelligent systems and AI-powered tools.",
          },
        },
      },
      aboutHome: {
        title: "What Makes Us Different",
        description:
          "We stand out by combining technical excellence with human-centric values.",
        innovation: {
          title: "Innovation",
          description: "Pioneering new technologies and unique solutions.",
        },
        security: {
          title: "Security",
          description: "Protecting data and ensuring platform stability.",
        },
        focus: {
          title: "Focus",
          description: "We prioritize clarity, efficiency, and client goals.",
        },
        collaboration: {
          title: "Collaboration",
          description: "Strong teamwork for stronger results.",
        },
      },
      contact: {
        title: "Contact Us",
        subtitle: "We’d love to hear from you. Let’s talk about your project!",
        form: {
          title: "Send us a message",
          name: "Full Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
          sending: "Sending...",
        },
        placeholder: {
          name: "Your full name",
          email: "your.email@example.com",
          message: "Tell us about your project...",
        },
        validation: {
          name: "Name must be at least 2 characters",
          email: "Please enter a valid email",
          message: "Message must be at least 10 characters",
        },
        feedback: {
          success: "Message sent successfully! We'll get back to you soon.",
          error: "Failed to send message. Please try again.",
        },
        info: {
          title: "Get in touch",
          email: "Email",
          phone: "Phone",
          location: "Location",
          address: "San Salvador de Jujuy, Jujuy - Argentina",
        },
        social: {
          title: "Follow us",
        },
        hours: {
          title: "Office Hours",
          weekdays: "Monday - Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "Closed",
          note: "We typically respond to messages within 24 hours during business days.",
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

      footer: {
        description:
          "Construyendo el futuro mediante soluciones tecnológicas innovadoras. Transformamos ideas en experiencias digitales que impulsan el crecimiento empresarial.",
        links: {
          title: "Enlaces Rápidos",
        },
        contact: {
          title: "Información de Contacto",
          location: "San Salvador de Jujuy, Jujuy - Argentina",
        },
        rights: "Todos los derechos reservados.",
      },
      projects: {
        title: "Nuestros Proyectos",
        subtitle:
          "Soluciones innovadoras que hemos construido para nuestros clientes",
        ticProject: {
          title: "Sistema de Salud Inteligente",
          subtitle: "Revolucionando la Salud con Telemedicina e IoT",
          sections: {
            introduction: {
              title: "Introducción al Caso",
              content:
                "Este proyecto explora la Telemedicina en la atención primaria, integrando dispositivos IoT como pastilleros inteligentes. Busca mejorar la atención en áreas remotas y desatendidas, utilizando tecnología para cerrar brechas de acceso.",
            },
            justification: {
              title: "¿Por qué Telemedicina?",
              content:
                "La Telemedicina permite consultas virtuales, recetas digitales y monitoreo remoto en regiones remotas. Es ideal para aplicar conceptos de TIC, combinando tecnología avanzada con diseño centrado en el usuario.",
            },
            objective: {
              title: "Objetivo del Proyecto",
              content:
                "Analizar el rol de las TIC en la salud pública a través de la Telemedicina, enfocándose en los desafíos del pastillero inteligente. Proponemos mejoras para optimizar la eficiencia del sistema.",
            },
            systemDescription: {
              title: "Descripción del Sistema de Salud",
              content: `El sistema sanitario provincial es un sistema abierto compuesto por hospitales, centros de salud, y clínicas que prestan servicios como atención primaria, emergencias, diagnósticos, tratamientos, rehabilitación, y seguimiento.\n
              Entradas: demandas de pacientes, recursos humanos y tecnológicos.\n
              Procesos: atención médica, diagnósticos, prescripción de tratamientos.\n 
              Salidas: mejoras en la salud, alta de pacientes, continuidad de cuidado. \n
              Retroalimentación: estadísticas de salud, indicadores de desempeño, y evaluaciones permiten ajustes continuos. \n`,
            },
            telemedicine: {
              title: "Subsistema de Telemedicina",
              content: `Solución basada en tecnologías de la información y la comunicación que permite brindar atención médica a distancia, mediante plataformas digitales seguras. \n
                Este subsistema representa una implementación concreta de las TIC,permitiendo la digitalización de procesos y ampliando el alcance de los servicios sanitarios.\n
                Reducción de la brecha geográfica y digital en salud. \n
                Su objetivo es acercar la atención médica a personas que no pueden acceder fácilmente a centros de salud.`,
            },
            conceptualMap: {
              title: "Mapa Conceptual",
              content:
                "Representación visual del sistema de salud, mostrando la integración de la Telemedicina con hospitales, clínicas y dispositivos IoT.",
            },
            problem: {
              title: "Problema Identificado",
              content: `---- Limitaciones en la efectividad del uso del pastillero electrónico en el subsistema de Telemedicina del sistema sanitario público ---- 
              \n
              En el sistema de salud público provincial, la Telemedicina incorpora el pastillero electrónico para mejorar la adherencia al tratamiento de pacientes crónicos. Sin embargo, su efectividad se ve limitada por la desconexión con la historia clínica digital, falta de apropiación tecnológica en usuarios mayores y rurales, alertas poco efectivas, ausencia de protocolos clínicos claros y problemas de conectividad.\n Estas fallas, explicadas desde un enfoque sociotécnico que incluye personas, procesos y cultura, afectan tanto a pacientes como al equipo médico, comprometiendo el control continuo. \nSe requiere replantear su diseño e integración para lograr un sistema inclusivo y funcional.`,
            },
            contextDiagram: {
              title: "Diagrama de Contexto",
              content:
                "Muestra las interacciones entre la Telemedicina, proveedores de salud, pacientes y sistemas externos como farmacias, destacando flujos de datos y límites del sistema.",
            },
            foda: {
              title: "Análisis FODA",
              content:
                "Analiza fortalezas (acceso remoto), debilidades (conectividad), oportunidades (escalabilidad) y amenazas (brecha digital) del subsistema de Telemedicina.",
            },
            proposal: {
              title: "Propuesta Informática",
              content: `Proponemos un rediseño integral del pastillero electrónico para superar sus limitaciones actuales, como la desconexión con sistemas médicos y la falta de apropiación tecnológica.\nEl dispositivo será un subsistema integrado a Telemedicina, siguiendo principios de cohesión funcional y modularidad.\n 
              Se implementarán mecanismos de control que detecten incumplimientos y activen respuestas automáticas escalonadas: primero al paciente, luego a un cuidador y finalmente al médico.\nLa interfaz se simplificará y personalizará para facilitar su uso, especialmente en adultos mayores y personas con baja alfabetización digital. Además, se garantizará la sincronización automática y segura con la Historia Clínica Digital, con alertas en caso de fallos técnicos. \n
              Este diseño busca mejorar la adherencia terapéutica, automatizar la comunicación y cerrar la brecha digital, logrando un sistema más inclusivo y efectivo que fortalezca la continuidad del cuidado en pacientes crónicos.`,
            },

            objectives: {
              title: "Objetivos Específicos",
              content: `Interfaz simplificada y accesible para todas las edades\nSincronización automática diaria con los registros de salud\nSistema de alertas escalonado para incumplimiento del tratamiento\nMejorar la adherencia terapéutica mediante un diseño centrado en el usuario\nReducir en un 20% las visitas hospitalarias mediante monitoreo remoto`,
            },
            technical: {
              title: "Componentes Técnicos",
              content: `Pastilleros electrónicos IoT con sensores, Arduino y alertas LED\nAplicación móvil para programación, alertas y monitoreo en tiempo real\nBase de datos en la nube con TCP/IP, Bluetooth/WiFi para transferencia segura\nIntegración de IA para análisis predictivo de riesgos de incumplimiento\nInfraestructura escalable para 1 millón de usuarios con 99.9% de disponibilidad`,
            },
            reflection: {
              title: "Escalabilidad",
              content: `El pastillero electrónico está diseñado para crecer y adaptarse a las necesidades futuras del sistema de salud. Su arquitectura modular permite agregar nuevas funciones y conectar más dispositivos sin afectar su rendimiento. \nLa sincronización automática y segura facilita la gestión de grandes volúmenes de datos en tiempo real, incluso en entornos con conectividad limitada. La interfaz adaptable garantiza que distintos perfiles de usuarios puedan utilizarlo efectivamente, reduciendo la brecha digital. \nAdemás, el sistema puede integrar protocolos clínicos más complejos y generar alertas personalizadas, fortaleciendo el seguimiento terapéutico. Así, se asegura una mejora continua que amplía su alcance y eficacia, manteniendo la calidad en la atención a largo plazo.`,
            },
            aiUsage: {
              title: "Uso de IA Generativa",
              content: `En nuestro trabajo utilizamos varias herramientas de IA generativa como: \n  ChatGPT \n Copilot \n Grok \n Gemini  \nCanva \n
              La IA facilitó la comprensión de conceptos complejos y aceleró la creación de contenido, ayudándonos a superar bloqueos creativos. \nMejoró la calidad del trabajo al ofrecer ejemplos claros y permitir comparar distintas versiones para elegir la mejor expresión. \n
             La IA fue una ayuda complementaria, nunca un reemplazo. \n
             Contrastamos sus aportes con nuestros apuntes y reflexión propia. \n
             Creemos que el aprendizaje real se da al entender, reflexionar y tomar decisiones con criterio propio, manteniendo una mirada crítica sobre estas tecnologías.`,
            },
            developmentModel: {
              title: "Modelo de Desarrollo",
              content: [
                "El modelo de desarrollo guía la planificación, ejecución y control del proyecto, estructurando su avance.",
                "Consideramos tres modelos: cascada, iterativo y ágil.",
                "El modelo en cascada sigue fases secuenciales y bien documentadas, pero es rígido frente a los cambios. El modelo iterativo avanza mediante prototipos, permitiendo ajustes tempranos, aunque requiere monitoreo constante.",
                "Elegimos el modelo ágil porque divide el trabajo en ciclos cortos, facilitando la priorización y asignación de tareas. Permite un trabajo colaborativo y autónomo, con comunicación abierta para recibir retroalimentación constante de compañeros y docentes.",
                "Esto favorece la adaptabilidad y la mejora continua, alineándose con principios de sistemas abiertos como la autorregulación y la flexibilidad. Así podemos ajustar el proyecto sin mayores inconvenientes y avanzar de forma eficiente.",
              ],
            },

            flowchart: {
              title: "Diagrama de Flujo",
              content:
                "Detalla el flujo del proceso del sistema rediseñado de pastillero, desde la programación de medicamentos hasta la escalación de alertas e integración de datos.",
            },
            kanban: {
              title: "Gestión del Proyecto",
              content: [
                "Usamos Trello y la metodología Kanban para gestionar el proyecto, organizando las tareas en columnas: Por Hacer, En Proceso, Pruebas/Revisión y Hecho.",
                "Al principio tuvimos dificultades para descomponer temas complejos en tareas concretas, como la integración teórica de las TIC o el modelo de desarrollo.",
                "Resolvimos esto mediante reuniones virtuales y chats en los que discutimos y refinamos la organización de tareas, y usamos etiquetas para asignaciones y fechas límite.",
                "Kanban nos ayudó a visualizar el progreso, identificar cuellos de botella y distribuir responsabilidades con claridad.",
                "La fase de Pruebas/Revisión fue esencial para la validación entre compañeros, asegurando la calidad.",
                "Aunque ajustamos el proceso en el camino, este método mejoró nuestra organización y colaboración grupal.",
              ],
            },
          },
          images: {
            conceptualMapSystem: "Mapa Conceptual del Sistema de Salud",
            conceptualMapTelemedicine:
              "Mapa Conceptual del Subsistema Telemedicina",
            conceptualMapTelemonitoreo: "Telemonitoreo",
            conceptualMapPastillero: "Pastillero",
            contextDiagram: "Diagrama de Contexto",
            foda: "Análisis FODA",
            diagram_proptype: "Diagrama de Flujo",
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
        stats: {
          projects: "Proyectos Completados",
          clients: "Clientes Satisfechos",
          team: "Miembros del Equipo",
          experience: "Años de Experiencia",
        },
        extra: {
          global: {
            title: "Alcance Global",
            description: "Trabajamos con clientes de todo el mundo.",
          },
          innovation: {
            title: "Innovación Primero",
            description: "Aplicamos pensamiento creativo a desafíos técnicos.",
          },
          growth: {
            title: "Soluciones Escalables",
            description: "Nuestros proyectos crecen junto a tu negocio.",
          },
        },
        members: {
          alexander: {
            description:
              "Especialista en interfaces limpias y diseños responsivos.",
          },
          alejandro: {
            description:
              "Crea aplicaciones full-stack con tecnologías modernas.",
          },
          leandro: {
            description: "Diseña la lógica backend y estructura de datos.",
          },
          daniel: { description: "Desarrolla sistemas inteligentes con IA." },
        },
      },
      aboutHome: {
        title: "Qué Nos Hace Diferentes",
        description:
          "Destacamos por combinar excelencia técnica con valores humanos.",
        innovation: {
          title: "Innovación",
          description: "Tecnologías pioneras y soluciones únicas.",
        },
        security: {
          title: "Seguridad",
          description: "Protección de datos y estabilidad de plataforma.",
        },
        focus: {
          title: "Enfoque",
          description:
            "Priorizamos claridad, eficiencia y objetivos del cliente.",
        },
        collaboration: {
          title: "Colaboración",
          description: "Trabajo en equipo para mejores resultados.",
        },
      },
      contact: {
        title: "Contáctanos",
        subtitle: "Nos encantaría saber de ti. ¡Hablemos de tu proyecto!",
        form: {
          title: "Envíanos un mensaje",
          name: "Nombre completo",
          email: "Correo electrónico",
          message: "Mensaje",
          send: "Enviar mensaje",
          sending: "Enviando...",
        },
        placeholder: {
          name: "Tu nombre completo",
          email: "tu.correo@ejemplo.com",
          message: "Cuéntanos sobre tu proyecto...",
        },
        validation: {
          name: "El nombre debe tener al menos 2 caracteres",
          email: "Por favor, ingresa un correo válido",
          message: "El mensaje debe tener al menos 10 caracteres",
        },
        feedback: {
          success:
            "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
          error: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
        },
        info: {
          title: "Ponte en contacto",
          email: "Correo",
          phone: "Teléfono",
          location: "Ubicación",
          address: "San Salvador de Jujuy, Jujuy - Argentina",
        },
        social: {
          title: "Síguenos",
        },
        hours: {
          title: "Horario de atención",
          weekdays: "Lunes a Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
          closed: "Cerrado",
          note: "Respondemos los mensajes dentro de las 24 horas hábiles.",
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
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});
