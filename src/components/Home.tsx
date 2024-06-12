import "../assets/fonts.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="container w-full h-full flex justify-center items-center m-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, y: -100}}
          animate={{ opacity: 1, scale: 1, y: 100 }}
          transition={{
            scale: { duration: 3 },
            opacity: { duration: 4 },
            y: {duration: 5}
          }}
          className=" text-[10rem] font-harry h-full stroke-slate-900 stroke-2"
        >
          WELCOME
        </motion.h1>
      </div>
    </>
  );
}

export default Home;
