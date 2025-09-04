import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import  { useState } from "react";
import {
  faPython,
  faAngular,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationCarausal from "@/tools/EducationCarausal";
import { EducationLoader } from "@/components/mypart/EducationLoader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";


const courseSkillIcon = {
  python: <FontAwesomeIcon icon={faPython} />,
  node: <FontAwesomeIcon icon={faPython} />,
  angular: <FontAwesomeIcon icon={faAngular} />,
  html: <FontAwesomeIcon icon={faHtml5} />,
  css: <FontAwesomeIcon icon={faCss3} />,
  js: <FontAwesomeIcon icon={faJs} />,
  react: <FontAwesomeIcon icon={faReact} />,
  mongo: (
    <svg
      viewBox="0 0 32 32"
      height={25}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <linearGradient
            id="a"
            x1="-645.732"
            y1="839.188"
            x2="-654.59"
            y2="839.25"
            gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.231" stop-color="#999875"></stop>
            <stop offset="0.563" stop-color="#9b9977"></stop>
            <stop offset="0.683" stop-color="#a09f7e"></stop>
            <stop offset="0.768" stop-color="#a9a889"></stop>
            <stop offset="0.837" stop-color="#b7b69a"></stop>
            <stop offset="0.896" stop-color="#c9c7b0"></stop>
            <stop offset="0.948" stop-color="#deddcb"></stop>
            <stop offset="0.994" stop-color="#f8f6eb"></stop>
            <stop offset="1" stop-color="#fbf9ef"></stop>
          </linearGradient>
          <linearGradient
            id="b"
            x1="-644.287"
            y1="823.405"
            x2="-657.028"
            y2="845.476"
            gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#48a547"></stop>
            <stop offset="1" stop-color="#3f9143"></stop>
          </linearGradient>
          <linearGradient
            id="c"
            x1="-643.386"
            y1="839.485"
            x2="-652.418"
            y2="833.417"
            gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#41a247"></stop>
            <stop offset="0.352" stop-color="#4ba74b"></stop>
            <stop offset="0.956" stop-color="#67b554"></stop>
            <stop offset="1" stop-color="#69b655"></stop>
          </linearGradient>
        </defs>
        <title>file_type_mongo</title>
        <path
          d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z"
          style={{ fill: "url(#a)" }}
        ></path>
        <path
          d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z"
          style={{ fill: "url(#b)" }}
        ></path>
        <path
          d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z"
          style={{ fill: "url(#c)" }}
        ></path>
      </g>
    </svg>
  ),
};

interface CourseSkillProps {
  skills: string[];
}
const CourseSkill = ({ skills }: CourseSkillProps) => {
  return (
    <div className="flex gap-5">
      {skills.map((val, index) => (
        <div key={index} className="text-xl sm:text-2xl">
          {courseSkillIcon[
            val.toLowerCase() as keyof typeof courseSkillIcon
          ] ?? <span>{val}</span>}
        </div>
      ))}
    </div>
  );
};

interface CourseProp {
  skills: string[];
  title: string;
  image: string;
}
const Course = ({ skills, title, image }: CourseProp) => {
  return (
    <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-10 py-5 px-5 sm:px-10 rounded-sm border-2 sm:border-gray-200 ml-[30px] sm:max-w-[50vw]">
      <img
        src={image}
        alt=""
        className="h-[150px] rounded-sm border border-gray-200"
      />
      <div className="flex flex-col items-start gap-1">
        <p className="text-base sm:text-lg font-semibold text-left mb-3">{title}</p>
        {/* skills */}
        <CourseSkill skills={skills} />
        <InteractiveHoverButton className="w-30 h-10 rounded-sm mt-3">
          Link
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

const Education = () => {
  const [tab, setTab] = useState(false);

  return (
    <section id="education"  data-scroll-section className="text-black min-h-screen w-screen overflow-hidden mt-20 sm:mt-0 sm:px-[10rem] sm:gap-10 sm:py-10 relative flex flex-col sm:grid sm:grid-rows-[auto_1fr] sm:[grid-template-rows:unset] sm:grid-cols-[.5fr_1fr] justify-center sm:items-center relative">
      {/* <h1 className='text-left font-semibold text-7xl mb-10 text-[#5227FF]'>Education <br /> & Courses</h1> */}
      <motion.div initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className="hidden sm:flex flex-col items-center">
        <div className="bg-[#212121] w-max rounded-[50%]">
          <EducationLoader />
        </div>
        <h1
          onClick={() => setTab(false)}
          className={`text-left font-semibold mb-10 cursor-pointer duration-200 transition-transform  ${
            !tab
              ? "text-7xl text-black dark:text-white"
              : "hover:scale-110 text-gray-300 dark:text-gray-700 text-6xl"
          }`}
        >
          Education
        </h1>
        <h1
          onClick={() => setTab(true)}
          className={`text-left font-semibold mb-10 cursor-pointer duration-200 transition-transform  ${
            tab
              ? "text-7xl text-black dark:text-white"
              : "hover:scale-110 text-gray-300 dark:text-gray-700 text-6xl"
          }`}
        >
          Courses
        </h1>
      </motion.div>

      <motion.div initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className="sm:hidden grid grid-cols-[1fr_1fr]  items-center">
        <div className="bg-[#212121] w-max rounded-[50%] col-span-2 mx-auto">
          <EducationLoader />
        </div>
        <h1
          onClick={() => setTab(false)}
          className={`font-semibold pt-3 cursor-pointer duration-200 transition-transform text-2xl text-center w-full ${
            !tab
              ? "dark:text-white text-black"
              : "dark:text-gray-700 text-gray-300"
          }`}
        >
          Education
        </h1>
        <h1
          onClick={() => setTab(true)}
          className={`font-semibold pt-3 cursor-pointer duration-200 transition-transform text-2xl text-center w-full ${
            tab
              ? "dark:text-white text-black"
              : "dark:text-gray-700 text-gray-300"
          }`}
        >
          Courses
        </h1>
      </motion.div>
      {/* <h1 className='text-left font-semibold text-7xl mb-10'><AuroraText>Education <br /> & Courses</AuroraText></h1> */}
      <motion.div initial={{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className="relative flex flex-col sm:justify-center ">
        {!tab && (
          <div className="overflow-x-visible overflow-y-auto  sm:px-5">
            <EducationCarausal />
          </div>
        )}
        {tab && (
          <div className="overflow-x-visible overflow-y-auto sm:max-w-[50vw] max-w-screen px-5 mt-10">
            <Carousel className="w-full max-w-[90%] select-none dark:text-white">
              <CarouselContent>
                <CarouselItem>
                  <Course
                    title="The Complete Data Structures and Algorithms Course in Python"
                    skills={["html", "css", "js"]}
                    image="/courses/frontend.jpg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Course
                    title="The Complete Data Structures and Algorithms Course in Python"
                    skills={["mongo", "react", "node", "angular"]}
                    image="/courses/mern.webp"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Course
                    title="The Complete Data Structures and Algorithms Course in Python"
                    skills={["python"]}
                    image="/courses/dsa.webp"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-[30px] cursor-pointer" />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Education;
