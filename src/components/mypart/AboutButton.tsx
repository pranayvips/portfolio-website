import { Code2, Phone } from "lucide-react";
import "./aboutbutton.css";
import { motion } from "framer-motion";

export const AboutButton = ({ onclick }: { onclick: Function }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      onClick={() => onclick()}
      className="aboutButton gap-2"
    >
      <Phone />
      <span className="hidden sm:block">Get in touch</span>
    </motion.button>
  );
};

export const AboutLoader = () => {
  return <div className="typewriter scale-50 sm:scale-100 w-[60px] sm:w-max">
    <div className="slide"><i></i></div>
    <div className="paper"></div>
    <div className="keyboard"></div>
</div>;
};

export const AboutProject = ({
  classname,
  onclick,
}: {
  classname: string;
  onclick: Function;
}) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      onClick={() => onclick()}
      className={`aboutProject ${classname}`}
    >
      <span> Project's</span>
    </motion.button>
  );
};

export const AboutEducation = ({ onclick }: { onclick: Function }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      className="cssbuttons-io"
      onClick={() => onclick()}
    >
      <span>
        <Code2 />
        <strong className="hidden sm:block font-normal">Education</strong>
      </span>
    </motion.button>
  );
};

export default AboutButton;
