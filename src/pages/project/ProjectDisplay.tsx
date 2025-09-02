import { useEffect, useRef, useState } from 'react'
import MyBarChart from './MyBarChart'
import Stepper, { Step} from '@/components/Components/Stepper/Stepper'
import Rating from './Rating'
import { Share, SourceCode, Submit } from '@/components/mypart/SourceCode'


const data = {
    "prj-split":{
        "link":"https://github.com/pranayvips/webProjects/tree/main/split",
    "year": 2024,
    "date": "14 Jun 2024",
    "title": "Split Money",
    "source": "https://github.com/pranayvips/split",
    "images": 6,
    "desc": "This is a bill-splitting app designed to simplify expense management when going out with friends. It helps calculate how much each person needs to pay, ensuring fair cost distribution. The app provides a detailed transaction list, making it easy to track payments and dues. Additionally, it includes a history tab where users can review past expenses and transactions. With an easy sign-up process, users can quickly create accounts and securely store their data. The app also allows seamless management of older records and provides an option to share expense details with friends for better coordination.",
    "language": [
      [
        "Html",
        33.2,
        'html'
      ],
      [
        "Javascript",
        33.4,
        'js'
      ],
      [
        "Css",
        33.6,
        'css'
      ]
    ],
    "features": [
      [
        "Automated Expense Splitting",
        "Debt/Credit"
      ],
      [
        "Keeps track of History",
        "History Tab"
      ],
      [
        "Group Expense Handling.",
        "Manage"
      ],
      [
        "User-Friendly Interface.",
        "Simple & Elegant"
      ],
      [
        "All Transaction.",
        "Manage at one place"
      ],
      [
        "Adaptive layout.",
        "Responsive design"
      ]
    ],
    "projectType": "web",
    "reviews": [],
    "steps":[["Welcome to setup!!","This guide will walk you through the installation of Split App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["How to Run?","Start the project by running it on a local or live development server."],["Final Touches","Create an account to get started. Add friends using the input fields and hover on names for more details."]]
  },
  "prj-tictactoe":{
    "link":"https://github.com/pranayvips/tictactoe",
    "year": 2024,
    "date": "15 Jan 2024",
    "title": "Tic-Tac-Toe",
    "images": 7,
    "desc": "This Tic Tac Toe web app, developed using Flask, allows users to play against varying difficulty levels or compete in 1v1 matches. It features a chat screen for real-time interaction, a profile page that tracks wins and losses, and a notification page to keep users updated on game events. The integrated chat system ensures seamless communication with other players, enhancing the overall gaming experience.",
    "language": [
      [
        "Html",
        13,
        "html"
      ],
      [
        "Javascript",
        22,
        "js"
      ],
      [
        "Css",
        40,
        "css"
      ],[
        "Flask",
        10,
        "flask"
      ]
    ],
    "features": [
      [
        "Single & Multiplayer Mode",
        "Single? don’t worry play with us"
      ],
      [
        "Real-Time Chat",
        "Chat with other users."
      ],
      [
        "Profile Tracking.",
        "Keep track of your winnning."
      ],
      [
        "Notification System.",
        "get notified."
      ],
      [
        "Flask-Based Backend.",
        "Smooth performance"
      ],
      [
        "Simple & Clean look.",
        "User-Friendly Interface"
      ]
    ],
    "steps": [
        ["Welcome to setup!!","This guide will walk you through the installation of 'Tic Tac Toe' App."],
        ["Download the file","Start by downloading the file from the 'Source Code' button."],
        ["Running the script","Open the directory in which 'app.py' file is located"],
        ["Installation Modules","Install require modules 'flask' "],
        ["Ready to Go!","Setup is done.... open the local link provided in console by flask."]
    ],
    "projectType": "flask",
    "review": [
      ]
  },
  "prj-youtube":{
    "link":"",
    "images":9,
    "year": 2024,
    "date": "30 Dec 2024",
    "title": "YouTube",
    "shortDesc": "This YouTube clone, built with Flutter and the YouTube API, offers ad-free video playback, local data storage with Hive, channel subscriptions, history tracking, live search suggestions, and video commenting for easy access.",
    "source": "",
    "desc": "This YouTube clone, developed using Flutter and the Flutter YouTube API, provides an ad-free video streaming experience. It utilizes Hive for local data storage, allowing users to manage their subscriptions, track watch history, and organize playlists. The app features live search suggestions for quick video discovery and enables users to comment on videos, making it easier to revisit them later. With a smooth and user-friendly interface, it enhances the overall video-watching experience while offering greater control over content management.",
    "language": [
      [
        "Flutter",
        100,
        "flutter"
      ]
    ],
    "features": [
      [
        "Contains no Ads.",
        "free of that spams"
      ],
      [
        "Distraction free Interface",
        "focus"
      ],
      [
        "History Support.",
        "Keep track of your progress"
      ],
      [
        "Mini Player Support.",
        "Watch while you do other work"
      ],
      [
        "Youtube Clone.",
        "Exclusive!"
      ],
      [
        "Safe, Secure, Fast.",
        "Start Searching..."
      ]
    ],
    "steps":[["Welcome to setup!!","This guide will walk you through the installation of Youtube App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["Pre Requistic","• Android Studio be Installed. • Flutter Should be Installed. • Then Install the necessary modules."],["What Next!","Now you have to run a command 'flutter build apk --release'"],["Fininsing!","Open the apk file in any android device and start enjoying youtube that interuppting ads.."]],
    "projectType": "flutter",
    "review": [
    ]
  },
  "prj-periodic":{
    "link":"https://github.com/pranayvips/periodic-web",
    "year": 2023,
    "date": "09 Dec 2023",
    "title": "Periodic Reference",
    "images": 7,
    "desc": "A visually appealing and user-friendly periodic table website, featuring detailed element information,images, and an intuitive interface.Designed to help students and enthusiasts explore chemical elements effortlessly.• Integrated 2+ interactive games to enhance engagement and improve memorization. These games reinforce learningthrough fun challenges that help users retain key information about elements, atomic structures, and properties","language": [
      [
        "Html",
        82.2,
        "html"
      ],
      [
        "Javascript",
        12.1,
        "js"
      ],
      [
        "Css",
        5.4,
        "css"
      ],
      [
        "Python",
        1,
        "python"
      ]
    ],
    "features": [
      [
        "Data available for download..",
        ""
      ],
      [
        "Includes 2+ games to help remember elements.",
        ""
      ],
      [
        "Multiple ways to analyze properties.",
        ""
      ],
      [
        "Play games and track your score.",
        ""
      ],
      [
        "Track Your Score.",
        ""
      ],
      [
        "Adaptive layout.",
        ""
      ]
    ],
    "projectType": "web",
    "steps": [["Welcome to setup!!","This guide will walk you through the installation of 'Digital Periodic Reference' App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["How to Run?","Just run the index.html file and you are ready to go! Enjoy and learn..."]],
    "review": [
    ]
  },
  "prj-homepage":{
    "link":"https://github.com/pranayvips/homepage-rica",
    "year": 2025,
    "date": "02 July 2025",
    "title": "Rica - Browser Homepage",
    "images": 5,
    "desc": `I’ve built a modern and responsive browser extension using React.js that transforms your new tab into a productive and visually appealing homepage. Designed with a minimal and clean UI, the extension enhances your browsing experience with built-in features such as:

🔖 Bookmark Viewer with search functionality for quick access

✅ To-Do List for better task and time management

🌦️ Real-Time Weather Widget to stay updated at a glance

⚙️ Customizable Settings to personalize your homepage

✨ Smooth Animations and transitions for an engaging feel

This extension is built to boost everyday productivity while maintaining a lightweight and elegant design — all right from your browser’s new tab.`,
    "language": [
      [
        "React Js",
        83,
        "react"
      ],
      [
        "Tailwind Css",
        16,
        "tailwind"
      ],
      [
        "Css",
        1,
        "css"
      ],
    ],
    "features": [
      [
        "🧭 Clean and Minimal Homepage",
        "Replaces the default new tab with a sleek, distraction-free design."
      ],
      [
        "🔖 Bookmark Viewer with Search.",
        "Easily browse and search through your saved bookmarks."
      ],
      [
        "✅ To-Do List Integration",
        "Manage tasks and boost productivity with a built-in to-do manager."
      ],
      [
        "🌦️ Live Weather Widget.",
        "Displays current weather updates directly on the homepage."
      ],
      [
        "⚙️ Customizable Settings.",
        "Personalize the layout, appearance, and functionality of the page."
      ],
      [
        "✨ Smooth Animations",
        "Enhanced with modern, fluid animations for a refined user experience."
      ]
    ],
    "projectType": "React",
    "steps": [["Welcome to setup!!","This guide will walk you through the installation of 'Digital Periodic Reference' App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["Installation of Modules","Open the directory in which package.json file is available. First run the command 'npm install' then From there You can run 'npm run dev' to view. But bookmarks section will not be available here."],["Making it default Extension","Run the command 'npm build dev'. then a folder name 'dist' will be created. Copy the manifest.json file from here to dist folder."],["Adding in Browser","Open the extension setting page. From there enable developer mode. Then click on button 'Load Unpacked', then select the 'dist' folder which you have created now."],["Tadaaa!!","Now on every new page you will see a elegant and clean looking page! All Done."]],
    "review": [
    ]
  },
  "prj-reviewlens":{
    "link":"https://github.com/pranayvips/reviewlens",
    "year": 2025,
    "date": "19 May 2025",
    "title": "ReviewLens",
    "images": 5,
    "desc": `ReviewLens is a smart and responsive web application designed to help users analyze, compare, and extract insights from product reviews across different platforms. Built with HTML, CSS, and JavaScript on the frontend, and powered by Flask and NLTK on the backend, the platform brings data-driven decision-making to online shoppers and product researchers.`,
    "language": [
      [
        "React Js",
        83,
        "react"
      ],
      [
        "Tailwind Css",
        16,
        "tailwind"
      ],
      [
        "Css",
        1,
        "css"
      ],
    ],
    "features": [
      [
        "📄 CSV Upload for Review Analysis.",
        "Upload CSV files containing product reviews and get meaningful insights instantly."
      ],
      [
        "🔍 Search Product Reviews by Name.",
        "Easily compare similar products from different companies and get best option based on reviews."
      ],
      [
        "📷 Barcode Search Support",
        "Search for a product using its barcode to quickly fetch its details and review history."
      ],
      [
        "💸 Price Comparison Across Platforms",
        "Check and compare the prices of a product across multiple e-commerce platforms."
      ],
      [
        "📊 Sentiment Analysis with NLTK",
        "Backend uses natural language processing to analyze review sentiment and provide helpful feedback."
      ],
      [
        "📱 Responsive & User-Friendly UI",
        "Fully responsive design for both desktop and mobile devices, ensuring a smooth user experience."
      ]
    ],
    "projectType": "React",
    "steps": [["Welcome to setup!!","This guide will walk you through the installation of 'ReviewLens' App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["Installation of Modules","Install the Necessary modules mentioned in app.py and modules.py file."],["Run the file.","Run the app.py file and click on the link generated in console and you are ready to go."],["Final Touches...","Make sure to sign in first and remember credential and to save the data."]],
    "review": [
    ]
  },
  "prj-shoestop":{
    "link":"https://github.com/pranayvips/shoes",
    "year": 2025,
    "date": "03 April 2025",
    "title": "ShoeStop",
    "images": 7,
    "desc": `ShoeStop is a clean, responsive, and modern e-commerce website dedicated to helping users discover and buy stylish footwear with ease. Designed with user experience in mind, the platform offers a sleek interface with essential shopping features including authentication, cart management, and secure payment options.`,
    "language": [
      [
        "Css",
        36,
        "css"
      ],
      [
        "Html",
        33,
        "html"
      ],
      [
        "Javascript",
        29,
        "js"
      ],
      [
        "Node Js",
        2,
        "node"
      ]
    ],
    "features": [
      [
        "👤 User Authentication",
        "Sign up and log in functionality for a personalized shopping experience."
      ],
      [
        "🛒 Cart Management",
        "Add, remove, and manage products in the shopping cart before checkout."
      ],
      [
        "💳 Payment Integration",
        "Seamless checkout with integrated payment methods for real transactions."
      ],
      [
        "🌗 Light & Dark Mode",
        "Switch between light and dark themes for visual comfort and style."
      ],
      [
        "📱 Fully Responsive Design",
        "Optimized for all screen sizes — mobile, tablet, and desktop."
      ],
      [
        "✨ Clean and Engaging UI",
        "Visually appealing layout with intuitive navigation to enhance user engagement."
      ]
    ],
    "projectType": "Node",
    "steps": [["Welcome to setup!!","This guide will walk you through the installation of 'ReviewLens' App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["Installation of Modules","Install the Necessary modules by running the command 'npm install'"],,["All done!","Run the app by command 'npm run dev' and ready to go..."]],
    "review": [
    ]
  },
  "prj-gemini":{
    "link":"https://github.com/pranayvips/gemini",
    "year": 2025,
    "date": "01 Feb 2025",
    "title": "Gemini",
    "images": 5,
    "desc": `The Gemini Clone is a front-end replica of Google's Gemini (formerly Bard), built using React.js to mimic the sleek UI and conversational design of the original AI assistant. This project focuses on recreating the core user interface and interaction style, offering a modern and responsive chatbot experience.`,
    "language": [
      [
        "React",
        57,
        "react"
      ],
      [
        "Css",
        36,
        "css"
      ],
      [
        "Html",
        5,
        "html"
      ],
      [
        "Javascript",
        3,
        "js"
      ]
    ],
    "features": [
      [
        "💬 Chat Interface",
        "Clean and responsive UI resembling Gemini's layout and flow."
      ],
      [
        "⚡ Instant Typing Animation",
        "Simulates real-time bot responses for a realistic feel."
      ],
      [
        "🌗 Dark & Light Mode Toggle",
        "Theme switching support for personalized user experience."
      ],
      [
        "🧠 Input Handling & Auto Scroll",
        "User-friendly input box with smart scrolling behavior after each response."
      ],
      [
        "⚛️ React Component Architecture",
        "Built with modular and reusable components for clean code structure."
      ],
      [
        "📱 Responsive Design",
        "Optimized for mobile, tablet, and desktop devices."
      ]
    ],
    "projectType": "Node",
    "steps": [["Welcome to setup!!","This guide will walk you through the installation of 'ReviewLens' App."],["Download the file","Start by downloading the file from the 'Source Code' button."],["Installation of Modules","Install the Necessary modules by running the command 'npm install'"],,["All done!","Run the app by command 'npm run dev' and ready to go..."]],
    "review": [
    ]
  }
}


const StepperComponent = ({array}:{array:any})=>{
    return <Stepper
            initialStep={1}
            onStepChange={(step) => {
                console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
        >
        {array.map((val:any,index:number)=>{
            return <Step key={index}>
                <h2 className='text-[#5227FF] text-2xl mb-2'>{val[0]}</h2>
                <p className='text-base'>{val[1]}</p>
            </Step>
        })}
        
    </Stepper>
}
 


const ProjectDisplay = ({prjName="prj-reviewlens",setPrjName}:{setPrjName:any,prjName:string}) => {
        const containerref = useRef<HTMLDivElement | null>(null)
        const containerrefTab = useRef<HTMLDivElement | null>(null)
        const imageRef = useRef<HTMLImageElement | null>(null)
        const imageRefTab = useRef(null)
        const [imageTab,setImageTab] = useState(0)
        const [image,setImage] = useState<Array<any> | null>([])
        const [navtab,setNavTab] = useState(0)

        const NavbarLinks = ({title,current}: { title: string; current: number })=>{
    return <p onClick={()=>setNavTab(current)} className={`text-base h-[35px] group flex flex-col overflow-hidden border-gray-900  dark:border-gray-200 ${navtab==current && "border-b-2"}`}>
        <span className='h-[35px] group-hover:translate-y-[-35px] px-5 py-1 transition-transform duration-200 cursor-pointer'>{title}</span>
        <span className='h-[35px] group-hover:translate-y-[-32px] px-5 py-1 transition-transform duration-200 cursor-pointer'>{title}</span>
    </p>
}

    useEffect(() => {
        // this is to set the image of correct prjname
        if (!prjName || !data[prjName  as keyof typeof data]) return;
        const imgCount = data[prjName  as keyof typeof data].images;
        if (typeof imgCount !== 'number') return;
        const imgList = Array.from({ length: imgCount }, (_, i) => `${prjName}/${i}.png`);
        setImage(imgList);
        
    //     // this is for click on iamge and setting on left tab
          if(!containerref.current)return
          containerref.current.addEventListener("click",(e:any)=>{
            if (e.target.classList.contains('thumb')) {
              if (imageRef.current) {
                imageRef.current.src = e.target.src;
              }
            }
      })
    }, [])
    
  return(
    <section className='fixed top-0 left-0 z-1000 select-none'>
        <div className='absolute h-screen w-screen bg-[rgba(0,0,0,0.8)]' onClick={()=>setPrjName("")}></div>
        <aside className='bg-white dark:bg-black border-1 rounded-xl border-[#777] grid grid-rows-[auto_1fr] relative bg-[#111] w-[90vw] ml-[5vw] h-[70vh] mt-[16vh] sm:w-[80vw] sm:ml-[10vw] sm:h-[80vh] sm:mt-[10vh]'>
            <nav className='max-w-[90vw] sm:max-w-100vw grid grid-cols-[repeat(3,1fr_auto_auto)] sm:flex  items-center gap-3 px-5 py-2 border-b-1 border-[#444] '>
              <div className='flex items-center gap-3'>
                <svg className='w-10' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.131 504.131" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-34.2429" y1="597.4838" x2="11.6721" y2="585.5878" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                        <stop offset="0" style={{"stopColor":"#29D3DA"}}></stop> 
                        <stop offset="0.519" style={{"stopColor":"#0077FF"}}></stop> 
                        <stop offset="0.999" style={{"stopColor":"#064093"}}></stop> 
                        <stop offset="1" style={{"stopColor":"#084698"}}></stop> 
                        </linearGradient>
                        <path style={{"fill":"url(#SVGID_1_)"}} d="M245.665,469.953c0,0-133.301-15.825-124.258-124.266 c9.035-108.457,149.118-162.674,106.189-248.533c0,0,67.773,54.225,2.253,173.97s48.577,128.788,47.443,79.076 c0,0,15.817,63.26-41.795,72.302c0,0,35.296,15.541,36.431,43.78c1.134,28.247-22.882,37.849-22.882,37.849 s16.258-11.099,13.564-23.442C260.631,471.647,245.665,469.953,245.665,469.953z"></path> 
                        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-18.3617" y1="587.5016" x2="-9.1356" y2="585.1066" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                            <stop offset="0.012" style={{"stopColor":"#E0B386"}}></stop> 
                            <stop offset="0.519" style={{"stopColor":"#DA498C"}}></stop> 
                            <stop offset="1" style={{"stopColor":"#961484"}}></stop> 
                        </linearGradient> 
                        <path style={{"fill":"url(#SVGID_2_)"}} d="M262.608,337.778c-2.946,6.002-9.051,10.169-16.187,10.169s-13.241-4.167-16.187-10.169 c-1.166,2.402-1.89,5.057-1.89,7.908c0,9.988,8.082,18.078,18.078,18.078c9.98,0,18.078-8.09,18.078-18.078 C264.507,342.827,263.774,340.181,262.608,337.778z"></path> 
                        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-16.6378" y1="592.1655" x2="-10.0328" y2="588.0555" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                            <stop offset="0.012" style={{"stopColor":"#E0B386"}}></stop> 
                            <stop offset="0.519" style={{"stopColor":"#DA498C"}}></stop> 
                            <stop offset="1" style={{"stopColor":"#961484"}}></stop> 
                        </linearGradient> 
                        <path style={{"fill":"url(#SVGID_3_)"}} d="M267.673,312.485c-3.765,3.954-9.523,5.711-15.084,3.97 c-5.545-1.733-9.295-6.459-10.114-11.847c-1.497,1.583-2.702,3.474-3.411,5.695c-2.418,7.767,1.906,16.037,9.673,18.479 c7.767,2.418,16.045-1.906,18.487-9.681C267.91,316.881,267.996,314.636,267.673,312.485z"></path> <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-14.2172" y1="595.8834" x2="-10.8772" y2="591.1864" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                            <stop offset="0.012" style={{"stopColor":"#E0B386"}}></stop> 
                            <stop offset="0.519" style={{"stopColor":"#DA498C"}}></stop> 
                            <stop offset="1" style={{"stopColor":"#961484"}}></stop> 
                        </linearGradient> 
                        <path style={{"fill":"url(#SVGID_4_)"}} d="M273.691,290.8c-3.71,1.631-8.145,1.174-11.453-1.591c-3.3-2.773-4.513-7.073-3.529-10.996 c-1.481,0.646-2.851,1.599-3.962,2.922c-3.875,4.616-3.277,11.516,1.331,15.391c4.624,3.868,11.524,3.277,15.415-1.339 C272.588,293.888,273.305,292.368,273.691,290.8z"></path> 
                        <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="-16.519" y1="569.5067" x2="-12.669" y2="568.5086" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                            <stop offset="0" style={{"stopColor":"#29D3DA"}}></stop> 
                            <stop offset="0.519" style={{"stopColor":"#0077FF"}}></stop> 
                            <stop offset="0.999" style={{"stopColor":"#064093"}}></stop> 
                            <stop offset="1" style={{"stopColor":"#084698"}}></stop> 
                        </linearGradient> 
                        <circle style={{"fill":"url(#SVGID_5_)"}} cx="244.925" cy="486.558" r="7.538"></circle> 
                        <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="-28.7832" y1="621.1344" x2="-11.2412" y2="616.5894" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                            <stop offset="0.012" style={{"stopColor":"#E0B386"}}></stop> 
                            <stop offset="0.519" style={{"stopColor":"#DA498C"}}></stop> 
                            <stop offset="1" style={{"stopColor":"#961484"}}></stop> 
                        </linearGradient> 
                        <path style={{"fill":"url(#SVGID_6_)"}} d="M216.292,99.415c0,0,0.008,72.302-45.757,77.383c-51.83,5.75-28.806-95.46,29.94-176.798 c0,0-32.957,70.609-20.338,98.288C195.592,132.167,216.292,99.415,216.292,99.415z"></path> 
                        <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="-18.5284" y1="592.3239" x2="18.3716" y2="582.7619" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0558 4969.6694)"> 
                            <stop offset="0.012" style={{"stopColor":"#E0B386"}}></stop> 
                            <stop offset="0.519" style={{"stopColor":"#DA498C"}}></stop> 
                            <stop offset="1" style={{"stopColor":"#961484"}}></stop> 
                        </linearGradient> 
                        <path style={{"fill":"url(#SVGID_7_)"}} d="M277.299,425.519c0,0,42.937-6.774,30.885-88.867 c-12.052-82.085-39.905-98.651-24.852-138.571c0,0-12.052,17.313,53.469,82.842c65.512,65.512,69.671,164.935-40.283,164.194 c0,0-26.498-0.165-29.003-12.06C266.003,425.897,277.299,425.519,277.299,425.519z"></path> 
                    </g>
                </svg>
                <h1 className=' text-2xl font-normal'>{data[prjName as keyof typeof data]["title"]}</h1>
                </div>
                {/* links */}
                <div className='col-span-3 row-2 sm:ml-auto flex gap-2 flex-wrap'>
                    <NavbarLinks title="About" current={0} />
                    <NavbarLinks title="Langugages" current={1} />
                    <NavbarLinks title="Features" current={2} />
                    <NavbarLinks title="Roadmap" current={3} />
                    <NavbarLinks title="Review's" current={4} />
                    <div className='sm:hidden'><NavbarLinks title="Image's" current={5} /></div>
                </div>
                {/* Buttons */}
                <div className='sm:ml-auto flex gap-5'>
                    <SourceCode name='Code' classname='' />
                    {/* <button className='bg-white text-black text-base px-5 py-3 rounded-xl cursor-pointer' onClick={()=>window.open(data[prjName]["link"])}>Source Code</button> */}
                    <button className='hover:bg-red-600 bg-red-500  text-base px-5 py-1 rounded-sm cursor-pointer text-white transition-bg duration-400' onClick={()=>setPrjName("")} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className='grid sm:grid-cols-[1fr_1fr] h-full max-h-[calc(80vh-60px)] overflow-y-scroll'>
                <div className="hidden sm:block left px-10 py-5 grid grid-rows-[auto_1fr] gap-5 justify-center max-h-full overflow-hidden">
                    <div className="max-w-100%">
                        {image?.length && <img ref={imageRef} src={image[0]} className="w-full rounded-lg max-h-[40vh]" alt="Main Image" />}
                    </div>

                    <div className="grid grid-cols-[repeat(4,1fr)] gap-4 overflow-y-auto h-full gray-scrollbar" ref={containerref}>
                        {image?.map((val,index)=>{
                            return <img src={val} alt={`image ${index}`} className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" />
                        })}
                    </div>
                </div>
                <div className="right px-1 py-5">
                  {navtab==5 && <div className="left px-2 grid grid-rows-[auto_1fr] gap-5 justify-center max-h-full overflow-hidden">
                    <div className="max-w-100%">
                        {image?.length && <img ref={imageRefTab} src={image[imageTab]} className="w-full rounded-lg max-h-[40vh]" alt="Main Image" />}
                    </div>

                    <div className="grid grid-cols-[repeat(4,1fr)] gap-4 overflow-y-auto h-full gray-scrollbar" ref={containerrefTab}>
                        {image?.map((val,index)=>{
                            return <img onClick={()=>setImageTab(index)} src={val} alt={`image ${index}`} className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" />
                        })}
                    </div>
                </div>}
                    {navtab==0 && <div className='flex flex-col h-full items-start px-2 sm:px-0'>
                        <p className=' text-xs font-bold mb-3'>{data[prjName  as keyof typeof data]["year"]}</p>
                        <p className=' text-5xl font-thin pb-8'>{data[prjName  as keyof typeof data]["title"]}</p>
                        <p className=' text-base font-light pr-5 text-left'>{data[prjName  as keyof typeof data]["desc"]}</p>
                        <div className='flex items-center mt-10'>
                            <SourceCode name='Source Code' classname='' />
                            <Share />
                        </div>
                        {/* <button className='bg-white px-2 text-black px-5 py-3 rounded-lg mt-10 w-max mr-10 cursor-pointer' onClick={()=>window.open(data[prjName]["link"])}>Source Code</button> */}
                    </div>}

                    {navtab==1 && <div className='flex flex-col h-full px-2 sm:px-0'>
                        <MyBarChart language={data[prjName  as keyof typeof data]["language"]} />
                    </div>}

                    {navtab==2 && <div className='flex flex-col h-full px-2 sm:px-0'>
                            <h1 className={`h-[50px] flex flex-col w-max pr-4 mb-5 group overflow-hidden cursor-default`}>
                                <span className='h-[50px]  flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]'>
                                    Features
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16" stroke="#ffffff" stroke-width="1" stroke-linecap="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8149 12C18.8149 11.4637 18.6892 11.2462 18.4379 10.8112C17.5834 9.33247 15.6561 7 12 7C8.34395 7 6.41664 9.33247 5.56212 10.8112C5.31077 11.2462 5.18509 11.4637 5.18509 12C5.18509 12.5363 5.31077 12.7538 5.56212 13.1888C6.41664 14.6675 8.34395 17 12 17C15.6561 17 17.5834 14.6675 18.4379 13.1888C18.6892 12.7538 18.8149 12.5363 18.8149 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z" fill="#ffffff"></path> </g></svg>
                                </span>
                                <span className='h-[50px]  flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]'>
                                    Features
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16" stroke="#ffffff" stroke-width="1" stroke-linecap="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8149 12C18.8149 11.4637 18.6892 11.2462 18.4379 10.8112C17.5834 9.33247 15.6561 7 12 7C8.34395 7 6.41664 9.33247 5.56212 10.8112C5.31077 11.2462 5.18509 11.4637 5.18509 12C5.18509 12.5363 5.31077 12.7538 5.56212 13.1888C6.41664 14.6675 8.34395 17 12 17C15.6561 17 17.5834 14.6675 18.4379 13.1888C18.6892 12.7538 18.8149 12.5363 18.8149 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z" fill="#ffffff"></path> </g></svg>
                                </span>
                            </h1>
                            <div className='sm:pr-5'>
                                {data[prjName  as keyof typeof data]["features"].map((val:any,index:number)=>{
                                    return <p key={index} className=' flex bg-[#111] items-center text-left gap-2 mb-3 sm:mb-1 cursor-default text-lg px-5 py-3 hover:bg-gray-200 dark:hover:bg-[#111] rounded transition-bg duration-200'><svg viewBox="0 -3.5 170 170" className='size-4' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" className='fill-black dark:fill-white'></path> <path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" className='fill-black dark:fill-white'></path> </g></svg>{val[0]}</p>
                                })}
                            </div>
                    </div>}
                    {navtab==3 && <div className='flex flex-col h-full max-w-[90vw] mt-5 px-2 sm:px-0'>
                        <h1 className={`h-[50px] flex flex-col w-max pr-4 group overflow-hidden cursor-default`}>
                                <span className='h-[50px]  flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]'>
                                    Step's To Installation
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16" stroke="#ffffff" stroke-width="1" stroke-linecap="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8149 12C18.8149 11.4637 18.6892 11.2462 18.4379 10.8112C17.5834 9.33247 15.6561 7 12 7C8.34395 7 6.41664 9.33247 5.56212 10.8112C5.31077 11.2462 5.18509 11.4637 5.18509 12C5.18509 12.5363 5.31077 12.7538 5.56212 13.1888C6.41664 14.6675 8.34395 17 12 17C15.6561 17 17.5834 14.6675 18.4379 13.1888C18.6892 12.7538 18.8149 12.5363 18.8149 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z" fill="#ffffff"></path> </g></svg>
                                </span>
                                <span className='h-[50px]  flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]'>
                                    Step's To Installation
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 4H17.2C18.9913 4 19.887 4 20.4435 4.5565C21 5.11299 21 6.00866 21 7.8V8M17 20H17.2C18.9913 20 19.887 20 20.4435 19.4435C21 18.887 21 17.9913 21 16.2V16M7 4H6.8C5.00866 4 4.11299 4 3.5565 4.5565C3 5.11299 3 6.00866 3 7.8V8M7 20H6.8C5.00866 20 4.11299 20 3.5565 19.4435C3 18.887 3 17.9913 3 16.2V16" stroke="#ffffff" stroke-width="1" stroke-linecap="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8149 12C18.8149 11.4637 18.6892 11.2462 18.4379 10.8112C17.5834 9.33247 15.6561 7 12 7C8.34395 7 6.41664 9.33247 5.56212 10.8112C5.31077 11.2462 5.18509 11.4637 5.18509 12C5.18509 12.5363 5.31077 12.7538 5.56212 13.1888C6.41664 14.6675 8.34395 17 12 17C15.6561 17 17.5834 14.6675 18.4379 13.1888C18.6892 12.7538 18.8149 12.5363 18.8149 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00001 10.3431 9.00001 12C9.00001 13.6569 10.3432 15 12 15Z" fill="#ffffff"></path> </g></svg>
                                </span>
                            </h1>
                        <StepperComponent array={data[prjName as keyof typeof data]["steps"]} />
                    </div>}
                    {navtab==4 && <div className='px-2 sm:px-0'>
                        <h1 className={`h-[50px] flex flex-col w-max pr-4 group overflow-hidden cursor-default`}>
                                <span className='h-[50px]  flex  text-4xl whitespace-nowrap font-thin gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]'>
                                    Review's
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64025 12.3374L5.63993 15.6449C5.39657 16.4496 4.65505 17 3.8144 17C3.36462 17 3 17.3646 3 17.8144V20C3 20.5523 3.44772 21 4 21H10.0563C10.5245 21 10.9301 20.6751 11.0322 20.2182L11.4794 18.2182C11.6191 17.5933 11.1437 17 10.5035 17H9.4517C8.14995 17 7.1959 15.7762 7.51157 14.5143C7.72499 13.6612 7.35552 12.7891 6.64025 12.3374ZM4.89177 11.21C5.13885 10.393 6.01688 9.94655 6.82258 10.2282L6.89163 10.2524C8.84403 10.935 9.95356 12.9938 9.45178 14.9997L10.5035 15C12.4243 15 13.8503 16.78 13.4312 18.6546L12.984 20.6546C12.6776 22.0254 11.461 23 10.0563 23H4C2.34315 23 1 21.6569 1 20V17.8144C1 16.2832 2.22285 15.0375 3.74526 15.0008L4.89177 11.21Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3598 11.6626L18.3601 8.35509C18.6034 7.55043 19.3449 7 20.1856 7C20.6354 7 21 6.63538 21 6.1856V4C21 3.44772 20.5523 3 20 3L13.9437 3C13.4755 3 13.0699 3.32488 12.9678 3.78181L12.5206 5.78181C12.3809 6.40666 12.8563 7 13.4965 7H14.5483C15.85 7 16.8041 8.22379 16.4884 9.48568C16.275 10.3388 16.6445 11.2109 17.3598 11.6626ZM19.1082 12.79C18.8611 13.607 17.9831 14.0535 17.1774 13.7718L17.1084 13.7476C15.156 13.065 14.0464 11.0062 14.5482 9.00033L13.4965 9C11.5757 9 10.1497 7.21998 10.5688 5.34543L11.016 3.34543C11.3224 1.97463 12.539 1 13.9437 1L20 1C21.6569 1 23 2.34315 23 4V6.1856C23 7.71684 21.7771 8.96246 20.2547 8.99917L19.1082 12.79Z" fill="#ffffff"></path> </g></svg>
                                </span>
                                <span className='h-[50px]  flex  text-4xl whitespace-nowrap font-normal gap-3 transition-transform duration-200 group-hover:translate-y-[-50px]'>
                                    Review's
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64025 12.3374L5.63993 15.6449C5.39657 16.4496 4.65505 17 3.8144 17C3.36462 17 3 17.3646 3 17.8144V20C3 20.5523 3.44772 21 4 21H10.0563C10.5245 21 10.9301 20.6751 11.0322 20.2182L11.4794 18.2182C11.6191 17.5933 11.1437 17 10.5035 17H9.4517C8.14995 17 7.1959 15.7762 7.51157 14.5143C7.72499 13.6612 7.35552 12.7891 6.64025 12.3374ZM4.89177 11.21C5.13885 10.393 6.01688 9.94655 6.82258 10.2282L6.89163 10.2524C8.84403 10.935 9.95356 12.9938 9.45178 14.9997L10.5035 15C12.4243 15 13.8503 16.78 13.4312 18.6546L12.984 20.6546C12.6776 22.0254 11.461 23 10.0563 23H4C2.34315 23 1 21.6569 1 20V17.8144C1 16.2832 2.22285 15.0375 3.74526 15.0008L4.89177 11.21Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3598 11.6626L18.3601 8.35509C18.6034 7.55043 19.3449 7 20.1856 7C20.6354 7 21 6.63538 21 6.1856V4C21 3.44772 20.5523 3 20 3L13.9437 3C13.4755 3 13.0699 3.32488 12.9678 3.78181L12.5206 5.78181C12.3809 6.40666 12.8563 7 13.4965 7H14.5483C15.85 7 16.8041 8.22379 16.4884 9.48568C16.275 10.3388 16.6445 11.2109 17.3598 11.6626ZM19.1082 12.79C18.8611 13.607 17.9831 14.0535 17.1774 13.7718L17.1084 13.7476C15.156 13.065 14.0464 11.0062 14.5482 9.00033L13.4965 9C11.5757 9 10.1497 7.21998 10.5688 5.34543L11.016 3.34543C11.3224 1.97463 12.539 1 13.9437 1L20 1C21.6569 1 23 2.34315 23 4V6.1856C23 7.71684 21.7771 8.96246 20.2547 8.99917L19.1082 12.79Z" fill="#ffffff"></path> </g></svg>
                                </span>
                        </h1>
                        <div>
                            <form className='flex flex-col  sm:pr-10 gap-5 mt-10'>
                                <Rating max={5} />
                                <textarea name="" id="" required className='bg-gray-200 dark:bg-[#111] outline-none  rounded-lg h-40 resize-none px-5 py-5' placeholder='Write your comment your suggestion here if any...' ></textarea>
                                {/* <button className='bg-blue-700  py-2 text-lg rounded cursor-pointer mt-auto text-white font-bold'>Submit</button> */}
                                <Submit />
                            </form>
                        </div>
                    </div>}
                </div>
            </div>
        </aside>
    </section>
  )
}

export default ProjectDisplay