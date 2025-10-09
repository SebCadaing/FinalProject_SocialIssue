import { UserIcon } from "@heroicons/react/24/solid";
import GoalsPersonality from "./GoalsPersonality";
import Interest from "./Interest";

export default function AboutMeDetails() {
  return (
    <div className="p-4 w-full">
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex flex-row h-20  items-center gap-2 border-b-3">
          <UserIcon className="h-12" />
          <span className="font-semibold">Hi, I am Sebastian Mhel T. Cadaing.</span>
        </div>
      </div>
      <div className="h-90 border-b-3">
        <GoalsPersonality />
      </div>
      <div>
        <Interest />
      </div>
    </div>
  );
}
