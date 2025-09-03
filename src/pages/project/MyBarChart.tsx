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
                    transition={{duration: .2, ease: "easeOut" }} className="mb-10 p-4 grid grid-cols-[auto_1fr] items-center hover:bg-gray-200 dark:hover:bg-[#222] bg-gray-200 dark:bg-[#111] rounded transition-hover duration-150 cursor-default">
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
            <span className="h-[50px] py-1 flex  text-4xl font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
            Languages Used <svg className="h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z" fill="#000"></path> </g></svg>
            </span>
            <span className="h-[50px] py-1 flex  text-4xl font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
            Languages Used <svg className="h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z" fill="#000"></path> </g></svg>
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