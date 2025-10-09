import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function GoalsPersonality() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 h-70 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2 text-primary">
              <CheckCircleIcon className="h-6 w-6" />
              Goals
            </h2>
            <ul className="list-disc list-inside text-base-content mt-2">
              <li>Continue developing my technical and creative skills.</li>
              <li>Contribute to impactful software projects.</li>
              <li>Pursue opportunities for innovation and learning.</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2 text-secondary">
              <SparklesIcon className="h-6 w-6" />
              Personality
            </h2>
            <ul className="list-disc list-inside text-base-content mt-2">
              <li>Adaptable and open-minded in various environments.</li>
              <li>Detail-oriented and passionate about problem-solving.</li>
              <li>Collaborative and enjoys working in a team setting.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
