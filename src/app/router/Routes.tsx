import { createBrowserRouter } from "react-router-dom";
import App from "../../layout/App";
import AboutMe from "../../features/about/AboutMe";
import Education from "../../features/education/Education";
import Experience from "../../features/experience/Experience";
import Skill from "../../features/skill/Skill";
import Certificate from "../../features/certificates/Certificate";
import Advocacy from "../../features/advocacy/Advocacy";
import Portfolio from "../../features/porfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "aboutme", element: <AboutMe /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "skill", element: <Skill /> },
      { path: "certificate", element: <Certificate /> },
      { path: "advocacy", element: <Advocacy /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
]);
