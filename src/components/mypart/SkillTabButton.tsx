import "./skilltabbutton.css"
import { motion } from "framer-motion";


interface SkillTabProps{
    text:string,
    active:Boolean,
    onclick: Function
}
const SkillTabButton = ({text,active,onclick}:SkillTabProps) => {
  return (<motion.div initial={{ y:100 ,opacity:0}}
      whileInView={{ y:0,opacity:1}}
      transition={{ duration: .5 }}
      viewport={{ once: false, amount: .1 }} onClick={()=>onclick()}>

    <button className="c-button c-button--gooey" style={{background:active && "#06c8d9",color:active && "#fff"}}> {text}
  <div className="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{"display":" block","height":" 0","width":"0"}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>
  </motion.div>
  )
}

export default SkillTabButton