import React from 'react'

interface ContextMenuProp{
    positionContext: Array<number>;
    ref: any,
    locoScroll:any,
    setshowContext:any
}
const ContextMenu = ({positionContext,ref,locoScroll,setshowContext}:ContextMenuProp) => {
  return (
    <aside ref={ref} className='fixed z-10000 select-none animate-[context_0.1s_ease-out_forwards]' style={{top:positionContext[1],left:positionContext[0]}}>
    <div className="text-sm w-56 p-4 bg-white dark:bg-background dark:shadow-gray-900 shadow-lg border border-gray-300/30 text-gray-500 rounded-md font-medium">
    <ul className="flex flex-col gap-2">
        <li onClick={()=>{setshowContext(false);locoScroll?.scrollTo("#home")}} className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            <a>Home</a>
        </li>
        <li onClick={()=>{setshowContext(false);locoScroll?.scrollTo("#about")}} className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            <a>About Me</a>
        </li>
        <li onClick={()=>{setshowContext(false);locoScroll?.scrollTo("#project")}} className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>

            <a>Project's</a>
        </li>
        <li onClick={()=>{setshowContext(false);locoScroll?.scrollTo("#education")}} className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

            <a>Education</a>
        </li>
        <li onClick={()=>{setshowContext(false);locoScroll?.scrollTo("#skill")}} className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

            <a>Tech Stack</a>
        </li>
        <div className="w-full h-px bg-gray-300/50"></div>
        <li onClick={()=>{setshowContext(false);locoScroll?.scrollTo("#contact")}} className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-green-300/40 hover:text-indigo-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>
                 
            <a>Contact Me</a>
        </li>
        <div className="w-full h-px bg-gray-300/50 "></div>
        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition" onClick={()=>{setshowContext(false);document.body.classList.toggle("dark")}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
            <a>Toggle Theme</a>
        </li>
    </ul>
</div>
</aside>
  )
}

export default ContextMenu