function SkillCard(props){
    console.log(props);
    const details=props.item;
    return(
        <div className="flex flex-col shadow-xl rounded-md shadow-neutral-900 w-1/4 p-2
        max-sm:w-full">
            <h2 className="text-2xl text-center text-[#eee] border-b mb-1">{details.type}</h2>
            {details.list.map((item,index)=>(
                <p className="text-[#ddd] text-lg my-1 pl-2" key={index}>{item}</p>
            ))}
        </div>
    )
}

function Skills(){
    const skillDetails=[
        {
            type:"Hardware",
            list:[
                "Embedded System",
                "Microelectronics",
                "Robotics",
                "Electronics"
            ]
        },
        {
            type:"Software",
            list:[
                "HTML",
                "JavaScript",
                "Python",
                "Java",
                "C"
            ]
        },
        {
            type:"Others",
            list:[
                "Effective Communication",
                "Adobe Photoshop",
                "Creative Thinking",
                // "Electronics"
            ]
        },

    ]

    return(
        <main className="flex w-full justify-evenly px-12 animate__animated animate__fadeInUp 
        max-sm:flex-col max-sm:gap-8">
            {/* console.log("Seesh") */}
            {skillDetails.map((item,index)=>(
                <SkillCard key={index} item={item}/>
            ))}
        </main>
    )
}

export {Skills}