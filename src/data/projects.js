import { GitHub } from "@mui/icons-material";
import allImages from "../assets";

const { Project1, Project2, Project3, Project4, Project5, Project6 } =
  allImages;

export const ProjectsList = [
  {
    name: "Data Analysis",
    image: Project1,
    skills: ["JavaScript", "HTML", "CSS"],
    link: [
      {
        url: "https://github.com/SharadMangal",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Ecommerce Website",
    image: Project2,
    skills: ["React", "NodeJS", "MongoDB"],
    link: [
      {
        url: "https://github.com/ikramdeveloper",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Spotify Clone",
    image: Project3,
    skills: ["React", "Node.js", "MongoDB", "SpotifyAPI"],
    link: [
      {
        url: "https://github.com/SharadMangal",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Social Media Website",
    image: Project4,
    skills: ["React", "NodeJS", "MySQL", "GraphQL"],
    link: [
      {
        url: "https://github.com/SharadMangal",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Dashboard Visualizer",
    image: Project5,
    skills: ["JavaScript", "HTML", "CSS"],
    link: [
      {
        url: "https://github.com/SharadMangal",
        icon: <GitHub />,
      },
    ],
  },
  {
    name: "Mobile Game",
    image: Project6,
    skills: ["React Native", "JavaScript", "HTML", "CSS"],
    link: [
      {
        url: "https://github.com/SharadMangal",
        icon: <GitHub />,
      },
    ],
  },
];
