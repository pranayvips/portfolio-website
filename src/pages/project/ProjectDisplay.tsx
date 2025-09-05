import { useEffect, useRef, useState } from "react";
import MyBarChart from "./MyBarChart";
import Stepper, { Step } from "@/components/Components/Stepper/Stepper";
import Rating from "./Rating";
import { Share, SourceCode, Submit } from "@/components/mypart/SourceCode";
import { motion } from "framer-motion";
import { AxeIcon, CheckCircle, Feather, ImageIcon, InfoIcon, LanguagesIcon, LineSquiggle, LineSquiggleIcon, Star, StarIcon } from "lucide-react";

const data = {
  "prj-split": {
    link: "https://github.com/pranayvips/webProjects/tree/main/split",
    year: 2024,
    date: "14 Jun 2024",
    title: "Split Money",
    source: "https://github.com/pranayvips/split",
    images: 6,
    desc: "This is a bill-splitting app designed to simplify expense management when going out with friends. It helps calculate how much each person needs to pay, ensuring fair cost distribution. The app provides a detailed transaction list, making it easy to track payments and dues. Additionally, it includes a history tab where users can review past expenses and transactions. With an easy sign-up process, users can quickly create accounts and securely store their data. The app also allows seamless management of older records and provides an option to share expense details with friends for better coordination.",
    language: [
      ["Html", 33.2, "html"],
      ["Javascript", 33.4, "js"],
      ["Css", 33.6, "css"],
    ],
    features: [
      ["Automated Expense Splitting", "Debt/Credit"],
      ["Keeps track of History", "History Tab"],
      ["Group Expense Handling.", "Manage"],
      ["User-Friendly Interface.", "Simple & Elegant"],
      ["All Transaction.", "Manage at one place"],
      ["Adaptive layout.", "Responsive design"],
    ],
    projectType: "web",
    reviews: [],
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of Split App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "How to Run?",
        "Start the project by running it on a local or live development server.",
      ],
      [
        "Final Touches",
        "Create an account to get started. Add friends using the input fields and hover on names for more details.",
      ],
    ],
  },
  "prj-tictactoe": {
    link: "https://github.com/pranayvips/tictactoe",
    year: 2024,
    date: "15 Jan 2024",
    title: "Tic-Tac-Toe",
    images: 7,
    desc: "This Tic Tac Toe web app, developed using Flask, allows users to play against varying difficulty levels or compete in 1v1 matches. It features a chat screen for real-time interaction, a profile page that tracks wins and losses, and a notification page to keep users updated on game events. The integrated chat system ensures seamless communication with other players, enhancing the overall gaming experience.",
    language: [
      ["Html", 13, "html"],
      ["Javascript", 22, "js"],
      ["Css", 40, "css"],
      ["Flask", 10, "flask"],
    ],
    features: [
      ["Single & Multiplayer Mode", "Single? don’t worry play with us"],
      ["Real-Time Chat", "Chat with other users."],
      ["Profile Tracking.", "Keep track of your winnning."],
      ["Notification System.", "get notified."],
      ["Flask-Based Backend.", "Smooth performance"],
      ["Simple & Clean look.", "User-Friendly Interface"],
    ],
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of 'Tic Tac Toe' App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "Running the script",
        "Open the directory in which 'app.py' file is located",
      ],
      ["Installation Modules", "Install require modules 'flask' "],
      [
        "Ready to Go!",
        "Setup is done.... open the local link provided in console by flask.",
      ],
    ],
    projectType: "flask",
    review: [],
  },
  "prj-youtube": {
    link: "",
    images: 9,
    year: 2024,
    date: "30 Dec 2024",
    title: "YouTube",
    shortDesc:
      "This YouTube clone, built with Flutter and the YouTube API, offers ad-free video playback, local data storage with Hive, channel subscriptions, history tracking, live search suggestions, and video commenting for easy access.",
    source: "",
    desc: "This YouTube clone, developed using Flutter and the Flutter YouTube API, provides an ad-free video streaming experience. It utilizes Hive for local data storage, allowing users to manage their subscriptions, track watch history, and organize playlists. The app features live search suggestions for quick video discovery and enables users to comment on videos, making it easier to revisit them later. With a smooth and user-friendly interface, it enhances the overall video-watching experience while offering greater control over content management.",
    language: [["Flutter", 100, "flutter"]],
    features: [
      ["Contains no Ads.", "free of that spams"],
      ["Distraction free Interface", "focus"],
      ["History Support.", "Keep track of your progress"],
      ["Mini Player Support.", "Watch while you do other work"],
      ["Youtube Clone.", "Exclusive!"],
      ["Safe, Secure, Fast.", "Start Searching..."],
    ],
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of Youtube App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "Pre Requistic",
        "• Android Studio be Installed. • Flutter Should be Installed. • Then Install the necessary modules.",
      ],
      [
        "What Next!",
        "Now you have to run a command 'flutter build apk --release'",
      ],
      [
        "Fininsing!",
        "Open the apk file in any android device and start enjoying youtube that interuppting ads..",
      ],
    ],
    projectType: "flutter",
    review: [],
  },
  "prj-periodic": {
    link: "https://github.com/pranayvips/periodic-web",
    year: 2023,
    date: "09 Dec 2023",
    title: "Periodic Reference",
    images: 7,
    desc: "A visually appealing and user-friendly periodic table website, featuring detailed element information,images, and an intuitive interface.Designed to help students and enthusiasts explore chemical elements effortlessly.• Integrated 2+ interactive games to enhance engagement and improve memorization. These games reinforce learningthrough fun challenges that help users retain key information about elements, atomic structures, and properties",
    language: [
      ["Html", 82.2, "html"],
      ["Javascript", 12.1, "js"],
      ["Css", 5.4, "css"],
      ["Python", 1, "python"],
    ],
    features: [
      ["Data available for download..", ""],
      ["Includes 2+ games to help remember elements.", ""],
      ["Multiple ways to analyze properties.", ""],
      ["Play games and track your score.", ""],
      ["Track Your Score.", ""],
      ["Adaptive layout.", ""],
    ],
    projectType: "web",
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of 'Digital Periodic Reference' App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "How to Run?",
        "Just run the index.html file and you are ready to go! Enjoy and learn...",
      ],
    ],
    review: [],
  },
  "prj-homepage": {
    link: "https://github.com/pranayvips/homepage-rica",
    year: 2025,
    date: "02 July 2025",
    title: "Rica - Browser Homepage",
    images: 5,
    desc: `I’ve built a modern and responsive browser extension using React.js that transforms your new tab into a productive and visually appealing homepage. Designed with a minimal and clean UI, the extension enhances your browsing experience with built-in features such as:

🔖 Bookmark Viewer with search functionality for quick access

✅ To-Do List for better task and time management

🌦️ Real-Time Weather Widget to stay updated at a glance

⚙️ Customizable Settings to personalize your homepage

✨ Smooth Animations and transitions for an engaging feel

This extension is built to boost everyday productivity while maintaining a lightweight and elegant design — all right from your browser’s new tab.`,
    language: [
      ["React Js", 83, "react"],
      ["Tailwind Css", 16, "tailwind"],
      ["Css", 1, "css"],
    ],
    features: [
      [
        "🧭 Clean and Minimal Homepage",
        "Replaces the default new tab with a sleek, distraction-free design.",
      ],
      [
        "🔖 Bookmark Viewer with Search.",
        "Easily browse and search through your saved bookmarks.",
      ],
      [
        "✅ To-Do List Integration",
        "Manage tasks and boost productivity with a built-in to-do manager.",
      ],
      [
        "🌦️ Live Weather Widget.",
        "Displays current weather updates directly on the homepage.",
      ],
      [
        "⚙️ Customizable Settings.",
        "Personalize the layout, appearance, and functionality of the page.",
      ],
      [
        "✨ Smooth Animations",
        "Enhanced with modern, fluid animations for a refined user experience.",
      ],
    ],
    projectType: "React",
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of 'Digital Periodic Reference' App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "Installation of Modules",
        "Open the directory in which package.json file is available. First run the command 'npm install' then From there You can run 'npm run dev' to view. But bookmarks section will not be available here.",
      ],
      [
        "Making it default Extension",
        "Run the command 'npm build dev'. then a folder name 'dist' will be created. Copy the manifest.json file from here to dist folder.",
      ],
      [
        "Adding in Browser",
        "Open the extension setting page. From there enable developer mode. Then click on button 'Load Unpacked', then select the 'dist' folder which you have created now.",
      ],
      [
        "Tadaaa!!",
        "Now on every new page you will see a elegant and clean looking page! All Done.",
      ],
    ],
    review: [],
  },
  "prj-reviewlens": {
    link: "https://github.com/pranayvips/reviewlens",
    year: 2025,
    date: "19 May 2025",
    title: "ReviewLens",
    images: 5,
    desc: `ReviewLens is a smart and responsive web application designed to help users analyze, compare, and extract insights from product reviews across different platforms. Built with HTML, CSS, and JavaScript on the frontend, and powered by Flask and NLTK on the backend, the platform brings data-driven decision-making to online shoppers and product researchers.`,
    language: [
      ["React Js", 83, "react"],
      ["Tailwind Css", 16, "tailwind"],
      ["Css", 1, "css"],
    ],
    features: [
      [
        "📄 CSV Upload for Review Analysis.",
        "Upload CSV files containing product reviews and get meaningful insights instantly.",
      ],
      [
        "🔍 Search Product Reviews by Name.",
        "Easily compare similar products from different companies and get best option based on reviews.",
      ],
      [
        "📷 Barcode Search Support",
        "Search for a product using its barcode to quickly fetch its details and review history.",
      ],
      [
        "💸 Price Comparison Across Platforms",
        "Check and compare the prices of a product across multiple e-commerce platforms.",
      ],
      [
        "📊 Sentiment Analysis with NLTK",
        "Backend uses natural language processing to analyze review sentiment and provide helpful feedback.",
      ],
      [
        "📱 Responsive & User-Friendly UI",
        "Fully responsive design for both desktop and mobile devices, ensuring a smooth user experience.",
      ],
    ],
    projectType: "React",
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of 'ReviewLens' App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "Installation of Modules",
        "Install the Necessary modules mentioned in app.py and modules.py file.",
      ],
      [
        "Run the file.",
        "Run the app.py file and click on the link generated in console and you are ready to go.",
      ],
      [
        "Final Touches...",
        "Make sure to sign in first and remember credential and to save the data.",
      ],
    ],
    review: [],
  },
  "prj-shoestop": {
    link: "https://github.com/pranayvips/shoes",
    year: 2025,
    date: "03 April 2025",
    title: "ShoeStop",
    images: 7,
    desc: `ShoeStop is a clean, responsive, and modern e-commerce website dedicated to helping users discover and buy stylish footwear with ease. Designed with user experience in mind, the platform offers a sleek interface with essential shopping features including authentication, cart management, and secure payment options.`,
    language: [
      ["Css", 36, "css"],
      ["Html", 33, "html"],
      ["Javascript", 29, "js"],
      ["Node Js", 2, "node"],
    ],
    features: [
      [
        "👤 User Authentication",
        "Sign up and log in functionality for a personalized shopping experience.",
      ],
      [
        "🛒 Cart Management",
        "Add, remove, and manage products in the shopping cart before checkout.",
      ],
      [
        "💳 Payment Integration",
        "Seamless checkout with integrated payment methods for real transactions.",
      ],
      [
        "🌗 Light & Dark Mode",
        "Switch between light and dark themes for visual comfort and style.",
      ],
      [
        "📱 Fully Responsive Design",
        "Optimized for all screen sizes — mobile, tablet, and desktop.",
      ],
      [
        "✨ Clean and Engaging UI",
        "Visually appealing layout with intuitive navigation to enhance user engagement.",
      ],
    ],
    projectType: "Node",
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of 'ReviewLens' App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "Installation of Modules",
        "Install the Necessary modules by running the command 'npm install'",
      ],
      ,
      ["All done!", "Run the app by command 'npm run dev' and ready to go..."],
    ],
    review: [],
  },
  "prj-gemini": {
    link: "https://github.com/pranayvips/gemini",
    year: 2025,
    date: "01 Feb 2025",
    title: "Gemini",
    images: 5,
    desc: `The Gemini Clone is a front-end replica of Google's Gemini (formerly Bard), built using React.js to mimic the sleek UI and conversational design of the original AI assistant. This project focuses on recreating the core user interface and interaction style, offering a modern and responsive chatbot experience.`,
    language: [
      ["React", 57, "react"],
      ["Css", 36, "css"],
      ["Html", 5, "html"],
      ["Javascript", 3, "js"],
    ],
    features: [
      [
        "💬 Chat Interface",
        "Clean and responsive UI resembling Gemini's layout and flow.",
      ],
      [
        "⚡ Instant Typing Animation",
        "Simulates real-time bot responses for a realistic feel.",
      ],
      [
        "🌗 Dark & Light Mode Toggle",
        "Theme switching support for personalized user experience.",
      ],
      [
        "🧠 Input Handling & Auto Scroll",
        "User-friendly input box with smart scrolling behavior after each response.",
      ],
      [
        "⚛️ React Component Architecture",
        "Built with modular and reusable components for clean code structure.",
      ],
      [
        "📱 Responsive Design",
        "Optimized for mobile, tablet, and desktop devices.",
      ],
    ],
    projectType: "Node",
    steps: [
      [
        "Welcome to setup!!",
        "This guide will walk you through the installation of 'ReviewLens' App.",
      ],
      [
        "Download the file",
        "Start by downloading the file from the 'Source Code' button.",
      ],
      [
        "Installation of Modules",
        "Install the Necessary modules by running the command 'npm install'",
      ],
      ,
      ["All done!", "Run the app by command 'npm run dev' and ready to go..."],
    ],
    review: [],
  },
};

