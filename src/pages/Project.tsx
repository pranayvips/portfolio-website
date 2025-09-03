import { AuroraText } from "@/components/magicui/aurora-text";
import {
  OpenButton,
  GithubButton,
  SquareBoxLoader,
  ProjectHeading,
  ProjectFilter,
} from "@/components/mypart/ProjectButton";
import  {  useState } from "react";
import { motion } from "framer-motion";

interface PopUpCardProp {
  name: string;
  data: Array<any>;
  image: string;
  fileName: string;
  link:string
}

const LangData = {
  html: [<i className="devicon-html5-plain colored"></i>, "Html"],
  css: [<i className="devicon-css3-plain colored"></i>, "CSS"],
  js: [<i className="devicon-javascript-plain colored"></i>, "Javascript"],
  react: [<i className="devicon-react-original colored"></i>, "React Js"],
  node: [<i className="devicon-html5-plain colored"></i>, "Node Js"],
  python: [<i className="devicon-python-plain"></i>, "Python"],
};


const Project = ({ setPrjName }: {setPrjName: any}) => {

  function PopUpCard({ name, data, image, fileName,link }: PopUpCardProp) {
    const [hovered, setHovered] = useState(false);
    return (
      <motion.div
        initial={{ y:100 ,opacity:0,scale:0}}
      whileInView={{ y:0,opacity:1,scale:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }}
        className="relative cursor-pointer hover:z-400"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          console.log(fileName)
          setPrjName(fileName);
        }}
      >
        {/* Only Image (default view) */}
        <motion.img
        initial={{ scale:0}}
    whileInView={{scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
          src={image}
          alt="Profile"
          className={`hidden sm:block rounded-sm w-[90%] mx-auto shadow-lg transition-all duration-300 ${
            hovered ? "opacity-50 scale-100" : "opacity-100 scale-100"
          }`}
        />

        {/* Popup Card with Image + Info */}
        <div
          className={`sm:absolute sm:top-[-20px] sm:left-1/2 mx-auto sm:mx-0 transform sm:-translate-x-1/2 w-max bg-white border rounded-2xl shadow-xl p-4 transition-all duration-300 ${
            hovered
              ? "opacity-100 scale-100 translate-y-0"
              : "sm:opacity-0 scale-95 translate-y-3 sm:pointer-events-none"
          }`}
        >
          <img
            src={image}
            alt="Profile"
            className="w-full h-40 object-cover rounded-md"
          />

          <div className="mt-3">
            <h3 className="text-xl font-semibold text-indigo-800 flex items-center max-h-[40px] mb-2">
              <span className="mr-5 ml-2">
                <SquareBoxLoader />
              </span>
              {name}
            </h3>
            <div className="text-gray-600 text-sm text-left flex items-center">
              ⭐ 4.8 |{" "}
              <span className="ml-2 flex gap-2">
                {data.map((val, index) => (
                  <span className="relative group" key={index}>
                    <p className="absolute hidden group-hover:block top-[-30px] text-xs px-2 py-1 bg-black rounded-xs text-white left-[50%] translate-x-[-50%] capitalize whitespace-nowrap">
                      {LangData[val as keyof typeof LangData][1]}
                    </p>
                    <p className="group-hover:scale-130">
                      {LangData[val as keyof typeof LangData][0] ?? "Unknown"}
                    </p>
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-3 items-center justify-between">
            <OpenButton />
            <GithubButton onclick={()=>window.open(link)} />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="project" data-scroll-section className="text-black sm:mt-0 min-h-screen w-screen sm:px-[10rem] relative flex flex-col  items-center relative">
      {/* <h1 className='col-span-2 text-left font-normal text-7xl self-start mb-15'>Project's</h1> */}
      <div 
        data-scroll
        data-scroll-sticky
        data-scroll-target="#project"
        className="flex flex-col sm:flex-row justify-between sm:mb-15 w-full bg-white dark:bg-background dark:text-white z-500">
        <motion.h1 initial={{ x:-100 ,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className="text-4xl h-[80px] sm:h-max sm:text-6xl font-normal tracking-tighter self-start flex items-center sm:gap-5">
          <ProjectHeading/> My <AuroraText className="ml-3 sm:ml-0">Project's &nbsp;</AuroraText>
        </motion.h1>

        <ProjectFilter />
      </div>

      <nav className="grid sm:grid-cols-[repeat(3,1fr)] w-full gap-y-15 gap-x-15">
        <PopUpCard
          fileName="prj-reviewlens"
          data={["react", "python", "html", "css", "js"]}
          name="ReviewLens"
          image="/prj-reviewlens/5.png"
          link="https://github.com/pranayvips/reviewlens"
        />
        <PopUpCard
          fileName="prj-homepage"
          data={["react", "python", "html", "css", "js"]}
          name="HomePage"
          image="/prj-homepage/4.png"
          link="https://github.com/pranayvips/homePage"
        />
        <PopUpCard
          fileName="prj-split"
          data={["react", "python", "html", "css", "js"]}
          name="Split"
          image="/prj-split/5.png"
          link="https://github.com/pranayvips/split"
        />
        <PopUpCard
          fileName="prj-tictactoe"
          data={["react", "python", "html", "css", "js"]}
          name="Tic Tac Toe"
          image="/prj-tictactoe/6.png"
          link="https://github.com/pranayvips/tictactoe"
        />
        <PopUpCard
          fileName="prj-shoestop"
          data={["react", "python", "html", "css", "js"]}
          name="ShoeStop"
          image="/prj-shoestop/6.png"
          link="https://github.com/pranayvips/shoes"
        />
        <PopUpCard
          fileName="prj-periodic"
          data={["react", "python", "html", "css", "js"]}
          name="Periodic Table"
          image="/prj-periodic/6.png"
          link=""
        />
        {/* <PopUpCard
          fileName="prj-gemini"
          data={["react", "python", "html", "css", "js"]}
          name="Gemini"
          image="/prj-gemini/3.png"
        />
        <PopUpCard
          fileName="prj-gemini"
          data={["react", "python", "html", "css", "js"]}
          name="Gemini"
          image="/prj-gemini/3.png"
        />
        <PopUpCard
          fileName="prj-youtube"
          data={["react", "python", "html", "css", "js"]}
          name="Gemini"
          image="/prj-gemini/3.png"
        /> */}
      </nav>
    </section>
  );
};

export default Project;
