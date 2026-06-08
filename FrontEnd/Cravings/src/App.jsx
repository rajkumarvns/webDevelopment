import logo from "./assets/logo.png";
const App = () => {
  return (
    <>
      <div className=" flex flex-col bg-[url('commonBG.avif')] h-screen w-full">
        <div className="bg-red-500 text-white p-3  flex justify-between">
          <div className="w-20 ">
            <img src={logo} alt="logo cravings" />
          </div>

          <div className="flex gap-5 ">
            <div className="border-2 rounded-2xl flex items-center py-2 px-3">
              Login
            </div>
            <div className="border-2 rounded-lg flex items-center p-2">
              Register
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="hover:bg-amber-700 active:bg-blue-500 w-2xl my-3 p-3 text-white bg-amber-600  rounded-3xl">
            submit
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
