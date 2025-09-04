import {
  ContactClear,
  ContactInput,
  ContactSend,
  ContactTextarea
} from "@/components/mypart/ContactInput";
import ScrambledText from "@/components/TextAnimations/ScrambledText/ScrambledText";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { motion } from "framer-motion";

const iconsvgClass = "size-10";
const iconsvgButtonClass =
  "border border-[#222] rounded-lg px-5 py-3 cursor-pointer hover:bg-gray-100 transition-border-color duration-300 contact-button relative";

const InstagramIcon = (
  <motion.button
    initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
    onClick={() => window.open("https://www.instagram.com/pranayy.c3/")}
    className={iconsvgButtonClass}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      stroke="#333"
      className={iconsvgClass}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />

        <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
      </g>
    </svg>
  </motion.button>
);

const LinkedinIcon = (
  <motion.button
  initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
    onClick={() => window.open("https://www.linkedin.com/in/pranay-prasad-/")}
    className={iconsvgButtonClass}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      version="1.1"
      fill="#333"
      stroke="#333"
      className={iconsvgClass}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>linkedin [#161]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-180.000000, -7479.000000)"
            fill="#333"
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                id="linkedin-[#161]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  </motion.button>
);

const LeetcodeIcon = (
  <motion.button
  initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
    onClick={() => window.open("https://leetcode.com/u/pranay_4862/")}
    className={iconsvgButtonClass}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      stroke="#333"
      className={iconsvgClass}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />{" "}
      </g>
    </svg>
  </motion.button>
);

const GithubIcon = (
  <motion.button
  initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
    onClick={() => window.open("https://github.com/pranayvips")}
    className={iconsvgButtonClass}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      version="1.1"
      fill="#333"
      stroke="#333"
      className={iconsvgClass}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -7559.000000)"
            fill="#333"
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                id="github-[#142]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  </motion.button>
);

const TwitterIcon = (
  <motion.button
  initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
    onClick={() => window.open("https://x.com/Pranay4862")}
    className={iconsvgButtonClass}
  >
    <svg
      className={iconsvgClass}
      fill="#333"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#333"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"></path>
      </g>
    </svg>
  </motion.button>
);

const RedditIcon = (
  <motion.button
  initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
    onClick={() =>
      window.open("https://www.reddit.com/user/ZealousidealStep900/")
    }
    className={iconsvgButtonClass}
  >
    <svg
      className={iconsvgClass}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="#333"
      stroke="#333"
      strokeWidth="0.0002"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect x="0" fill="none" width="20" height="20"></rect>{" "}
        <g>
          {" "}
          <path d="M18 10.1c0-1-.8-1.8-1.8-1.7-.4 0-.9.2-1.2.5-1.4-.9-3-1.5-4.7-1.5l.8-3.8 2.6.6c0 .7.6 1.2 1.3 1.2.7 0 1.2-.6 1.2-1.3 0-.7-.6-1.2-1.3-1.2-.5 0-.9.3-1.1.7L11 2.9h-.2c-.1 0-.1.1-.1.2l-1 4.3C8 7.4 6.4 7.9 5 8.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5c.1.1.3.3.5.3v.5c0 2.7 3.1 4.9 7 4.9s7-2.2 7-4.9v-.5c.6-.3 1-.9 1-1.6zM6 11.4c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2zm7 3.3c-.9.6-1.9 1-3 .9-1.1 0-2.1-.3-3-.9-.1-.1-.1-.3 0-.5.1-.1.3-.1.4 0 .7.5 1.6.8 2.5.7.9.1 1.8-.2 2.5-.7.1-.1.3-.1.5 0s.2.3.1.5zm-.3-2.1c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2c.7 0 1.2.6 1.2 1.2.1.7-.5 1.2-1.2 1.2z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  </motion.button>
);

