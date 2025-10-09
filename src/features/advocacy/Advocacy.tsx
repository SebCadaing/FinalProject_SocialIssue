export default function Advocacy() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 py-10">
      <div className="bg-base-100 w-3/4 shadow-xl p-10 rounded-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">My Advocacy</h2>

        <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all w-full md:w-3/4 p-8 rounded-xl text-center">
          <p className="text-lg leading-relaxed mb-4">
            I believe that <span className="font-semibold text-primary">Computer Science</span> is more than just coding — it’s about creativity,
            collaboration, and problem-solving that can improve people’s lives.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            My advocacy is to <span className="font-semibold text-secondary">make the CS community more fruitful </span>
            by fostering an environment where students and professionals can share knowledge, collaborate on projects, and inspire one another to
            innovate responsibly.
          </p>

          <p className="text-lg leading-relaxed">
            I aim to mentor aspiring developers, encourage open-source contributions, and promote continuous learning so that everyone, regardless of
            background, can find growth and fulfillment in the world of technology.
          </p>
        </div>
      </div>
    </div>
  );
}
