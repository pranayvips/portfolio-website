import Particles from '@/components/Backgrounds/Particles/Particles'
import { Highlighter } from '@/components/magicui/highlighter'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { SparklesText } from '@/components/magicui/sparkles-text'
import {AboutButton , AboutEducation, AboutLoader, AboutProject} from '@/components/mypart/AboutButton'
import { MySkillCloud } from '@/components/mypart/MySkill'
import ScrollReveal from '@/components/TextAnimations/ScrollReveal/ScrollReveal'
import { motion } from "framer-motion";


const About = () => {
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
               className='text-white bg-[#212529] dark:bg-indigo-500 rounded-xs flex flex-col py-3 px-10 gap-2 shadow-md'><span className='text-4xl'>40 +</span><span className='whitespace-nowrap text-xs'>Project's Completed</span></motion.p>
              <motion.p
               initial={{ x:100,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{ duration: .5 }}
               viewport={{ once: false, amount: 0.5 }}
               className='text-white bg-[#212529] dark:bg-indigo-500 rounded-xs flex flex-col py-3 px-10 gap-2 shadow-md'><span className='text-4xl'>2 +</span><span className='whitespace-nowrap text-xs'>Year of experience</span></motion.p>
            </div>
          </div>
          <div className='flex gap-5 sm:gap-10 mt-10'>
            <AboutEducation />
            <AboutButton />
            <AboutProject classname="ml-auto sm:ml-0" />
            {/* <AboutButton title="Education" svgPath="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            <AboutButton title="Repo" svgPath="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            <AboutButton title="Contact" svgPath="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /> */}
          </div>
        </div>
      </div>

    </section>
  )
}

export default About