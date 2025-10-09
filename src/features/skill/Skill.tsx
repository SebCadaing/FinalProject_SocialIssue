export default function Skill() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 py-10">
      <div className="bg-base-100 w-3/4 shadow-xl p-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-base-200 p-6 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-3">Programming Languages</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C# (.NET)</li>
            </ul>
          </div>

          <div className="card bg-base-200 p-6 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-3">Frameworks & Libraries</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>ASP.NET Core</li>
              <li>TailwindCSS / DaisyUI</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className="card bg-base-200 p-6 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-3">Tools & Technologies</h3>
            <ul className="list-disc list-inside">
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>RESTful APIs</li>
              <li>SQL & Entity Framework</li>
            </ul>
          </div>

          <div className="card bg-base-200 p-6 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-3">Others</h3>
            <ul className="list-disc list-inside">
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
