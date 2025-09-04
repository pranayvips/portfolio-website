import "./contactinput.css"
import {  motion } from "framer-motion"

interface Contactinput{
    text:string,
    type:string,
    name:string,
} 
export const ContactInput = ({text,type,name}:Contactinput) =>{
    return <motion.input initial={{ opacity:0,y:-20,scale:0}}
    whileInView={{ opacity:1,y:0,scale:1}}
    transition={{ duration: .3}}
    viewport={{ once: false, amount:.2}} autoComplete="off" type={type} name={name} className="contactInput mb-5 sm:mb-3 sm:mb-0 sm:max-w-[80%]" placeholder={text} />
}
export const ContactTextarea = ({text,type,name}:Contactinput) =>{
    type;
    return <motion.textarea initial={{ opacity:0,y:-20,scale:0}}
    whileInView={{ opacity:1,y:0,scale:1}}
    transition={{ duration: .3}}
    viewport={{ once: false, amount:.2}} autoComplete="off" name={name} className="contactInput sm:max-w-[80%]" placeholder={text} ></motion.textarea>
}


export const ContactSend = ({onclick}:{onclick:Function})=>{
    return <motion.button
    initial={{ opacity:0,y:30,scale:0}}
    whileInView={{ opacity:1,y:0,scale:1}}
    transition={{ duration: .3}}
    viewport={{ once: false, amount:.2}}
     className="contactButton w-30" onClick={()=>onclick()}>
  Send
</motion.button>
}

export const ContactClear = ({onclick}:{onclick:Function})=>{
    return <motion.button initial={{ opacity:0,y:30,scale:0}}
    whileInView={{ opacity:1,y:0,scale:1}}
    transition={{ duration: .3}}
    viewport={{ once: false, amount:.2}}
     className="contactClear" onClick={()=>onclick()}> Clear
</motion.button>
}