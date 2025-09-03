import { Highlighter } from '@/components/magicui/highlighter'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { SparklesText } from '@/components/magicui/sparkles-text'
import {AboutButton , AboutEducation, AboutLoader, AboutProject} from '@/components/mypart/AboutButton'
import { MySkillCloud } from '@/components/mypart/MySkill'
import { motion } from "framer-motion";


const About = ({locoScroll}:{locoScroll: any}) => {
  return (
    <section id='about' data-scroll-section className='text-black dark:text-white flex flex-col min-h-screen w-screen overflow-hidden px-[3rem] sm:px-[10rem] relative flex flex-col justify-center items-center relative'>
      <motion.h1 
        initial={{ x: -100 ,opacity:0}}
        whileInView={{ x: 0,opacity:1}}
        transition={{ duration: .5 }}
        viewport={{ once: false, amount: 0.5 }}
        className='col-span-2 text-left font-normal text-5xl sm:text-7xl self-start mb-15 flex items-center gap-5'
      >
       <AboutLoader /><SparklesText >About <LineShadowText className="italic" shadowColor="blue">Me</LineShadowText> </SparklesText>
      </motion.h1>
      
      <div className='flex gap-10 sm:flex-row flex-col max-w-screen'>
        <MySkillCloud />
        <div className='flex flex-col'>
          <div className='flex sm:flex-row flex-col gap-10 items-center'>

            {/* <p className='text-left text-md cursor-default'>I’m currently in my final year <strong>(3rd)</strong> of studies pursuing Bachelor's in Computer Application and have been actively exploring the evolving digital world, especially driven by my curiosity around the rise of AI and new technologies. With over two years of experience in web development and a year in mobile app development, I enjoy turning ideas into practical, user-friendly solutions. Beyond coding, I’m someone who values creativity and balance — I love to travel, also love to play <span className='text-[#5227FF] cursor-pointer hover:underline'>badminton</span> and <span className='text-[#5227FF] cursor-pointer hover:underline'>chess</span>, and often find myself sketching or drawing in my free time. <br /> I believe in learning through experience, and I'm always excited to take on new challenges that push both my technical and creative boundaries.</p> */}
            <motion.p
              initial={{ opacity:0}}
              whileInView={{opacity:1}}
              transition={{ duration: .5 }}
              viewport={{ once: false, amount: 0.5 }}
              className='text-left text-xs px-2 sm:px-0 sm:text-lg cursor-default'
            >
                I’m currently in my <Highlighter action="underline" color="#FF9800">final year (3rd)</Highlighter>  of studies pursuing <Highlighter action="highlight" color="#5227FF">Bachelor's in Computer Application</Highlighter> and have been actively exploring the evolving digital world, especially driven by my curiosity around the rise of AI and new technologies. With over two years of experience in <Highlighter action="underline" color="#FF9800">web development</Highlighter> and a year in <Highlighter action="underline" color="#FF9800">mobile app development</Highlighter>, I enjoy turning ideas into practical, user-friendly solutions. Beyond coding, I’m someone who values creativity and balance — I love to <Highlighter action="underline" color="#FF9800">travel</Highlighter>, also love to play <Highlighter action="underline" color="#FF9800">badminton</Highlighter> and <Highlighter action="underline" color="#FF9800">chess</Highlighter>, and often find myself <Highlighter action="underline" color="#FF9800">sketching or drawing</Highlighter> in my free time. I believe in learning through experience, and I'm always excited to take on new challenges that push both my technical and creative boundaries.
            </motion.p>
        
            <div className='flex sm:flex-col gap-5'>
              <motion.p
               initial={{ x:100,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{ duration: .5 }}
               viewport={{ once: false, amount: 0.5 }}
               className='text-white bg-[#212529] dark:bg-indigo-500 rounded-xs flex flex-col py-3 px-10 gap-2 shadow-md'><span className='text-4xl'>20 +</span><span className='whitespace-nowrap text-xs'>Project's Completed</span></motion.p>
              <motion.p
               initial={{ x:100,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{ duration: .5 }}
               viewport={{ once: false, amount: 0.5 }}
               className='text-white bg-[#212529] dark:bg-indigo-500 rounded-xs flex flex-col py-3 px-10 gap-2 shadow-md'><span className='text-4xl'>4 </span><span className='whitespace-nowrap text-xs'>Different Domains</span></motion.p>
            </div>
          </div>
          <div className='flex gap-5 sm:gap-10 mt-10'>
            <AboutEducation onclick={()=>{locoScroll.scrollTo("#education")}} />
            <AboutButton onclick={()=>{locoScroll.scrollTo("#contact")}} />
            <AboutProject classname="ml-auto sm:ml-0" onclick={()=>{locoScroll.scrollTo("#project")}} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About