import banner from "../assets/banner.png";

const Nabvar = () => {
  return (
    <>
      <div className="nabvar-xl bg-stone-50 flex justify-center items-center">
        <img src={banner} alt="banner-hp" className=" w-80 p-5" />
        <div className="btn-container flex gap-3 justify-end">
          <button className="btn rounded p-3 bg-yellow-200"> Login</button>
          <button className="btn rounded p-3 bg-gray-400"> Registero</button>
        </div>
      </div>
    </>
  );
};
export default Nabvar;
