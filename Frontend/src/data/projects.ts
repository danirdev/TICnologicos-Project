import {
  Stethoscope,
  Pill,
  TrendingUp,
  Globe,
  Banknote,
  Shield,
  GraduationCap,
  MonitorSmartphone,
  BatteryCharging,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProjectCard {
  id: string; // ahora es string para coincidir con i18n keys
  title: string;
  description: string;
  icon: LucideIcon;
  items?: string[];
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  translationKey?: string;
  cards?: ProjectCard[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ICT Health System",
    subtitle: "Innovating digital health",
    translationKey: "projects.ticProject",
    cards: [
      {
        id: "analysis",
        title: "System Analysis",
        description:
          "Comprehensive analysis of the current healthcare system, identifying critical pain points.",
        icon: Stethoscope,
        items: ["Patient safety", "Medical efficiency", "Cost reduction"],
        color: "green",
      },
      {
        id: "telemedicine",
        title: "Telemedicine",
        description:
          "Advanced platform for remote medical attention and monitoring.",
        icon: Globe,
        items: ["Video calls", "Mobile monitoring", "Secure transmission"],
        color: "blue",
      },
      {
        id: "pillbox",
        title: "Smart Pill Dispenser",
        description: "IoT-enabled device for automated medication management.",
        icon: Pill,
        items: ["Reminders", "Mobile app", "Emergency alerts"],
        color: "purple",
      },
      {
        id: "scalability",
        title: "Scalability",
        description: "Cloud infrastructure ready to scale for millions.",
        icon: TrendingUp,
        items: ["99.9% uptime", "24/7 support"],
        color: "orange",
      },
    ],
  },
  {
    id: "2",
    title: "Smart Finance App",
    subtitle: "Full control of your finances",
    translationKey: "projects.financeApp",
    cards: [
      {
        id: "expenses",
        title: "Expense Tracking",
        description: "Visualize and analyze your spending habits.",
        icon: Banknote,
        items: ["Charts", "Spending alerts", "Goal setting"],
        color: "yellow",
      },
      {
        id: "savings",
        title: "Smart Savings",
        description: "Optimize your savings with AI.",
        icon: Shield,
        items: ["Custom categories", "Budget reminders", "Savings advice"],
        color: "lime",
      },
      {
        id: "goals",
        title: "Financial Goals",
        description: "Define and achieve your savings targets.",
        icon: GraduationCap,
        items: ["Monthly goals", "Notifications", "Visual tracking"],
        color: "cyan",
      },
    ],
  },
  {
    id: "3",
    title: "Online Education Platform",
    subtitle: "Transforming distance learning",
    translationKey: "projects.eduPlatform",
    cards: [
      {
        id: "interactiveCourses",
        title: "Interactive Courses",
        description: "Engaging content with real-time interaction.",
        icon: GraduationCap,
        items: ["Live classes", "Quizzes", "Student tracking"],
        color: "cyan",
      },
      {
        id: "mobileLearning",
        title: "Mobile Learning",
        description: "Access your courses from anywhere.",
        icon: MonitorSmartphone,
        items: ["Responsive design", "Push notifications", "Offline mode"],
        color: "teal",
      },
    ],
  },
  {
    id: "4",
    title: "Renewable Energy Dashboard",
    subtitle: "Real-time data visualization",
    translationKey: "projects.energyDashboard",
    cards: [
      {
        id: "energyMonitoring",
        title: "Energy Monitoring",
        description: "Track usage and production in real time.",
        icon: BatteryCharging,
        items: ["Solar/Wind input", "Consumption reports", "Alerts"],
        color: "emerald",
      },
      {
        id: "sustainabilityGoals",
        title: "Sustainability Goals",
        description: "Set and track your green energy targets.",
        icon: TrendingUp,
        items: ["CO2 savings", "Efficiency metrics", "Monthly goals"],
        color: "indigo",
      },
    ],
  },
];