interface BottomButtonProps {
  svg: any;
  title: String;
  content: String;
  link: string;
}
const BottomButton = ({ svg, title, content, link }: BottomButtonProps) => {
  return (
    <button
      onClick={() => window.open(link)}
      className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 w-max group cursor-pointer"
    >
      <span className="row-span-2 border-1 p-2 rounded-3xl border-[#333] transition-bg duration-300 group-hover:border-[#444] group-hover:bg-[#1a1a1a]">
        {svg}
      </span>
      <p className="text-[#bbb] text-base text-left">{title}</p>
      <p className="text-[#666] text-xs text-left">{content}</p>
    </button>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  return (
    <section
    id="contact"
      data-scroll-section
      className="p-5 flex flex-col justify-evenly pt-[80px] pb-20"
    >
      {/* social links here */}
      <nav className="grid grid-cols-[repeat(3,max-content)] gap-7 sm:gap-0 sm:flex w-full justify-evenly ">
        {/* instagram icon */}
        {InstagramIcon}
        {/* linkedin */}
        {LinkedinIcon}
        {/* leetcode */}
        {LeetcodeIcon}
        {/* github */}
        {GithubIcon}
        {TwitterIcon}
        {RedditIcon}
      </nav>
      <div className="grid sm:grid-cols-[1fr_1fr] sm:gap-5 items-center mt-10">
        <motion.div initial={{ opacity:0,scale:0}}
    whileInView={{ opacity:1,scale:1}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}>

        <ScrambledText
          className="scrambled-text-demo text-4xl sm:pr-5 cursor-default text-black dark:text-white"
          radius={50}
          duration={1.2}
          // textColor='text-[#DFBDC8]'
          speed={0.5}
          scrambleChars={".:"}
          >
          Want to know more about, tell me about your project or just to say
          hello? Drop me a line and I'll get back as soon as possible.
        </ScrambledText>
          </motion.div>

        <form
          className="flex flex-col px-2 sm:px-0"
          ref={form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <motion.label
          initial={{ opacity:0,scale:0,y:-30}}
    whileInView={{ opacity:1,y:0}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
            className="text-sm text-[#999] font-semibold mt-5 mb-3 text-left hidden sm:block"
            htmlFor="contact-name-input"
          >
            Name
          </motion.label>
          <ContactInput text="Enter Your Name" name="contact-name-input" type="text" />
          <motion.label
          initial={{ opacity:0,scale:0,y:-30}}
    whileInView={{ opacity:1,y:0}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
            className="text-sm text-[#999] font-semibold mt-5 mb-3 text-left hidden sm:block"
            htmlFor="contact-name-email"
          >
            Email
          </motion.label>
          <ContactInput text="Enter Your Email id" name="contact-name-email" type="email" />
          {/* <input
            className="text-base outline-none text-gray-400 border-2 border-[#333] w-[80%] px-3 py-2 rounded-sm resize-none"
            type="email"
            id="contact-name-email"
            placeholder="Email"
            required
          /> */}
          <motion.label
          initial={{ opacity:0,scale:0,y:-30}}
    whileInView={{ opacity:1,y:0}}
    transition={{ duration: .5}}
    viewport={{ once: false, amount:.2}}
            className="text-sm text-[#999] font-semibold mt-5 mb-3 text-left hidden sm:block"
            htmlFor="contact-name-msg"
          >
            Message
          </motion.label>
          <ContactTextarea type="text" name="contact-name-msg" text="Message..." />

          <div className="flex justify-between sm:w-[80%] my-10 ">
          <ContactSend onclick={()=>{
            if(!form.current)return
            
            emailjs.sendForm("service_47zjwto", "template_q8qk90n", form.current, "4t_xVcQnm2u6_Gvxo").then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
          if(form.current)
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
          if(form.current)
          form.current.reset()
        }
      );
          }}/>
            <ContactClear onclick={()=>{if(form.current)form.current.reset()}} />
          </div>
        </form>
      </div>

      {/* bottom bar */}
      <div className="flex flex-col sm:flex-row gap-5 justify-around border-t-2 border-[#222] pt-8 mt-10">
        <BottomButton
          link="mailto:prasadpranay2005@gmail.com"
          title="E-Mail"
          content="prasadpranay2005@gmail.com"
          svg={
            <svg
              className="size-6"
              viewBox="0 0 600 600"
              version="1.1"
              id="svg9724"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <defs id="defs9728"></defs>
                <g
                  id="g10449"
                  transform="matrix(0.95173205,0,0,0.95115787,13.901174,12.168794)"
                  style={{ strokeWidth: "1.05103" }}
                >
                  {" "}
                  <g
                    id="path10026"
                    inkscape:transform-center-x="-0.59233046"
                    inkscape:transform-center-y="-20.347403"
                    transform="matrix(1.3807551,0,0,1.2700888,273.60014,263.99768)"
                  ></g>{" "}
                  <g
                    id="g11314"
                    transform="matrix(1.5092301,0,0,1.3955555,36.774048,-9.4503933)"
                    style={{ strokeWidth: "50.6951" }}
                  ></g>{" "}
                  <path
                    style={{
                      color: "#303030",
                      fill: "#303030",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      paintOrder: "stroke fill markers",
                    }}
                    d="m 132.50586,39.773437 c -80.786884,0 -147.111329,66.380993 -147.111329,147.175783 v 231.32422 c 0,80.79479 66.324445,147.17578 147.111329,147.17578 h 336.20508 c 80.78688,0 147.11328,-66.38099 147.11328,-147.17578 V 186.94922 c 0,-80.79479 -66.3264,-147.175783 -147.11328,-147.175783 z m 0,84.082033 h 336.20508 c 35.63231,0 63.02929,27.39904 63.02929,63.09375 v 231.32422 c 0,35.69471 -27.39698,63.09375 -63.02929,63.09375 H 132.50586 c -35.63231,0 -63.029298,-27.39904 -63.029298,-63.09375 V 186.94922 c 0,-35.69471 27.396988,-63.09375 63.029298,-63.09375 z"
                    id="rect240"
                  ></path>{" "}
                  <path
                    style={{
                      color: "#303030",
                      fill: "#303030",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                    d="M 67.464844,81.886719 A 42.041302,42.041302 0 0 0 38.351562,95.591797 42.041302,42.041302 0 0 0 41.162109,154.98047 L 272.31836,365.25195 a 42.045506,42.045506 0 0 0 56.58008,0 L 560.05469,154.98047 a 42.041302,42.041302 0 0 0 2.81054,-59.388673 42.041302,42.041302 0 0 0 -59.38867,-2.808594 L 300.60937,277.31836 97.740234,92.783203 A 42.041302,42.041302 0 0 0 67.464844,81.886719 Z"
                    id="path404"
                  ></path>{" "}
                  <g id="g1810" transform="translate(-0.51901729)">
                    {" "}
                    <path
                      style={{
                        color: "#303030",
                        fill: "#303030",
                      }}
                      d="m 418.54102,322.93555 -45.69727,43.45898 130.79492,137.53125 45.69727,-43.45898 z"
                      id="path1686"
                    ></path>{" "}
                    <path
                      style={{
                        color: "#303030",
                        fill: "#303030",
                      }}
                      d="M 183.54297,323.11719 52.748047,462.84961 98.787109,505.94531 229.58203,366.21289 Z"
                      id="path1686-3"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          }
        />
        <BottomButton
          link="tel:+1234567890"
          title="Contact"
          content="+91 6203241318"
          svg={
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                  fill="#303030"
                ></path>{" "}
                <path
                  d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                  fill="#303030"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"
                  fill="#303030"
                ></path>{" "}
              </g>
            </svg>
          }
        />
        <BottomButton
          link="https://api.whatsapp.com/send/?phone=%2B916203241318&text&type=phone_number&app_absent=0"
          title="Whatsapp"
          content="Chat Now..."
          svg={
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                  fill="#333"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                  fill="#333"
                ></path>{" "}
              </g>
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default Contact;
