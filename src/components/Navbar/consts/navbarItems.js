import PeopleIcon from "@mui/icons-material/People";
import ImageIcon from "@mui/icons-material/Image";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DnsIcon from "@mui/icons-material/Dns";
import AboutMe from "../../../pages/AboutMe/AboutMe";
import Authentication from "../../../pages/Authentication/Authentication";
import MachineLearning from "../../../pages/MachineLearning/MachineLearning";
import Hosting from "../../../pages/Hosting/Hosting";
import Functions from "../../../pages/Functions/Functions";
import Database from "../../../pages/Database/Database";
import Storage from "../../../pages/Storage/Storage";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useLocation } from "react-router-dom";
import { redirect } from "react-router-dom";
import { useState, useNavigate } from "react";

var i = 0;

export const mainNavbarItems = [
  {
    id: i++,
    icon: <PersonIcon />,
    element: <AboutMe />,
    label: "About Me",
    route: "about-me",
  },
  {
    id: i++,
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    route: "linkedin",
  },
  {
    id: i++,
    icon: <PeopleIcon />,
    element: <Authentication />,
    label: "Authentication",
    route: "authentication",
  },
  {
    id: i++,
    icon: <DnsIcon />,
    element: <Database />,
    label: "Database",
    route: "database",
  },
  {
    id: i++,
    icon: <ImageIcon />,
    element: <Storage />,
    label: "Storage",
    route: "storage",
  },
  {
    id: i++,
    icon: <PublicIcon />,
    element: <Hosting />,
    label: "Hosting",
    route: "hosting",
  },
  {
    id: i++,
    icon: <SettingsEthernetIcon />,
    element: <Functions />,
    label: "Functions",
    route: "functions",
  },
  {
    id: i++,
    icon: <SettingsInputComponentIcon />,
    element: <MachineLearning />,
    label: "Machine learning",
    route: "machine-learning",
  },
];
