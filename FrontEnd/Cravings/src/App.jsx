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
            <div className="border-2 rounded-2xl flex items-center  px-2">
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
        <div className=" flex content-center items-center  my-40 border-2 p-15 bg-white/20 rounded-3xl ">
          <p className=" flex content-center items-center text-green-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            natus vero sint impedit dicta, aspernatur architecto fuga cumque,
            debitis molestiae labore! Ipsum esse dicta sed deserunt eveniet vero
            voluptatibus itaque? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aliquid laudantium cum numquam? Odit sit sed
            veniam doloribus, aliquid tempora dignissimos?
          </p>
        </div>
      </div>
    </>
  );
};
export default App;
