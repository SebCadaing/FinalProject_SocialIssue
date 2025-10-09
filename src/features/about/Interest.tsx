import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export default function Interest() {
  return (
    <div className="pt-4">
      <div className="card bg-base-100 shadow-md borderborder-base-300">
        <div className="card-body">
          <h2 className="card-title flex items-center gap-2 text-gray">
            <MusicalNoteIcon className="h-6 w-6" />
            Hobbies
          </h2>
          <ul className="list-disc list-inside text-base-content mt-2">
            <li>Listening and Composing Music.</li>
            <li>Learning different frameworks and technologies.</li>
            <li>Working Out.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
