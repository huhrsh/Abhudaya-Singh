function Card(props){
    let details=props.item
    // console.log(props)
    return(
        <div className=" animate__animated animate__fadeInUp shadow-xl w-[85vw] p-2 max-sm:shadow-2xl max-sm:w-[90vw] max-sm:mt-2">
            <div className="flex justify-between items-start pr-4
                max-sm:flex-col max-sm:gap-1
            ">
                <div className="">
                    <h2 className="text-2xl text-[#ddd] max-sm:text-3xl">{details.role}</h2>
                    <p className="text-xl pl-1 text-[#ccc] max-sm:text-2xl">{details.company}</p>
                </div>
                <p  className="text-xl text-[#ddd]  max-sm:text-1xl max-sm:pl-1">
                    {details.duration}
                </p>
            </div>
            <ul className="px-6">
                {details.tasks.map((task,index)=>(
                    <li className="text-[#ddd] text-justify text-lg list-disc" key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

function Projects(){
    const projectDetails=[
        {
            role:"Night Vision Enhancer using OmniVision OV5647",
            company:"under Bharat Electronics Limited",
            duration:"Aug 23 - Oct 2023",
            tasks:[
                "Implemented research and development efforts focused on the OmniVision OV5647 chip, leveraging its unique polarizing filter cut for seamless day and night vision with automatic light-switching capabilities.",
                "Conducted an in-depth proof-of-concept presentation, showcasing the project's technical viability and benefits, to key stakeholders and decision-makers at various organizational levels.",
                "Successfully advocated for project funding, receiving approval based on the demonstrated value and effectiveness of the proposed solution."
            ]
        },
        // {
        //     role:"Project name",
        //     company:"tech stack used",
        //     duration:"project duration",
        //     tasks:[
        //     "What you did",
        //     "How you did",
        //     "How did your work improve things",
        //     ]
        // },
    ]
    return(
        <>
            {projectDetails.map((item,index)=>(
                <Card item={item} key={index}/>
            ))}
        </>
    )
}

export {Projects}