import {
  Stethoscope,
  Pill,
  Globe,
  FileText,
  AlertTriangle,
  Cpu,
  Users,
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
    title: "ICT Health System",
    subtitle: "Revolutionizing Healthcare with Telemedicine and IoT",
    translationKey: "projects.ticProject",
    sections: [
      { id: "introduction", sectionIcon: FileText, color: "blue" },
      { id: "justification", sectionIcon: Stethoscope, color: "green" },
      { id: "objective", sectionIcon: FileText, color: "purple" },
      { id: "systemDescription", sectionIcon: Globe, color: "blue" },
      { id: "telemedicine", sectionIcon: Globe, color: "cyan" },
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
];
