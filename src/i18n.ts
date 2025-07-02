import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        projects: "Pastillero",
        about: "Nosotros",
        contact: "Contacto",
      },
      hero: {
        title: "Pastillero Inteligente Rotatorio",
        subtitle: "Revolucionando la adherencia terapéutica con tecnología IoT y telemedicina",
        cta: "Conocer Solución",
      },
      home: {
        motto: "Transformando la salud con tecnología accesible",
        whoWeAre: {
          title: "¿Quiénes Somos?",
          content: "TICnológicos es un equipo de 4 estudiantes especializados en soluciones tecnológicas para el sector salud, enfocados en mejorar la adherencia terapéutica mediante dispositivos IoT innovadores.",
        },
        whatWeDo: {
          title: "¿Qué Hacemos?",
          content: "Desarrollamos el Pastillero Inteligente Rotatorio, un dispositivo IoT que automatiza la dispensación de medicamentos y se conecta con plataformas de telemedicina para monitoreo remoto.",
        },
        whyChooseUs: {
          title: "¿Por Qué Elegirnos?",
          content: "Nuestra solución combina tecnología accesible, diseño centrado en el usuario y conectividad IoT para crear un sistema integral de gestión de medicamentos que mejora la calidad de vida.",
        },
        methodology: {
          title: "Nuestra Metodología de Desarrollo",
          description: "Utilizamos metodologías ágiles para el desarrollo del pastillero inteligente",
        },
        technologies: {
          title: "Tecnologías del Pastillero",
          description: "Stack tecnológico utilizado en nuestro dispositivo IoT",
        },
        testimonials: {
          title: "Lo que dicen sobre nuestro pastillero",
        },
        cta: {
          title: "¿Listo para mejorar la adherencia terapéutica?",
          description: "Descubre cómo nuestro pastillero inteligente puede transformar el cuidado de la salud",
          button: "Contactar Ahora",
        },
      },
      aboutHome: {
        title: "Innovación en Telemedicina",
        description: "Nuestro pastillero inteligente representa el futuro de la gestión de medicamentos",
        innovation: {
          title: "Innovación IoT",
          description: "Dispositivo conectado con sensores y automatización inteligente",
        },
        security: {
          title: "Seguridad",
          description: "Protocolos seguros para datos médicos sensibles",
        },
        focus: {
          title: "Centrado en el Usuario",
          description: "Diseño intuitivo para pacientes de todas las edades",
        },
        collaboration: {
          title: "Telemedicina",
          description: "Integración con plataformas médicas para monitoreo remoto",
        },
      },
      projects: {
        title: "Pastillero Inteligente Rotatorio",
        subtitle: "Nuestra solución tecnológica para la adherencia terapéutica",
        viewDetails: "Ver Detalles",
        ticProject: {
          title: "Pastillero Inteligente IoT",
          subtitle: "Sistema rotatorio automatizado con conectividad para telemedicina",
          sections: {
            introduction: {
              title: "Introducción",
              content: "El pastillero inteligente rotatorio es un dispositivo IoT diseñado para automatizar la dispensación de medicamentos, mejorando significativamente la adherencia terapéutica de los pacientes mediante tecnología accesible y conectividad con sistemas de telemedicina.",
            },
            justification: {
              title: "Justificación",
              content: "La falta de adherencia terapéutica causa 125,000 muertes anuales en EE.UU. y genera costos de $100 mil millones. Nuestro pastillero inteligente aborda este problema crítico mediante automatización, recordatorios y monitoreo remoto.",
            },
            objective: {
              title: "Objetivo Principal",
              content: "Desarrollar un pastillero inteligente rotatorio que mejore la adherencia terapéutica en un 85%, reduzca hospitalizaciones en 30% y facilite el monitoreo remoto de pacientes a través de telemedicina.",
            },
            systemDescription: {
              title: "Descripción del Sistema",
              content: "El pastillero inteligente rotatorio consta de compartimentos giratorios automatizados, sensores de detección, conectividad WiFi/Bluetooth, pantalla LCD, sistema de alertas sonoras y visuales, y aplicación móvil para pacientes y médicos.",
            },
            telemedicine: {
              title: "Integración con Telemedicina",
              content: "El dispositivo se conecta con plataformas de telemedicina para enviar datos en tiempo real sobre la toma de medicamentos, permitiendo a los profesionales de la salud monitorear remotamente a sus pacientes y ajustar tratamientos según sea necesario.",
            },
            problem: {
              title: "Problemática Identificada",
              content: "Los pacientes olvidan tomar medicamentos (40-60% de casos), tienen dificultades con horarios complejos, carecen de supervisión médica continua, y los sistemas actuales son costosos e inaccesibles para muchas personas.",
            },
            proposal: {
              title: "Propuesta de Solución",
              content: "Pastillero inteligente rotatorio con dispensación automatizada, recordatorios personalizables, monitoreo IoT en tiempo real, interfaz intuitiva, conectividad con telemedicina, y costo accesible para democratizar el acceso a tecnología médica.",
            },
            objectives: {
              title: "Objetivos Específicos",
              content: [
                "Mejorar adherencia terapéutica en 85% de los usuarios",
                "Reducir hospitalizaciones por medicación incorrecta en 30%",
                "Facilitar monitoreo remoto para 500+ pacientes simultáneamente",
                "Integrar con 10+ plataformas de telemedicina existentes",
                "Mantener costo accesible bajo $200 USD por dispositivo",
                "Lograr autonomía de batería de 30+ días",
                "Garantizar precisión de dispensación del 99.5%"
              ],
            },
            developmentModel: {
              title: "Modelo de Desarrollo",
              content: [
                "Metodología Ágil con Sprints de 2 semanas",
                "Prototipado rápido con Arduino y sensores",
                "Testing continuo con usuarios reales",
                "Integración continua de hardware y software",
                "Validación médica en cada iteración",
                "Feedback constante de profesionales de salud"
              ],
            },
            technical: {
              title: "Especificaciones Técnicas",
              content: "Microcontrolador ESP32, motor paso a paso para rotación, sensores de peso y proximidad, pantalla OLED, conectividad WiFi/Bluetooth 5.0, batería Li-ion recargable, carcasa antimicrobiana, y aplicación móvil multiplataforma.",
            },
            kanban: {
              title: "Gestión del Proyecto",
              content: [
                "Backlog: Investigación de mercado y requerimientos",
                "En Progreso: Desarrollo del prototipo funcional",
                "Testing: Pruebas de precisión y conectividad",
                "Completado: Diseño conceptual y validación inicial"
              ],
            },
            reflection: {
              title: "Reflexión del Proyecto",
              content: "El desarrollo del pastillero inteligente nos ha permitido comprender la importancia de la tecnología accesible en salud. Hemos aprendido que la innovación debe centrarse en resolver problemas reales, manteniendo la simplicidad y accesibilidad como pilares fundamentales.",
            },
            aiUsage: {
              title: "Uso de Inteligencia Artificial",
              content: "Implementamos IA para análisis predictivo de patrones de medicación, detección de anomalías en la adherencia, personalización de recordatorios, y optimización del algoritmo de dispensación basado en el comportamiento del usuario.",
            },
          },
          images: {
            conceptualMapSystem: "Mapa Conceptual del Sistema de Pastillero Inteligente",
            conceptualMapTelemedicine: "Integración con Telemedicina",
            conceptualMapTelemonitoreo: "Sistema de Telemonitoreo",
            conceptualMapPastillero: "Arquitectura del Pastillero Rotatorio",
            contextDiagram: "Diagrama de Contexto del Sistema",
            foda: "Análisis FODA del Proyecto",
            diagram_proptype: "Diagrama del Prototipo",
          },
        },
        financeApp: {
          title: "Módulo de Costos",
          subtitle: "Análisis económico del pastillero inteligente",
        },
        eduPlatform: {
          title: "Plataforma Educativa",
          subtitle: "Capacitación para uso del pastillero",
        },
        energyDashboard: {
          title: "Dashboard Energético",
          subtitle: "Monitoreo de consumo del dispositivo",
        },
      },
      about: {
        title: "Conoce a TICnológicos",
        subtitle: "El equipo detrás del pastillero inteligente rotatorio",
        stats: {
          projects: "Proyectos TIC",
          clients: "Usuarios Potenciales",
          team: "Integrantes",
          experience: "Años de Estudio",
        },
        extra: {
          global: {
            title: "Impacto Global",
            description: "Nuestro pastillero puede beneficiar a millones de pacientes worldwide",
          },
          innovation: {
            title: "Innovación Continua",
            description: "Mejoramos constantemente basados en feedback médico y de usuarios",
          },
          growth: {
            title: "Crecimiento Sostenible",
            description: "Escalabilidad del dispositivo para diferentes mercados y necesidades",
          },
        },
        members: {
          alexander: {
            description: "Especialista en diseño UX/UI del pastillero y interfaces de usuario intuitivas para pacientes de todas las edades.",
          },
          alejandro: {
            description: "Desarrollador Full Stack enfocado en la conectividad IoT del pastillero y integración con plataformas de telemedicina.",
          },
          leandro: {
            description: "Ingeniero de Backend responsable de la arquitectura de datos y sistemas de monitoreo remoto del pastillero.",
          },
          danie: {
            description: "Especialista en IA/ML para algoritmos predictivos de adherencia y optimización del sistema de dispensación.",
          },
        },
      },
      contact: {
        title: "Contacta con TICnológicos",
        subtitle: "¿Interesado en nuestro pastillero inteligente? ¡Hablemos!",
        form: {
          title: "Envíanos un mensaje",
          name: "Nombre completo",
          email: "Correo electrónico",
          message: "Mensaje",
          send: "Enviar Mensaje",
          sending: "Enviando...",
        },
        placeholder: {
          name: "Tu nombre completo",
          email: "tu@email.com",
          message: "Cuéntanos sobre tu interés en el pastillero inteligente...",
        },
        validation: {
          name: "El nombre debe tener al menos 2 caracteres",
          email: "Ingresa un email válido",
          message: "El mensaje debe tener al menos 10 caracteres",
        },
        feedback: {
          success: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
          error: "Error al enviar el mensaje. Inténtalo nuevamente.",
        },
        info: {
          title: "Información de Contacto",
          email: "Email",
          phone: "Teléfono",
          location: "Ubicación",
          address: "Jujuy, Argentina",
        },
        social: {
          title: "Síguenos",
        },
        hours: {
          title: "Horarios de Atención",
          weekdays: "Lunes - Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
          closed: "Cerrado",
          note: "Disponibles para consultas sobre el pastillero inteligente",
        },
      },
      footer: {
        description: "TICnológicos - Innovando en telemedicina con nuestro pastillero inteligente rotatorio para mejorar la adherencia terapéutica.",
        links: {
          title: "Enlaces",
        },
        contact: {
          title: "Contacto",
          location: "Jujuy, Argentina",
        },
        rights: "Todos los derechos reservados.",
      },
      floatingMenu: {
        theme: "Cambiar tema",
        sound: "Sonido",
        projects: "Pastillero",
        contact: "Contacto",
        language: "Idioma",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Smart Pill Dispenser",
        about: "About Us",
        contact: "Contact",
      },
      hero: {
        title: "Smart Rotary Pill Dispenser",
        subtitle: "Revolutionizing therapeutic adherence with IoT technology and telemedicine",
        cta: "Discover Solution",
      },
      home: {
        motto: "Transforming healthcare with accessible technology",
        whoWeAre: {
          title: "Who We Are?",
          content: "TICnológicos is a team of 4 students specialized in technological solutions for the health sector, focused on improving therapeutic adherence through innovative IoT devices.",
        },
        whatWeDo: {
          title: "What We Do?",
          content: "We develop the Smart Rotary Pill Dispenser, an IoT device that automates medication dispensing and connects with telemedicine platforms for remote monitoring.",
        },
        whyChooseUs: {
          title: "Why Choose Us?",
          content: "Our solution combines accessible technology, user-centered design, and IoT connectivity to create a comprehensive medication management system that improves quality of life.",
        },
        methodology: {
          title: "Our Development Methodology",
          description: "We use agile methodologies for smart pill dispenser development",
        },
        technologies: {
          title: "Pill Dispenser Technologies",
          description: "Technology stack used in our IoT device",
        },
        testimonials: {
          title: "What they say about our pill dispenser",
        },
        cta: {
          title: "Ready to improve therapeutic adherence?",
          description: "Discover how our smart pill dispenser can transform healthcare",
          button: "Contact Now",
        },
      },
      aboutHome: {
        title: "Innovation in Telemedicine",
        description: "Our smart pill dispenser represents the future of medication management",
        innovation: {
          title: "IoT Innovation",
          description: "Connected device with sensors and intelligent automation",
        },
        security: {
          title: "Security",
          description: "Secure protocols for sensitive medical data",
        },
        focus: {
          title: "User-Centered",
          description: "Intuitive design for patients of all ages",
        },
        collaboration: {
          title: "Telemedicine",
          description: "Integration with medical platforms for remote monitoring",
        },
      },
      projects: {
        title: "Smart Rotary Pill Dispenser",
        subtitle: "Our technological solution for therapeutic adherence",
        viewDetails: "View Details",
        ticProject: {
          title: "Smart IoT Pill Dispenser",
          subtitle: "Automated rotary system with telemedicine connectivity",
          sections: {
            introduction: {
              title: "Introduction",
              content: "The smart rotary pill dispenser is an IoT device designed to automate medication dispensing, significantly improving patient therapeutic adherence through accessible technology and connectivity with telemedicine systems.",
            },
            justification: {
              title: "Justification",
              content: "Lack of therapeutic adherence causes 125,000 annual deaths in the US and generates costs of $100 billion. Our smart pill dispenser addresses this critical problem through automation, reminders, and remote monitoring.",
            },
            objective: {
              title: "Main Objective",
              content: "Develop a smart rotary pill dispenser that improves therapeutic adherence by 85%, reduces hospitalizations by 30%, and facilitates remote patient monitoring through telemedicine.",
            },
            systemDescription: {
              title: "System Description",
              content: "The smart rotary pill dispenser consists of automated rotating compartments, detection sensors, WiFi/Bluetooth connectivity, LCD display, sound and visual alert system, and mobile application for patients and doctors.",
            },
            telemedicine: {
              title: "Telemedicine Integration",
              content: "The device connects with telemedicine platforms to send real-time data about medication intake, allowing healthcare professionals to remotely monitor their patients and adjust treatments as needed.",
            },
            problem: {
              title: "Identified Problem",
              content: "Patients forget to take medications (40-60% of cases), have difficulties with complex schedules, lack continuous medical supervision, and current systems are expensive and inaccessible to many people.",
            },
            proposal: {
              title: "Solution Proposal",
              content: "Smart rotary pill dispenser with automated dispensing, customizable reminders, real-time IoT monitoring, intuitive interface, telemedicine connectivity, and affordable cost to democratize access to medical technology.",
            },
            objectives: {
              title: "Specific Objectives",
              content: [
                "Improve therapeutic adherence in 85% of users",
                "Reduce hospitalizations due to incorrect medication by 30%",
                "Facilitate remote monitoring for 500+ patients simultaneously",
                "Integrate with 10+ existing telemedicine platforms",
                "Maintain affordable cost under $200 USD per device",
                "Achieve battery autonomy of 30+ days",
                "Guarantee dispensing accuracy of 99.5%"
              ],
            },
            developmentModel: {
              title: "Development Model",
              content: [
                "Agile Methodology with 2-week Sprints",
                "Rapid prototyping with Arduino and sensors",
                "Continuous testing with real users",
                "Continuous integration of hardware and software",
                "Medical validation in each iteration",
                "Constant feedback from health professionals"
              ],
            },
            technical: {
              title: "Technical Specifications",
              content: "ESP32 microcontroller, stepper motor for rotation, weight and proximity sensors, OLED display, WiFi/Bluetooth 5.0 connectivity, rechargeable Li-ion battery, antimicrobial casing, and cross-platform mobile application.",
            },
            kanban: {
              title: "Project Management",
              content: [
                "Backlog: Market research and requirements",
                "In Progress: Functional prototype development",
                "Testing: Accuracy and connectivity tests",
                "Completed: Conceptual design and initial validation"
              ],
            },
            reflection: {
              title: "Project Reflection",
              content: "Developing the smart pill dispenser has allowed us to understand the importance of accessible technology in healthcare. We have learned that innovation should focus on solving real problems, maintaining simplicity and accessibility as fundamental pillars.",
            },
            aiUsage: {
              title: "Artificial Intelligence Usage",
              content: "We implement AI for predictive analysis of medication patterns, anomaly detection in adherence, reminder personalization, and optimization of the dispensing algorithm based on user behavior.",
            },
          },
          images: {
            conceptualMapSystem: "Smart Pill Dispenser System Conceptual Map",
            conceptualMapTelemedicine: "Telemedicine Integration",
            conceptualMapTelemonitoreo: "Telemonitoring System",
            conceptualMapPastillero: "Rotary Pill Dispenser Architecture",
            contextDiagram: "System Context Diagram",
            foda: "Project SWOT Analysis",
            diagram_proptype: "Prototype Diagram",
          },
        },
        financeApp: {
          title: "Cost Module",
          subtitle: "Economic analysis of the smart pill dispenser",
        },
        eduPlatform: {
          title: "Educational Platform",
          subtitle: "Training for pill dispenser usage",
        },
        energyDashboard: {
          title: "Energy Dashboard",
          subtitle: "Device consumption monitoring",
        },
      },
      about: {
        title: "Meet TICnológicos",
        subtitle: "The team behind the smart rotary pill dispenser",
        stats: {
          projects: "ICT Projects",
          clients: "Potential Users",
          team: "Members",
          experience: "Years of Study",
        },
        extra: {
          global: {
            title: "Global Impact",
            description: "Our pill dispenser can benefit millions of patients worldwide",
          },
          innovation: {
            title: "Continuous Innovation",
            description: "We constantly improve based on medical and user feedback",
          },
          growth: {
            title: "Sustainable Growth",
            description: "Device scalability for different markets and needs",
          },
        },
        members: {
          alexander: {
            description: "UX/UI design specialist for the pill dispenser and intuitive user interfaces for patients of all ages.",
          },
          alejandro: {
            description: "Full Stack developer focused on IoT connectivity of the pill dispenser and integration with telemedicine platforms.",
          },
          leandro: {
            description: "Backend engineer responsible for data architecture and remote monitoring systems of the pill dispenser.",
          },
          danie: {
            description: "AI/ML specialist for predictive adherence algorithms and dispensing system optimization.",
          },
        },
      },
      contact: {
        title: "Contact TICnológicos",
        subtitle: "Interested in our smart pill dispenser? Let's talk!",
        form: {
          title: "Send us a message",
          name: "Full name",
          email: "Email address",
          message: "Message",
          send: "Send Message",
          sending: "Sending...",
        },
        placeholder: {
          name: "Your full name",
          email: "your@email.com",
          message: "Tell us about your interest in the smart pill dispenser...",
        },
        validation: {
          name: "Name must be at least 2 characters",
          email: "Enter a valid email",
          message: "Message must be at least 10 characters",
        },
        feedback: {
          success: "Message sent successfully! We'll contact you soon.",
          error: "Error sending message. Please try again.",
        },
        info: {
          title: "Contact Information",
          email: "Email",
          phone: "Phone",
          location: "Location",
          address: "Jujuy, Argentina",
        },
        social: {
          title: "Follow Us",
        },
        hours: {
          title: "Business Hours",
          weekdays: "Monday - Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "Closed",
          note: "Available for smart pill dispenser consultations",
        },
      },
      footer: {
        description: "TICnológicos - Innovating in telemedicine with our smart rotary pill dispenser to improve therapeutic adherence.",
        links: {
          title: "Links",
        },
        contact: {
          title: "Contact",
          location: "Jujuy, Argentina",
        },
        rights: "All rights reserved.",
      },
      floatingMenu: {
        theme: "Toggle theme",
        sound: "Sound",
        projects: "Pill Dispenser",
        contact: "Contact",
        language: "Language",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;