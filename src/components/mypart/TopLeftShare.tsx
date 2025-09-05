import { Send } from "lucide-react"
import "./topleftshare.css"
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { FaPinterest, FaQuora, FaReddit, FaWhatsapp } from "react-icons/fa"
const TopLeftShare = () => {
  return (
    <aside className='fixed top-5 right-5 sm:top-15 sm:right-15 z-100'>
         <div className="tooltip-container group">
  <span className="text">
    <Send className="text-white group-hover:text-black" />
  </span>
  <span className="tooltip1 text-black hover:text-white">
    <TwitterLogoIcon onClick={()=>window.open("https://x.com/Pranay4862")}/>
  </span>
  <span className="tooltip2 text-black hover:text-white">
    <InstagramLogoIcon />
  </span>
  <span className="tooltip3 text-black hover:text-white">
    <FaWhatsapp onClick={()=>window.open("https://api.whatsapp.com/send/?phone=%2B916203241318&text&type=phone_number&app_absent=0")} />
  </span>
  <span className="tooltip4 text-black hover:text-white">
    <DiscordLogoIcon />
  </span>
  <span className="tooltip5 text-black hover:text-white">
    <FaPinterest />
  </span>
  <span className="tooltip6 text-black hover:text-white">
    <FaQuora />
  </span>
  <span className="tooltip7 text-black hover:text-white">
    <GitHubLogoIcon />
  </span>
  <span className="tooltip8 text-black hover:text-white">
    <FaReddit onClick={()=>window.open("https://www.reddit.com/user/ZealousidealStep900/")} />
  </span>
  <span className="tooltip9"> </span>
</div>
    </aside>

  )
}

export default TopLeftShare