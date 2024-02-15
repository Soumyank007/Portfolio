import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semi=bold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute select-none'
      whileHover={{ scale: 1.08, transition: { duration: 0.5 } }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-32 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer' whileHover={{ scale: 1.08 }}>
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