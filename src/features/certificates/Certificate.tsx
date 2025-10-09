import Python from "./../../assets/python.png";
import PMI from "./../../assets/PM.png";

export default function Certificate() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 py-10">
      <div className="bg-base-100 w-3/4 shadow-xl p-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">Certificates & Training</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all p-6 rounded-xl">
            <figure className="flex justify-center mb-4">
              <img src={Python} alt="Python Certificate" className="h-40 object-contain rounded-lg" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="font-semibold text-lg">Information Technology Specialist in Python</h3>
              <p className="text-sm opacity-70">Issued by Certiport</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all p-6 rounded-xl">
            <figure className="flex justify-center mb-4">
              <img src={PMI} alt="PMI Certificate" className="h-40 object-contain rounded-lg" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="font-semibold text-lg">PMI Project Management Ready</h3>
              <p className="text-sm opacity-70">Issued by Project Management Institute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
