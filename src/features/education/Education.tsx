import Bernadette from "./Bernadette";
import Corinthian from "./Corinthian";
import FeuTect from "./FeuTect";
import MCU from "./MCU";

export default function Education() {
  return (
    <div className="flex items-center mt-10 justify-center min-h-screen bg-base-300">
      <div className="bg-base-100 w-3/4 h-[85vh] shadow-md p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <FeuTect />
          <MCU />
          <Corinthian />
          <Bernadette />
        </div>
      </div>
    </div>
  );
}
