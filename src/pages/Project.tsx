import Stack from "@/components/Components/Stack/Stack";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ProjectItem } from "@/components/mypart/ProjectItem";
import {
  OpenButton,
  GithubButton,
  SquareBoxLoader,
  ProjectHeading,
  ProjectFilter,
} from "@/components/mypart/ProjectButton";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface PopUpCardProp {
  name: string;
  data: Array<any>;
  image: string;
  fileName: string;
}

const LangData = {
  html: [<i className="devicon-html5-plain colored"></i>, "Html"],
  css: [<i className="devicon-css3-plain colored"></i>, "CSS"],
  js: [<i className="devicon-javascript-plain colored"></i>, "Javascript"],
  react: [<i className="devicon-react-original colored"></i>, "React Js"],
  node: [<i className="devicon-html5-plain colored"></i>, "Node Js"],
  python: [<i className="devicon-python-plain"></i>, "Python"],
};

interface ProjectProp {
  setPrjName: any;
}
const Project = ({ setPrjName }: ProjectProp) => {

  function PopUpCard({ name, data, image, fileName }: PopUpCardProp) {
    const [hovered, setHovered] = useState(false);
    return (
      <motion.div
        initial={{ y:100 ,opacity:0}}
      whileInView={{ y:0,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }}
        className="relative cursor-pointer hover:z-1000"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          console.log(fileName)
          setPrjName(fileName);
        }}
      >
        {/* Only Image (default view) */}
        <img
          src={image}
          alt="Profile"
          className={`hidden sm:block rounded-sm w-[90%] mx-auto shadow-lg transition-all duration-300 ${
            hovered ? "opacity-50 scale-100" : "opacity-100 scale-100"
          }`}
        />

        {/* Popup Card with Image + Info */}
        <div
          className={`sm:absolute sm:top-[-20px] sm:left-1/2 mx-auto sm:mx-0 transform sm:translate-x-1/2 w-max bg-white border rounded-2xl shadow-xl p-4 transition-all duration-300 ${
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
            <GithubButton />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="project" data-scroll-section className="overflow-hidden text-black min-h-screen w-screen sm:px-[10rem] relative flex flex-col justify-center items-center relative">
      {/* <h1 className='col-span-2 text-left font-normal text-7xl self-start mb-15'>Project's</h1> */}
      <div 
        data-scroll
        data-scroll-sticky
        data-scroll-target="#project"
        className="flex flex-col sm:flex-row justify-between sm:mb-15 w-full bg-white dark:bg-background dark:text-white z-500">
        <motion.h1 initial={{ y:100 ,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className="text-4xl h-[80px] sm:h-max sm:text-6xl font-normal tracking-tighter self-start flex items-center sm:gap-5">
          <ProjectHeading/> My <AuroraText className="ml-3 sm:ml-0">Project's &nbsp;</AuroraText>
        </motion.h1>
        <ProjectFilter />
      </div>

      <nav className="grid sm:grid-cols-[repeat(3,1fr)] w-full gap-y-15 gap-x-15">
        {/* <Prj name="ReviewLens" fileName="prj-reviewlens" images={[{"id":1,"img":"/prj-reviewlens/0.png"},{"id":2,"img":"/prj-reviewlens/1.png"},{"id":3,"img":"/prj-reviewlens/2.png"},{"id":4,"img":"/prj-reviewlens/3.png"},{"id":5,"img":"/prj-reviewlens/4.png"},{"id":6,"img":"/prj-reviewlens/5.png"}]}/>
            <Prj name="HomePage" fileName="prj-homepage" images={[{"id":1,"img":"/prj-homepage/0.png"},{"id":2,"img":"/prj-homepage/1.png"},{"id":3,"img":"/prj-homepage/2.png"},{"id":4,"img":"/prj-homepage/3.png"},{"id":5,"img":"/prj-homepage/4.png"}]}/>
            <Prj name="Split" fileName="prj-split" images={[{"id":1,"img":"/prj-split/0.png"},{"id":2,"img":"/prj-split/1.png"},{"id":3,"img":"/prj-split/2.png"},{"id":4,"img":"/prj-split/3.png"},{"id":5,"img":"/prj-split/4.png"},{"id":6,"img":"/prj-split/5.png"}]}/>
            <Prj name="Tic Tac Toe" fileName="prj-tictactoe" images={[{"id":1,"img":"/prj-tictactoe/0.png"},{"id":2,"img":"/prj-tictactoe/1.png"},{"id":3,"img":"/prj-tictactoe/2.png"},{"id":4,"img":"/prj-tictactoe/3.png"},{"id":5,"img":"/prj-tictactoe/4.png"},{"id":6,"img":"/prj-tictactoe/5.png"},{"id":7,"img":"/prj-tictactoe/6.png"}]}/>
            <Prj name="ShoeStop" fileName="prj-shoestop" images={[{"id":1,"img":"/prj-shoestop/0.png"},{"id":2,"img":"/prj-shoestop/1.png"},{"id":3,"img":"/prj-shoestop/2.png"},{"id":4,"img":"/prj-shoestop/3.png"},{"id":5,"img":"/prj-shoestop/4.png"},{"id":6,"img":"/prj-shoestop/5.png"},{"id":7,"img":"/prj-shoestop/6.png"}]}/>
            <Prj name="Gemini" fileName="prj-gemini" images={[{"id":1,"img":"/prj-gemini/0.png"},{"id":2,"img":"/prj-gemini/1.png"},{"id":3,"img":"/prj-gemini/2.png"},{"id":4,"img":"/prj-gemini/3.png"},{"id":5,"img":"/prj-gemini/4.png"}]}/>
            <Prj name="Youtube" fileName="prj-youtube" images={[{"id":1,"img":"/prj-youtube/0.png"},{"id":2,"img":"/prj-youtube/1.png"},{"id":3,"img":"/prj-youtube/2.png"},{"id":4,"img":"/prj-youtube/3.png"},{"id":5,"img":"/prj-youtube/4.png"},{"id":6,"img":"/prj-youtube/5.png"},{"id":7,"img":"/prj-youtube/8.png"}]}/>
            <Prj name="Periodic Table" fileName="prj-periodic" images={[{"id":1,"img":"/prj-periodic/0.png"},{"id":2,"img":"/prj-periodic/1.png"},{"id":3,"img":"/prj-periodic/2.png"},{"id":4,"img":"/prj-periodic/3.png"},{"id":5,"img":"/prj-periodic/4.png"},{"id":6,"img":"/prj-periodic/5.png"},{"id":7,"img":"/prj-periodic/6.png"}]}/> */}
        {/* <ProjectItem name="ReviewLens" image="/prj-reviewlens/5.png" />
            <ProjectItem name="HomePage" image="/prj-homepage/4.png" />
            <ProjectItem name="Split" image="/prj-split/5.png" />
            <ProjectItem name="Tic Tac Toe" image="/prj-tictactoe/6.png" />
            <ProjectItem name="ShoeStop" image="/prj-shoestop/6.png" />
            <ProjectItem name="Gemini" image="/prj-gemini/3.png" />
            <ProjectItem name="Youtube" image="/prj-youtube/0.png" />
            <ProjectItem name="Periodic Table" image="/prj-periodic/6.png" /> */}

        <PopUpCard
          fileName="prj-reviewlens"
          data={["react", "python", "html", "css", "js"]}
          name="ReviewLens"
          image="/prj-reviewlens/5.png"
        />
        <PopUpCard
          fileName="prj-homepage"
          data={["react", "python", "html", "css", "js"]}
          name="HomePage"
          image="/prj-homepage/4.png"
        />
        <PopUpCard
          fileName="prj-split"
          data={["react", "python", "html", "css", "js"]}
          name="Split"
          image="/prj-split/5.png"
        />
        <PopUpCard
          fileName="prj-tictactoe"
          data={["react", "python", "html", "css", "js"]}
          name="Tic Tac Toe"
          image="/prj-tictactoe/6.png"
        />
        <PopUpCard
          fileName="prj-shoestop"
          data={["react", "python", "html", "css", "js"]}
          name="ShoeStop"
          image="/prj-shoestop/6.png"
        />
        <PopUpCard
          fileName="prj-periodic"
          data={["react", "python", "html", "css", "js"]}
          name="Periodic Table"
          image="/prj-periodic/6.png"
        />
        <PopUpCard
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
        />
      </nav>
    </section>
  );
};

export default Project;
