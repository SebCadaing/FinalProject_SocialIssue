export default function Experience() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 py-10">
      <div className="bg-base-100 w-3/4 shadow-xl p-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>

        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">
              <div className="text-2xl font-semibold">2021</div>
            </div>
            <div className="timeline-middle">
              <div className="badge badge-primary"></div>
            </div>
            <div className="timeline-end bg-base-200 p-5 rounded-xl shadow-md w-full md:w-2/3">
              <h3 className="font-semibold text-lg">VXI Global Inc.</h3>
              <p className="text-sm opacity-80">Customer Service Representative (2021)</p>
              <p className="mt-2 text-sm">
                Handled client communication and technical support, developing professional communication and multitasking skills.
              </p>
            </div>
          </li>

          <li>
            <div className="timeline-start">
              <div className="text-2xl font-semibold">2023 – 2024</div>
            </div>
            <div className="timeline-middle">
              <div className="badge badge-primary"></div>
            </div>
            <div className="timeline-end bg-base-200 p-5 rounded-xl shadow-md w-full md:w-2/3">
              <h3 className="font-semibold text-lg">Junior Officer, ACM FEU Tech Chapter</h3>
              <p className="text-sm opacity-80">FEU Institute of Technology</p>
              <p className="mt-2 text-sm">
                Collaborated in organizing tech-related events and workshops to promote programming and innovation within the student community.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
