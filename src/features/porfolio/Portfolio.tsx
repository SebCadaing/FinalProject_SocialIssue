export default function Projects() {
  return (
    <div className="flex items-center mt-10 justify-center min-h-screen bg-base-300">
      <div className="bg-base-100 w-3/4 h-[85vh] shadow-md p-8 rounded-2xl overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Revent Project */}
          <div className="card bg-base-100 h-full shadow-md w-full hover:shadow-2xl">
            <h2 className="card-title h-14 justify-center text-center">Revent - Event Social Platform</h2>
            <div className="card-body p-4 ">
              <ul className="list-disc text-base list-inside text-base-content mt-2 space-y-1">
                <li>Tech Stack: React (Vite), Redux, Firebase Firestore, Tailwind CSS</li>
                <li>Built a web app for socializing and promoting events.</li>
                <li>Users can log in, create events, follow others, and mark attendance.</li>
                <li>Implemented real-time updates using Firestore.</li>
                <li>Used Redux for global state management.</li>
                <li>Styled with Tailwind CSS for a modern UI.</li>
                <li>Deployed with Firestore Hosting using GitHub Actions CI/CD.</li>
              </ul>
            </div>
          </div>

          {/* Restore Project */}
          <div className="card bg-base-100 h-full shadow-md w-full hover:shadow-2xl">
            <h2 className="card-title h-14 justify-center text-center">Restore - E-commerce Web Application</h2>
            <div className="card-body p-4 ">
              <ul className="list-disc text-base list-inside text-base-content mt-2 space-y-1">
                <li>Tech Stack: .NET 9, Entity Framework, React (Vite), Redux, Material UI, Stripe, Azure, GitHub Actions, Docker</li>
                <li>Developed a full-stack e-commerce platform.</li>
                <li>Integrated Stripe for secure payments.</li>
                <li>Implemented Stripe Webhooks for order tracking.</li>
                <li>Used .NET Identity for authentication and roles.</li>
                <li>Modern UI using Material UI and Redux.</li>
                <li>Integrated Cloudinary for image storage.</li>
                <li>Containerized SQL database with Docker.</li>
                <li>Deployed to Azure with GitHub Actions CI/CD.</li>
              </ul>
            </div>
          </div>

          {/* Future Project 1 */}
          <div className="card bg-base-100 h-full shadow-md w-full hover:shadow-2xl">
            <h2 className="card-title h-14 justify-center text-center">NextGen Portfolio AI Assistant (Future Project)</h2>
            <div className="card-body p-4 ">
              <ul className="list-disc text-base list-inside text-base-content mt-2 space-y-1">
                <li>AI-powered personal portfolio assistant.</li>
                <li>Users can ask questions about projects and career history.</li>
                <li>Planned Tech Stack: React, FastAPI, OpenAI API, Vector DB.</li>
                <li>Will include smart search and context memory.</li>
                <li>Planned deployment using Docker + Railway.</li>
              </ul>
            </div>
          </div>

          {/* Future Project 2 */}
          <div className="card bg-base-100 h-full shadow-md w-full hover:shadow-2xl">
            <h2 className="card-title h-14 justify-center text-center">TaskFlow Pro - Productivity & Automation Suite (Future Project)</h2>
            <div className="card-body p-4 ">
              <ul className="list-disc text-base list-inside text-base-content mt-2 space-y-1">
                <li>Smart task management system with workflow automation.</li>
                <li>Planned features: reminders, AI text summarization, auto-prioritization.</li>
                <li>Tech Stack: React, Node.js, MongoDB, Tailwind CSS.</li>
                <li>Will include webhook integrations for GitHub and Notion.</li>
                <li>Target deployment using Docker + AWS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
