import { useEffect, useState,useRef } from "react";
import Typewriter from 'typewriter-effect/dist/core';
function Home(){
    const titleRef = useRef(null);
    const [curr, setCurr] = useState("");
    const array = ["Abhudaya Singh", "a Web Developer", "a Travel Enthusiast", "a passionate Electrical Engineer"];

    useEffect(() => {
        const typewriter = new Typewriter(titleRef.current, {
            strings: array,
            autoStart: true,
            loop: true,
            // typeSpeed: 50,
            // deleteSpeed: 50, 
            // delay: 150,
            // pauseFor: 2000,
        });

        return () => {
            // Cleanup when component unmounts
            typewriter.stop();
        };
    }, [array]);

    // useEffect(async()=>{
    //     console.log("Parent")
    //     // while(false){
    //         let word=array[index];
    //         let len=0
    //         while(word!=curr){
    //             setTimeout(()=>{
    //                 console.log("Loop1")
    //                 let temp=curr+word[len++]
    //                 setCurr(temp);    
    //             },50)
    //         }
    //         if(curr==word){
    //             setTimeout(()=>{
    //                 while(curr!=""){
    //                     console.log("Loop2")
    //                     let temp=curr.slice(0,-1)
    //                     setCurr(temp);
    //                     setTimeout(()=>{},50)
    //                 }
    //             },1000)
    //             index=(index+1)%array.length
    //         }
    //     // }
    // },[])
      
    return(
        <div className="flex flex-col w-4/5 gap-2
            max-sm:w-full max-sm:p-2 max-sm:-mt-12
        ">
            <h2 className="text-6xl text-[#eee] max-sm:text-4xl">Hi, I'm <span ref={titleRef}>{curr}</span></h2>
            <p className="text-[#ddd] text-2xl font-extralight text-justify w-full max-sm:mt-8">
            As a third-year electrical and electronics engineering student, my focus lies in practical expertise, backed by hands-on experience. While possessing a robust theoretical foundation, my strength lies in the application of knowledge to real-world scenarios. Proactive and adept at overcoming challenges, I am enthusiastic about contributing my practical skills to innovative projects within the dynamic field of electronics.
            </p>
        </ div>
    )
}

export {Home}
