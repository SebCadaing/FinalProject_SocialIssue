import AboutmeImage from "./../../assets/aboutmeimage.jpg";
import AboutMeDetails from "./AboutMeDetails";
export default function AboutMe() {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="card card-side bg-base-100 w-3/4 h-3/4 shadow-sm">
        <figure className="w-2/5">
          <img src={AboutmeImage} alt="Movie" />
        </figure>
        <AboutMeDetails />
      </div>
    </div>
  );
}
