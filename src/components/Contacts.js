function Contact(props){
    const details=props.item
    return (
        <a href={details.link} target="_blank" className="flex flex-col justify-between items-center col-span-2 px-2 pb-4 rounded-lg shadow-md hover:bg-neutral-900 transition hover:shadow-none duration-200 shadow-neutral-950 overflow-hidden scale-110
            max-sm:col-span-4 max-sm:shadow-neutral-950 max-sm:shadow-lg max-sm:h-3/5 aspect-square
        ">
            <div className="scale-75">
                {details.name=="LinkedIn"?
                <img className="scale-60 -mt-3" loading="lazy" src={details.img} alt={details.name}/>
                :details.name=="Github"?<img className={`scale-65 -mt-3 ${details.name=='Github'? "invert":""}`} loading="lazy" src={details.img} alt={details.name}/>:<img className={`scale-75 -mt-3 ${details.name=='Github'? "invert":""}`} loading="lazy" src={details.img} alt={details.name}/>
                }
            </div>
            <p className="text-xl text-[#ddd]">{details.name}</p>
        </a>
    )
}

function Contacts(){
    const contactDetails=[
        {
            name:"Email",
            link:"mailto:singhabhudaya7@gmail.com",
            // img:"https://cdn-icons-png.flaticon.com/128/2099/2099199.png"
            img:"https://cdn-icons-png.flaticon.com/128/732/732200.png"
        },
        {
            name:"LinkedIn",
            link:"https://www.linkedin.com/in/abhudaya-singh-675b461b9",
            img:"https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
        },
        {
            name:"Github",
            link:"https://github.com/singhabhudaya",
            img:"https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
            img:"https://cdn-icons-png.flaticon.com/128/25/25231.png"
        },
        {
            name:"Resume",
            link:"",
            img:"https://cdn-icons-png.flaticon.com/128/2986/2986483.png"
        },
    ]
    return(
        <>
            <div className="animate__animated animate__fadeInUp grid grid-cols-8 w-[70vw] grid-flow-row gap-[6vw] h-[26vh]
                max-sm:h-[65vh] max-sm:w-[85vw] max-sm:gap-[10vw] 
            ">
                {contactDetails.map((item,index)=>(
                    <Contact item={item} key={index}/>
                ))}
            </div>
        </>
    )
}

export {Contacts}