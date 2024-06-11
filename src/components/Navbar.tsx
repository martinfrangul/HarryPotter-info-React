import banner from "../assets/banner.png";

const Nabvar = () => {
  return (
    <>
      <div className="nabvar-xl bg-stone-50 bg-opacity-60 flex justify-between items-center mb-4 h-52">
      <div className="w-1/3">
        </div>
        <div className="w-1/3 flex justify-center">
        <img src={banner} alt="banner-hp" className=" w-[30rem] p-5" />
        </div>
        <div className="btn-container flex gap-3 justify-end w-1/3 p-3">
          <button className="btn rounded p-3 bg-yellow-200 text-black"> Login</button>
          <button className="btn rounded p-3 bg-gray-400"> Register</button>
        </div>
      </div>
    </>
  );
};
export default Nabvar;
