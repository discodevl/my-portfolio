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
          start: "04.2022",
          end: "07.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- todo`,
        skills: [
          "ReactJS",
          "HTML",
          "CSS",
          "Redux Toolkit",
          "Firebase",
          "UI/UX Design",
          "Extension",
          "Design System",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "dst",
    companyName: "Design System Strategies",
    companyLogo: "https://assets.chanhdai.com/images/companies/tungtung.webp",
    positions: [
      {
        id: "exp2",
        title: "Web Developer -acc",
        employmentPeriod: {
          start: "2023",
          end: "2023",
        },
        employmentType: "Full-time",
        description: `- todo lorem`,
        icon: "code",
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Kubernetes",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Full-time",
        description: `- todo lorem`,
        icon: "code",
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "App Center",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "73151add-7adf-4035-a237-b5803ceb5478",
        title: "Web Developer",
        employmentPeriod: {
          start: "2018",
        },
        employmentType: "Full-time",
        description: ``,
        icon: "code",
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "uni1",
        title: "University of Science — VNUHCM",
        employmentPeriod: {
          start: "08.2018",
          end: "2026",
        },
        icon: "education",
        description: `- todo`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];
