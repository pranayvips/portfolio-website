import "./contactinput.css"

interface Contactinput{
    text:string,
    type:string,
    name:string,
}
export const ContactInput = ({text,type,name}:Contactinput) =>{
    return <input type={type} name={name} className="contactInput" placeholder={text} />
}
export const ContactTextarea = ({text,type,name}:Contactinput) =>{
    type;
    return <textarea name={name} className="contactInput" placeholder={text} ></textarea>
}


export const ContactSend = ()=>{
    return <button className="contactButton w-30">
  Send
</button>
}

export const ContactClear = ()=>{
    return <button className="contactClear"> Clear
</button>
}