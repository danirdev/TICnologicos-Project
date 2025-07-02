import {
  Stethoscope,
  Pill,
  Globe,
  FileText,
  AlertTriangle,
  Cpu,
  Users,
  Cog,
  Zap,
  Shield,
  Smartphone,
  Wifi,
  Battery,
  Clock,
  Heart,
  Activity,
} from "lucide-react";

export interface ProjectSection {
  id: string;
  sectionIcon: any;
  color: string;
  isCard?: boolean;
}

export interface ProjectImage {
  id: string;
  placeholder: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  translationKey: string;
  sections: ProjectSection[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "ticProject",
    title: "Pastillero Inteligente Rotatorio",
    subtitle: "Dispositivo IoT para adherencia terapéutica con telemedicina",
    translationKey: "projects.ticProject",
    sections: [
      { id: "introduction", sectionIcon: Pill, color: "blue" },
      { id: "justification", sectionIcon: Heart, color: "red" },
      { id: "objective", sectionIcon: FileText, color: "purple" },
      { id: "systemDescription", sectionIcon: Cog, color: "blue" },
      { id: "telemedicine", sectionIcon: Wifi, color: "cyan" },
      { id: "conceptualMapSystem", sectionIcon: FileText, color: "indigo" },
      {
        id: "conceptualMapTelemedicine",
        sectionIcon: FileText,
        color: "indigo",
      },
      { id: "problem", sectionIcon: AlertTriangle, color: "red" },
      { id: "contextDiagram", sectionIcon: FileText, color: "teal" },
      { id: "foda", sectionIcon: FileText, color: "pink" },
      { id: "proposal", sectionIcon: Pill, color: "purple" },
      { id: "objectives", sectionIcon: FileText, color: "green" },
      { id: "developmentModel", sectionIcon: Cpu, color: "blue", isCard: true },
      { id: "technical", sectionIcon: Cpu, color: "teal" },
      { id: "diagram_proptype", sectionIcon: FileText, color: "orange" },
      { id: "kanban", sectionIcon: Users, color: "orange", isCard: true },
      {
        id: "reflection",
        sectionIcon: FileText,
        color: "indigo",
      },
      { id: "aiUsage", sectionIcon: Cpu, color: "pink" },
    ],
    images: [
      {
        id: "conceptualMapSystem",
        placeholder: "https://i.imgur.com/Uy2X1Ed.png",
      },
      {
        id: "conceptualMapTelemedicine",
        placeholder: "https://i.imgur.com/tSF7ZgM.png",
      },
      {
        id: "conceptualMapTelemonitoreo",
        placeholder: "https://i.imgur.com/Q8lTsX1.png",
      },
      {
        id: "conceptualMapPastillero",
        placeholder: "https://i.imgur.com/gZ6VdJc.png",
      },
      {
        id: "contextDiagram",
        placeholder: "https://i.imgur.com/u8UO61W.png",
      },
      {
        id: "foda",
        placeholder: "https://i.imgur.com/UBcW3JG.png",
      },
      {
        id: "diagram_proptype",
        placeholder: "",
      },
    ],
  },
  {
    id: "financeApp",
    title: "Análisis de Costos",
    subtitle: "Estudio económico del pastillero inteligente",
    translationKey: "projects.financeApp",
    sections: [],
    images: [],
  },
  {
    id: "eduPlatform",
    title: "Plataforma Educativa",
    subtitle: "Capacitación para usuarios del pastillero",
    translationKey: "projects.eduPlatform",
    sections: [],
    images: [],
  },
  {
    id: "energyDashboard",
    title: "Monitoreo Energético",
    subtitle: "Dashboard de consumo del dispositivo",
    translationKey: "projects.energyDashboard",
    sections: [],
    images: [],
  },
];