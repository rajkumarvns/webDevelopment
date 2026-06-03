import { FaWifi } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="bg-success p-3 rounded-2" id="div1">
        This is practice div
      </div>
      <button className="bg-success rounded-2 m-4 fs-4 d-flex align-items-center gap-2">
        {<FaWifi />} <span>Save files</span>
      </button>
    </>
  );
}
export default App;
