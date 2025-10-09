import { AcademicCapIcon, BriefcaseIcon, CheckBadgeIcon, CogIcon, GlobeAltIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full fixed h-20 top-0 z-50 bg-gray-500">
      <div className="flex items-center justify-center h-full px-10 mx-auto gap-6">
        <NavLink to="aboutme" className="flex gap-2 hover:cursor-pointer">
          <div>
            <UserIcon className="w-6 h-6 text-white" />
          </div>
          <span>About me</span>
        </NavLink>
        <NavLink to="education" className="flex gap-2 hover:cursor-pointer">
          <div>
            <AcademicCapIcon className="w-6 h-6 text-white" />
          </div>
          <span>Education</span>
        </NavLink>
        <NavLink to="experience" className="flex gap-2 hover:cursor-pointer">
          <a>
            <BriefcaseIcon className="w-6 h-6 text-white" />
          </a>
          <span>Experience</span>
        </NavLink>
        <NavLink to="skill" className="flex gap-2 hover:cursor-pointer">
          <a>
            <CogIcon className="w-6 h-6 text-white" />
          </a>
          <span>Skill</span>
        </NavLink>
        <NavLink to="certificate" className="flex gap-2 hover:cursor-pointer">
          <a>
            <CheckBadgeIcon className="w-6 h-6 text-white" />
          </a>
          <span>Certificates</span>
        </NavLink>
        <NavLink to="advocacy" className="flex gap-2 hover:cursor-pointer">
          <a>
            <GlobeAltIcon className="w-6 h-6 text-white" />
          </a>
          <span>Advocacy</span>
        </NavLink>
        <NavLink to="portfolio" className="flex gap-2 hover:cursor-pointer">
          <a>
            <PhotoIcon className="w-6 h-6 text-white" />
          </a>
          <span>Portfolio</span>
        </NavLink>
      </div>
    </header>
  );
}
