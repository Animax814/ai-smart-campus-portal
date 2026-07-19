import {
  BarChart3,
  Bot,
  Briefcase,
  CalendarCheck,
  FileText,
  GraduationCap,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react"

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Placements", href: "#placements" },
  { label: "AI Features", href: "#features" },
  { label: "Contact", href: "#contact" },
] as const

export const heroStats = [
  { value: 15000, suffix: "+", label: "Students Enrolled" },
  { value: 98, suffix: "%", label: "Placement Rate" },
  { value: 200, suffix: "+", label: "Recruiting Partners" },
  { value: 50, suffix: "+", label: "AI-Powered Tools" },
] as const

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "24/7 intelligent campus assistant for queries, schedules, and instant academic support.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance",
    description:
      "Smart attendance tracking with facial recognition, analytics, and automated alerts.",
  },
  {
    icon: Briefcase,
    title: "Placements",
    description:
      "End-to-end placement management from applications to offer letters and tracking.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Real-time dashboards for administrators, faculty, and students with actionable insights.",
  },
  {
    icon: FileText,
    title: "Resume AI",
    description:
      "AI-powered resume builder with ATS optimization and personalized feedback.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description:
      "Personalized career paths, skill gap analysis, and mentorship matching powered by AI.",
  },
]

export const whyChooseUs = [
  {
    icon: Sparkles,
    title: "AI-First Platform",
    description:
      "Built from the ground up with artificial intelligence at its core, not bolted on as an afterthought.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, role-based access control, and compliance with education data standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with sub-second load times and seamless experience across all devices.",
  },
  {
    icon: Users,
    title: "Unified Ecosystem",
    description:
      "One platform connecting students, faculty, administrators, and recruiters in real time.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description:
      "Transform raw campus data into actionable insights that drive better outcomes.",
  },
  {
    icon: GraduationCap,
    title: "Student-Centric Design",
    description:
      "Every feature designed with the student journey in mind, from enrollment to employment.",
  },
]

export const recruiters = [
  "TechCorp",
  "InfoSys Pro",
  "GlobalSoft",
  "DataFlow",
  "CloudNine",
  "InnovateX",
  "NextGen AI",
  "PrimeTech",
] as const

export type Testimonial = {
  name: string
  role: string
  department: string
  quote: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Final Year Student",
    department: "Computer Science",
    quote:
      "The AI assistant helped me prepare for interviews and optimize my resume. I landed my dream job at a top tech company!",
    initials: "PS",
  },
  {
    name: "Arjun Patel",
    role: "Placement Coordinator",
    department: "Training & Placement",
    quote:
      "Managing 500+ placements used to be chaos. Now everything is streamlined — from drives to offer tracking.",
    initials: "AP",
  },
  {
    name: "Dr. Meera Reddy",
    role: "Head of Department",
    department: "Information Technology",
    quote:
      "The analytics dashboard gives us unprecedented visibility into student performance and attendance patterns.",
    initials: "MR",
  },
]

export const footerLinks = {
  product: [
    { label: "AI Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Placements", href: "#placements" },
    { label: "Analytics", href: "#features" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Departments", href: "#departments" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const
