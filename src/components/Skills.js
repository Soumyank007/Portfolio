import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute select-none dark:text-dark dark:bg-light lg:p-2 lg:px-4 md:text-sm md:py-1 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.08 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition:{ duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div className='lg:p-6 md:p-4 xs:text-xs xs:p-2 flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light' whileHover={{ scale: 1.08 }}>
          App
        </motion.div>
        <Skill name="JavaScript" x='-25vw' y='-14vw'></Skill>
        <Skill name="PHP" x='0vw' y='-23vw'></Skill>
        <Skill name="TypeScript" x='25vw' y='-14vw'></Skill>
        <Skill name="Python" x='-30vw' y='10vw'></Skill>
        <Skill name="Java" x='30vw' y='10vw'></Skill>
        <Skill name="HTML" x='-23vw' y='-2vw'></Skill>
        <Skill name="CSS" x='-10vw' y='-14vw'></Skill>
        <Skill name="VueJS" x='-18vw' y='14vw'></Skill>
        <Skill name="NuxtJS" x='28vw' y='4vw'></Skill>
        <Skill name="ReactJS" x='0vw' y='-19vw'></Skill>
        <Skill name="React Native" x='22vw' y='-3vw'></Skill>
        <Skill name="Node JS" x='10vw' y='-10vw'></Skill>
        <Skill name="SpringBoot" x='14vw' y='6vw'></Skill>
        <Skill name="MongoDb" x='-17vw' y='5vw'></Skill>
        <Skill name="SQL" x='0vw' y='11vw'></Skill>
        <Skill name="NextJS" x='0vw' y='19vw'></Skill>
        <Skill name="Django" x='-10vw' y='-10vw'></Skill>
        <Skill name="Docker" x='-12vw' y='0vw'></Skill>
      </div>
    </>
  )
}

export default Skills