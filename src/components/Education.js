function Card(props){
    let details=props.details
    return(
        <div className=" animate__animated animate__fadeInUp flex transition duration-300 shadow-md w-[80vw] p-4 px-8 rounded-md items-center justify-between shadow-neutral-900
            max-sm:p-3 max-sm:w-[90vw] max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:shadow-lg max-sm:shadow-neutral-950
        ">
            <div className="flex flex-col gap-2 ">
                <h2 className="text-2xl text-[#eee] max-sm:text-2xl">{details.institute}</h2>
                <p className=" pl-3 text-xl text-[#ccc] max-sm:text-xl max-sm:pl-0 max-sm:my-1
                ">{details.degree}</p>
                <p className=" pl-3 text-xl text-[#ccc]
                    max-sm:hidden
                ">{details.score<10?"CGPA: ":"Percentage: "}{details.score}</p>
            </div>
            <div className="text-[#ccc] text-xl 
            max-sm:pl-3 max-sm:hidden
            ">
                {details.year}
            </div>
            <div className="sm:hidden grid grid-cols-5 grid-flow-col w-full ">
                <p className="text-xl text-[#ccc] col-span-2">{details.score<10?"CGPA: ":"Percentage: "}{details.score}</p>
                <p className="text-[#ccc] text-xl text-right
                                                 col-span-3
                                                ">
                {details.year}
            </p>    
            </div>
        </div>
    )
}

function Education(){
    const educationDetails=[
        {
            institute:"Vellore Institute of Technology, Vellore",
            degree:"B.Tech in Electrical and Electronics Engineering",
            year:"2021-2025",
            score:7.2
        },
        {
            institute:"Amity International School, Mayur Vihar",
            degree:"All India Senior School Certificate Examination",
            year:"2021",
            score:93
        },
    ]
    return(
        <>
            {educationDetails.map((item,index)=>(
                <Card details={item} key={index}/>

            ))}
        </>
    )
}

export {Education};