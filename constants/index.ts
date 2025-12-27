import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/vardxn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/vardxn",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/vardxn",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Mohishree Facility Services - B2B SaaS Platform",
    description:
      "Designed and built a production facility management platform serving 100+ active clients. Implemented real-time booking system, SEO optimization, and customer testimonials that drove 40% increase in inquiries and $50K+ revenue growth. Platform achieved 4.4★ rating and enabled 3x business expansion.",
    image: "/projects/mohishree.jpg",
    link: "https://mohishreefacilities.com",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
  {
    title: "VitalAI Pro - Healthcare AI Platform",
    description:
      "Built an AI-powered healthcare platform with 96% prescription OCR accuracy and 90%+ disease prediction accuracy. Integrated 25+ HIPAA-compliant APIs and IoT sensors for real-time health monitoring. Achieved 99.9% uptime on AWS infrastructure serving global users.",
    image: "/projects/healthease.jpg",
    link: "https://github.com/vardxn",
    tech: ["MERN Stack", "Python", "TensorFlow", "OpenCV", "AWS"],
  },
  {
    title: "Wanderlust - Travel Booking Platform",
    description:
      'Created a full-stack travel platform with user authentication, listing management, and interactive maps. Implemented review system and optimized performance through modern DevOps practices. Built scalable backend with Node.js and PostgreSQL.',
    image: "/projects/wanderlust.jpg",
    link: "https://github.com/vardxn",
    tech: ["Node.js", "Express", "PostgreSQL", "Maps API", "DevOps"],
  },
  {
    title: "Interactive Portfolio Website",
    description:
      'Designed a space-themed portfolio with immersive 3D animations using Framer Motion. Implemented responsive design and optimized performance for fast loading. Showcases professional work through engaging interactive experience.',
    image: "/projects/project-3.png",
    link: "https://github.com/vardxn",
    tech: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/vardxn",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/vardan-pal",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/vardxn",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/vardan-pal",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "NIT Srinagar",
        icon: null,
        link: "https://nitsri.ac.in",
      },
      {
        name: "Resume",
        icon: null,
        link: "https://github.com/vardxn",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:vardan2701@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/vardxn/portfolio",
};
