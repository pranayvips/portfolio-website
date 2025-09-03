import { useNavigate } from "react-router-dom"
import "./404button.css"

export const NotFoundButton = () => {
    const navigate = useNavigate()
  return (
    // <div className="px-[40px] py-[10px] border-white border-2 rounded-lg cursor-pointer" onClick={()=>navigate("/")}>
    <div className="px-[40px] py-[10px] border-white border-b-2 mt-10 cursor-pointer" onClick={()=>navigate("/")}>

    <button className="notfoundbutton" data-text="Awesome">
    <span className="actual-text">&nbsp;Home&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Home&nbsp;</span>
</button>
    </div>
  )
}