const StepperComponent = ({ array }: { array: any }) => {
  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      {array.map((val: any, index: number) => {
        return (
          <Step key={index}>
            <h2 className="text-[#5227FF] text-2xl mb-2">{val[0]}</h2>
            <p className="text-base">{val[1]}</p>
          </Step>
        );
      })}
    </Stepper>
  );
};

const ProjectDisplay = ({
  prjName = "prj-reviewlens",
  setPrjName,
}: {
  setPrjName: any;
  prjName: string;
}) => {
  const containerref = useRef<HTMLDivElement | null>(null);
  const containerrefTab = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageRefTab = useRef(null);
  const [imageTab, setImageTab] = useState(0);
  const [image, setImage] = useState<Array<any> | null>([]);
  const [navtab, setNavTab] = useState(0);

  const NavbarLinks = ({
    title,
    current,
  }: {
    title: string;
    current: number;
  }) => {
    return (
      <p
        onClick={() => setNavTab(current)}
        className={`text-base h-[35px] min-w-[100px] pr-10 sm:pr-0 group flex flex-col overflow-hidden border-gray-900  dark:border-gray-200 ${
          navtab == current && "border-b-2"
        }`}
      >
        <span className="h-[35px] group-hover:translate-y-[-35px] px-5 py-1 transition-transform duration-200 cursor-pointer">
          {title}
        </span>
        <span className="h-[35px] group-hover:translate-y-[-32px] px-5 py-1 transition-transform duration-200 cursor-pointer">
          {title}
        </span>
      </p>
    );
  };

  const NavbarLinkPhone = ({icon,current}:{icon:any,current:number}) =>{
    return <p onClick={()=>setNavTab(current)} className={`${current==navtab && "bg-gray-200 dark:bg-gray-900"} py-2 rounded-lg flex justify-center`}>{icon}</p>
  }

  useEffect(() => {
    // this is to set the image of correct prjname
    if (!prjName || !data[prjName as keyof typeof data]) return;
    const imgCount = data[prjName as keyof typeof data].images;
    if (typeof imgCount !== "number") return;
    const imgList = Array.from(
      { length: imgCount },
      (_, i) => `${prjName}/${i}.png`
    );
    setImage(imgList);

    //     // this is for click on iamge and setting on left tab
    if (!containerref.current) return;
    containerref.current.addEventListener("click", (e: any) => {
      if (e.target.classList.contains("thumb")) {
        if (imageRef.current) {
          imageRef.current.src = e.target.src;
        }
      }
    });
  }, []);

  return (
    <section className="fixed top-0 left-0 z-1000 select-none">
      <div
        className="absolute h-screen w-screen bg-[rgba(0,0,0,0.8)]"
        onClick={() => setPrjName("")}
      ></div>
      <aside className="bg-white dark:bg-black border-1 rounded-xl border-[#777] grid grid-rows-[auto_1fr] relative bg-[#111] w-screen h-[75vh] mt-[5vh] sm:w-[80vw] sm:ml-[10vw] sm:h-[80vh] sm:mt-[10vh]">
        <nav className="max-w-screen sm:max-w-screen grid grid-cols-[repeat(3,1fr_auto_auto)] sm:flex  items-center gap-3 sm:px-5 py-2 border-b-1 border-[#444] ">
          <div className="flex items-center gap-3">
            <h1 className="pl-3 text-2xl font-normal text-left">
              {data[prjName as keyof typeof data]["title"]}
            </h1>
          </div>
          {/* links */}
          <div className="col-span-3 gap-1 row-2 sm:ml-auto grid grid-cols-[repeat(6,1fr)] gap-2 w-screen sm:w-max overflow-x-auto sm:hidden">
            <NavbarLinkPhone icon={<ImageIcon />} current={5} />
            <NavbarLinkPhone icon={<InfoIcon />} current={0} />
            <NavbarLinkPhone icon={<LanguagesIcon />} current={1} />
            <NavbarLinkPhone icon={<AxeIcon />} current={2} />
            <NavbarLinkPhone icon={<LineSquiggleIcon />} current={3} />
            <NavbarLinkPhone icon={<StarIcon />} current={4} />

          </div>
          <div className="col-span-3 row-2 sm:ml-auto hidden sm:flex gap-2 w-screen sm:w-max overflow-x-auto">
            {/* <div className="sm:hidden">
              <NavbarLinks title="Image" current={5} />
            </div> */}
            <NavbarLinks title="About" current={0} />
            <NavbarLinks title="Langugages" current={1} />
            <NavbarLinks title="Features" current={2} />
            <NavbarLinks title="Roadmap" current={3} />
            <NavbarLinks title="Review's" current={4} />
          </div>
          {/* Buttons */}
          <div className="sm:ml-auto flex gap-5">
            <SourceCode link={data[prjName as keyof typeof data]["link"]} name="Code" classname="" />
            {/* <button className='bg-white text-black text-base px-5 py-3 rounded-xl cursor-pointer' onClick={()=>window.open(data[prjName]["link"])}>Source Code</button> */}
            <button
              className="hover:bg-red-600 bg-red-500  text-base px-5 py-1 rounded-sm cursor-pointer text-white transition-bg duration-400"
              onClick={() => setPrjName("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div className="grid sm:grid-cols-[1fr_1fr] h-full max-h-[calc(80vh-60px)] overflow-y-auto">
          <div className="hidden sm:block left px-10 py-5 grid grid-rows-[auto_1fr] gap-5 justify-center max-h-full overflow-hidden">
            <div className="max-w-100%">
              {image?.length && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  ref={imageRef}
                  src={image[0]}
                  className="w-full rounded-lg max-h-[40vh]"
                  alt="Main Image"
                />
              )}
            </div>

            <div
              className="grid grid-cols-[repeat(4,1fr)] gap-4 gray-scrollbar mt-3"
              ref={containerref}
            >
              {image?.map((val, index) => {
                return (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index / 2,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    src={val}
                    alt={`image ${index}`}
                    className="thumb rounded-lg h-20 object-cover cursor-pointer hover:opacity-80"
                  />
                );
              })}
            </div>
          </div>
          <div className="right px-1 py-5">
            {navtab == 5 && (
              <div className="left px-2 grid grid-rows-[auto_1fr] gap-5 justify-center max-h-full overflow-hidden">
                <div className="max-w-100%">
                  {image?.length && (
                    <img
                      ref={imageRefTab}
                      src={image[imageTab]}
                      className="w-full rounded-lg max-h-[40vh]"
                      alt="Main Image"
                    />
                  )}
                </div>

                <div
                  className="grid grid-cols-[repeat(4,1fr)] gap-4 overflow-y-auto h-full gray-scrollbar"
                  ref={containerrefTab}
                >
                  {image?.map((val, index) => {
                    return (
                      <img
                        onClick={() => setImageTab(index)}
                        src={val}
                        alt={`image ${index}`}
                        className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80"
                      />
                    );
                  })}
                </div>
              </div>
            )}
            {navtab == 0 && (
              <div className="flex flex-col h-full items-start px-2 sm:px-0">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className=" text-xs font-bold mb-3"
                >
                  {data[prjName as keyof typeof data]["year"]}
                </motion.p>
                <motion.p
                  className=" text-5xl font-thin pb-8"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {data[prjName as keyof typeof data]["title"]}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className=" text-base font-light pr-5 text-left"
                >
                  {data[prjName as keyof typeof data]["desc"]}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center mt-10"
                >
                  <SourceCode link={data[prjName as keyof typeof data]["link"]} name="Source Code" classname="" />
                  <Share />
                </motion.div>
                {/* <button className='bg-white px-2 text-black px-5 py-3 rounded-lg mt-10 w-max mr-10 cursor-pointer' onClick={()=>window.open(data[prjName]["link"])}>Source Code</button> */}
              </div>
            )}

            {navtab == 1 && (
              <div className="flex flex-col px-2 sm:px-0 pb-10">
                <MyBarChart
                  language={data[prjName as keyof typeof data]["language"]}
                />
              </div>
            )}

            {navtab == 2 && (
              <div className="flex flex-col h-full px-2 sm:px-0">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-[50px] flex flex-col w-max pr-4 mb-5 group overflow-hidden cursor-default`}
                >
                  <span className="h-[50px] items-center flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
                    Features
                    <Feather />
                  </span>
                  <span className="h-[50px] items-center flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
                    Features
                    <Feather />
                  </span>
                </motion.h1>
                <div className="sm:pr-5">
                  {data[prjName as keyof typeof data]["features"].map(
                    (val: any, index: number) => {
                      return (
                        <motion.p
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index / 2,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          key={index}
                          className=" flex bg-gray-200 dark:bg-[#111] items-center text-left gap-2 mb-3 sm:mb-3 cursor-default text-lg px-5 py-3 hover:bg-gray-100 dark:hover:bg-[#1f1f1f] rounded transition-bg duration-200"
                        >
                          <CheckCircle />
                          {val[0]}
                        </motion.p>
                      );
                    }
                  )}
                </div>
              </div>
            )}
            {navtab == 3 && (
              <div className="flex flex-col h-full mt-5 px-2 sm:px-0 text-foreground">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`text-left h-[50px] hidden sm:flex flex-col pr-4 group overflow-hidden cursor-default`}
                >
                  <span className="h-[50px] mb-2 items-center text-left flex text-3xl whitespace-nowrap font-light gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
                    Step's To Installation
                    <LineSquiggle />
                  </span>
                  <span className="h-[50px] items-center  flex  text-3xl whitespace-nowrap font-light gap-3 transition-transform duration-200 group-hover:translate-y-[-45px]">
                    Step's To Installation
                    <LineSquiggle />
                  </span>
                </motion.h1>
                <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-[50px] text-left sm:hidden flex text-3xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
                    Step's To Installation
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-12"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16"
                          className="stroke-black dark:stroke-white"
                          stroke-width="1"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.8149 12C18.8149 11.4637 18.6892 11.2462 18.4379 10.8112C17.5834 9.33247 15.6561 7 12 7C8.34395 7 6.41664 9.33247 5.56212 10.8112C5.31077 11.2462 5.18509 11.4637 5.18509 12C5.18509 12.5363 5.31077 12.7538 5.56212 13.1888C6.41664 14.6675 8.34395 17 12 17C15.6561 17 17.5834 14.6675 18.4379 13.1888C18.6892 12.7538 18.8149 12.5363 18.8149 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z"
                          className="fill-black dark:fill-white"
                        ></path>{" "}
                      </g>
                    </svg></motion.h1>
                <StepperComponent
                  array={data[prjName as keyof typeof data]["steps"]}
                />
              </div>
            )}
            {navtab == 4 && (
              <div className="px-2 sm:px-0">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-[50px] flex flex-col w-max pr-4 group overflow-hidden cursor-default`}
                >
                  <span className="h-[50px] mb-3 flex items-center text-3xl whitespace-nowrap font-light gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
                    Review's
                    <Star className="text-yellow-500 fill-yellow-500" />
                  </span>
                  <span className="h-[50px]  flex items-center text-3xl whitespace-nowrap font-light gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]">
                    Review's
                    <Star className="text-yellow-500 fill-yellow-500" />
                  </span>
                </motion.h1>
                <div>
                  <form className="flex flex-col  sm:pr-10 gap-5 mt-10">
                    <Rating max={5} />
                    <textarea
                      name=""
                      id=""
                      required
                      className="bg-gray-200 dark:bg-[#111] outline-none  rounded-lg h-40 resize-none px-5 py-5"
                      placeholder="Write your comment your suggestion here if any..."
                    ></textarea>
                    {/* <button className='bg-blue-700  py-2 text-lg rounded cursor-pointer mt-auto text-white font-bold'>Submit</button> */}
                    <Submit />
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default ProjectDisplay;
