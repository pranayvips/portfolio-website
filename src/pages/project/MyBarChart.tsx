import { Languages } from "lucide-react";
import "./MyBarChart.css"
import { motion } from "framer-motion"

interface LanguageComponentProps{
    iconName:any,
    langName:any,
    percentage:any,
}
function LanguageComponent({iconName,langName,percentage}:LanguageComponentProps) {
  return (
    <motion.div initial={{  scale:0,opacity: 0 }}
                    animate={{  scale:1,opacity: 1 }}
                    transition={{duration: .2, ease: "easeOut" }} className="mb-10 p-4 grid grid-cols-[auto_1fr] items-center hover:bg-gray-200 dark:hover:bg-[#222] bg-gray-100 dark:bg-[#111] rounded transition-hover duration-150 cursor-default">
        <div className="lang-icon-medium grid grid-cols-[auto_1fr] gap-x-3 w-[150px]  justify-left items-start">
            {iconsSmall[iconName as keyof typeof iconsSmall]}
            <p className="text-left">{langName}</p>
            <p className=" font-thin text-2xl col-span-2">{percentage}%</p>
        </div>
        <div className="bg-gray-200 dark:bg-[#111]">
        <motion.div initial={{  width: 0 }}
                    animate={{  width: percentage}}
                    transition={{delay:1, duration: 0.5, ease: "easeOut" }}
                     className="h-3 rounded-tr-xs rounded-br-xs bg-black dark:bg-[#38BDF8]"></motion.div>
        </div>
    </motion.div>
  );
}
const iconsSmall = {
  "html":<i className="devicon-html5-plain colored"></i>,
  "css":<i className="devicon-css3-plain colored"></i>,
  "js":<i className="devicon-javascript-plain colored"></i>,
  "react":<i className="devicon-react-original colored"></i>,
  "tailwind":<i className="devicon-tailwindcss-plain colored"></i>,
  "firebase":<i className="devicon-firebase-plain-wordmark colored"></i>,
  "node":<i className="devicon-html5-plain colored"></i>,
  "sql":<i className="devicon-mysql-plain-wordmark colored"></i>,
  "python":<i className="devicon-python-plain"></i>,
  "flutter":<i className="devicon-flutter-plain colored"></i>,
  "flask":<i className="devicon-flask-original-wordmark"></i>,
}


interface MyBarChartProp{
    language: Array<any>
}
function MyBarChart({language}:MyBarChartProp) {
  return (
    <div className="w-full h-auto">
        <motion.h1 initial={{  y: -50,opacity:0 }}
                    animate={{  y: 0 , opacity:1}}
                    transition={{duration: 0.5, ease: "easeOut" }} className="h-[50px] flex flex-col w-max pr-4 mb-7 group overflow-hidden cursor-default">
            <span className="h-[50px] py-1 flex items-center text-3xl font-light gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
            Languages Used <Languages />
            </span>
            <span className="h-[50px] py-1 flex items-center text-3xl font-light gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
            Languages Used <Languages />
            </span>
        
        </motion.h1>
        <div className="flex flex-col justify-between h-full sm:pr-5">

        {language.map((val,index)=>{
          return <LanguageComponent key={index} iconName={val[2]} langName={val[0]} percentage={val[1]} />
        })}
        </div>
    </div>
  );
}

export default MyBarChart;