import { Brush } from "lucide-react"
import "./myworkbutton.css"

const MyWorkButton = ({onclick}:{onclick:Function}) => {
  return (
    <button className="button button-item" onClick={()=>{onclick()}}>
  <span className="button-bg">
    <span className="button-bg-layers">
      <span className="button-bg-layer button-bg-layer-1 -purple"></span>
      <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
      <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
    </span>
  </span>
  <span className="button-inner">
    <span className="button-inner-static">
      <Brush />
      <span className="hidden sm:block">

      Work's
      </span>
    </span>
    <span className="button-inner-hover">
      <Brush />
      <span className="hidden sm:block">

      Work's
      </span>
    </span>
  </span>
</button>
  )
}




export default MyWorkButton