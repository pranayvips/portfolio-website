import React from 'react'
import "./aboutbutton.css"
import { motion } from "framer-motion";


export const AboutButton = () => {
  return (
    <motion.button initial={{ scale:0 ,opacity:0}}
      whileInView={{ scale:1,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className="aboutButton gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
<span className='hidden sm:block'>Get in touch</span></motion.button>
  )
}

export const AboutLoader = () =>{
  return <div className="aboutLoader"></div>
}

interface AboutProjectProp{
  classname:string
}
export const AboutProject = ({classname}:AboutProjectProp) =>{
  return <motion.button initial={{ scale:0 ,opacity:0}}
      whileInView={{ scale:1,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }} className={`aboutProject ${classname}`}>
  <span> Project's
  </span>
</motion.button>
}

export const AboutEducation = () =>{
  return <motion.button
      initial={{ scale:0 ,opacity:0}}
      whileInView={{ scale:1,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: 0.5 }}
      className="cssbuttons-io"
    >
  <span 
    ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
        fill="currentColor"
      ></path>
    </svg>
    <strong className='hidden sm:block font-normal'>Education</strong></span>
</motion.button>

}

export default AboutButton