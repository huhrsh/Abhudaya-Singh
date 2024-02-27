import logo from './logo.svg';
import './App.css';
import "animate.css"
import { useState } from 'react';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contacts } from './components/Contacts';
import {Home} from './components/Home'
import { Skills } from './components/Skills';

function HeaderItem(item){
  // console.log(item)
  return <div onClick={()=>{item.setNav(item.name); item.setHam(false)}} className={`relative hover:text-white text-[#ddd] antialiased text-[1.3rem] transition cursor-pointer text-center z-10 hover:border-b-[2px] hover:-mb-[2px]
  max-sm:text-2xl  max-sm:w-full max-sm:py-4 max-sm:rounded-none ${item.nav==item.name?"max-sm:bg-neutral-700":""} ${item.nav=="Education"?"-mr-2":""}
  `}>{item.name}<div className={` ${item.nav==item.name?"bg-white":""} absolute -bottom-[1px] h-[2px] w-full z-0 transition duration-200 max-sm:invisible`}></div></div>
}

function App() {
  const [nav,setNav]=useState('Home');
  const [ham,setHam]=useState(false)
  return (
      <>
        <header className='cursor-pointer flex px-8 pr-24 justify-between align-middle space-x-2 h-24 
        max-sm:flex-wrap max-sm:space-x-0 max-sm:space-y-2
        max-xl:px-2
        '>
          <h1 onClick={()=>{setNav('Home');setHam(false)}} className='pt-2 text-[#eee] w-1/6 antialiased uppercase tracking-widest text-4xl 
          max-sm:w-4/6 max-sm:pl-4 max-sm:pt-4 max-sm:text-5xl 
          '>Abhudaya Singh
          </h1>
          <div onClick={()=>{setHam(!ham)}} className={`sm:invisible w-1/6 flex items-center justify-center
          max-sm:visible
          `}>{ham?<img src='https://cdn-icons-png.flaticon.com/128/1828/1828778.png' className='scale-50 invert transition ' alt='hamburger'/>:<img src='https://cdn-icons-png.flaticon.com/128/2516/2516745.png' className='scale-50 invert transition ' alt='hamburger'/>}</div>
          
          <div className={`flex w-5/6  py-3 justify-between items-center space-x-2 transition duration-300
            max-sm:bg-gradient-to-l max-sm:from-neutral-800 max-sm:to-stone-900 max-sm:divide-y  max-sm:z-20
            max-sm:flex-col ${ham?'':'max-sm:invisible'} max-sm:justify-start max-sm:w-full max-sm:p-6 max-sm:pt-36 max-sm:fixed left-0 bottom-0  max-sm:rounded-none max-sm:h-[81vh]
          `}>
            {/* <HeaderItem setNav={setNav} nav={nav} name="Home"/> */}
            <HeaderItem setHam={setHam} setNav={setNav} nav={nav} name="Education"/>
            <HeaderItem setHam={setHam} setNav={setNav} nav={nav} name="Projects"/>
            <HeaderItem setHam={setHam} setNav={setNav} nav={nav} name="Experience"/>
            <HeaderItem setHam={setHam} setNav={setNav} nav={nav} name="Skills"/>
            <HeaderItem setHam={setHam} setNav={setNav} nav={nav} name="Certifications"/>
            <HeaderItem setHam={setHam} setNav={setNav} nav={nav} name="Contacts"/>
          </div>
      </header>
        <main className='w-full min-h-[80vh] justify-evenly items-center p-3 flex flex-col'>
          {nav=='Home' && <Home/>}
          {nav=='Education' && <Education/>}
          {nav=='Projects' && <Projects/>}
          {nav=='Experience' && <Experience/>}
          {nav=='Skills' && <Skills/>}
          {nav=='Certifications' && <Certifications/>}
          {nav=='Contacts' && <Contacts/>}

        </main>
      </>
  );
}

export default App;
