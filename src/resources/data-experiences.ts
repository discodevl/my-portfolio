import { Experience } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    id: "spaarkly",
    companyName: "Spaarkly",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "exp1",
        title: "Web Developer",
        employmentPeriod: {
          start: "04/2022",
          end: "07/2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Development of Single Page Applications and components to handle 3d models using argumented reality libraries such as model-viewer from google`,
        skills: [
          "ReactJS",
          "Redux Toolkit",
          "Firebase",
          "Extension",
          "Bootstrap",
          "Figma",
        ],
      },
    ],
  },
  {
    id: "dst",
    companyName: "Design System Strategies",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    isCurrentEmployer: true,
    positions: [
      {
        id: "exp2",
        title: "Web Developer - Snam",
        employmentPeriod: {
          start: "11/2022",
          end: "03/2023",
        },
        employmentType: "Full-time",
        description: `Developed and maintained a dashboard platform for Snam, designed for real-time data visualization and analysis`,
        icon: "code",
        skills: ["React", "Redux", "Agile", "Teamwork", "API REST"],
      },
      {
        id: "exp3",
        title: "Web Developer Mobile - BIP",
        employmentPeriod: {
          start: "04/2023",
          end: "07/2023",
        },
        employmentType: "Full-time",
        description: `Developed a mobile section for Herno’s e-commerce platform, Integrated UX/UI improvements to enhance the mobile shopping experience.`,
        icon: "code",
        skills: [
          "React",
          "Redux",
          "API REST",
          "Agile",
          "Responsive Development",
        ],
      },
      {
        id: "exp3",
        title: "Web Developer - Ministero dei Trasporti",
        employmentPeriod: {
          start: "08/2023",
          end: "present"
        },
        employmentType: "Full-time",
        description: `Developed and maintained digital platforms for the Ministero dei trasporti, including:
        - Catalogo Prodotti: Centralized management of offered services.
        - RUI (Registro Unico Ispettori): Registration and monitoring system.
        - Accreditamento: Platform for certifying industry operators.
        - TPL: todo
        - Nuovo Portale del Automobilista: A new and modern version of PDA platform
         Worked with public institutions to ensure regulatory compliance and data security.
        `,
        icon: "code",
        skills: ["React", "NextJS", "Angular", "REST API", "GraphQL", "Tailwind", "Bootstrap", "Kubernetes", "CI/CD pipelines", "Microfronted", ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "uni1",
        title: "Universita degli Studi della Basilicata — UNIBAS",
        employmentPeriod: {
          start: "08/2019",
          end: "2022",
        },
        icon: "education",
        description: `- todo`,
        skills: [
          "C++",
          "Java",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
        ],
      },
    ],
  },
];
