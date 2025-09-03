import { motion } from "framer-motion";
import {  useLocation } from "react-router-dom"; // if using react-router
import { ComicText } from "@/components/magicui/ComicText";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { NotFoundButton } from "@/components/mypart/404button";

export default function NotFoundPage() {
    const location = useLocation()
  return (
    <div className="flex flex-col  items-center justify-evenly w-screen h-screen bg-[#09001F] ">
        <img src="/404.gif" alt="" className="" />
        <motion.h1 initial={{  opacity: 0 }}
                    animate={{  opacity: 1 }}
                    transition={{duration: 0.5, ease: "easeOut" }}
                    className="text-5xl flex gap-4 items-end">
                        <LineShadowText className="italic" shadowColor="white">No</LineShadowText>
                        <LineShadowText className="italic" shadowColor="white">Path</LineShadowText>
                        <LineShadowText className="italic" shadowColor="white">For</LineShadowText>
                        "
                        <ComicText fontSize={4}>{location.pathname.substring(1)}</ComicText> ".
        </motion.h1>
        <NotFoundButton />
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md"
      >
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </motion.div> */}
    </div>
  );
}
