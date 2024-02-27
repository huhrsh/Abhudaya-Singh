function Card(props){
    let details=props.item
    // console.log(props)
    return(
        <div className="shadow-xl w-[85vw] p-2 max-sm:shadow-2xl max-sm:w-[90vw] max-sm:mt-2 ">
            <div className="flex justify-between items-center pr-4
            max-sm:flex-col max-sm:gap-1 max-sm:items-start
             ">
                <div className="">
                    <h2 className="text-2xl text-[#ddd] max-sm:text-3xl">{details.role}</h2>
                    <p className="text-xl pl-1 text-[#ccc] max-sm:text-2xl">{details.company}</p>
                </div>
                <p  className="text-xl text-[#ddd] max-sm:text-1xl max-sm:pl-1">
                    {details.duration}
                </p>
            </div>
            <ul className="px-6">
                {details.tasks.map((task,index)=>(
                    <li className="text-[#ddd] text-lg list-disc text-justify" key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

function Experience(){
    const experienceDetails=[
        {
            company:"Bharat Electronics Limited",
            role:"Electrical Engineer Intern",
            duration:"Aug 23 - Oct 23",
            tasks:[           
                "Conducted extensive research and implementation on the OmniVision OV5647 chip, known for its polarizing filter cut that enables day and night vision with automatic switching based on ambient light conditions.",
                "Demonstrated a proof of concept derived from comprehensive research, presenting it to multiple layers of authority within the organization.",
                "Successfully secured project funding approval by substantiating the value and feasibility of the proposed solution."
            ]
        },
    ]
    return(
        <div className=" animate__animated animate__fadeInUp">
            {experienceDetails.map((item,index)=>(
                <Card item={item} key={index}/>
            ))}
        </div>
    )
}

export {Experience}