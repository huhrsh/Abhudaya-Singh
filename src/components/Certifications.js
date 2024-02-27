import belCert from "../assets/BEL certificate.png" 
import ngoCert from "../assets/NGO certificate.png"
import busCert from "../assets/bus certificate.png"

function Certificate(props){
    const details=props.item
    console.log(details)
    return(
        <div className="col-span-1 m-4 flex flex-col items-center gap-3
            max-sm:col-span-2 max-sm:mx-0
        ">
            {details.link?
            <a target="_blank"  href={details.link} className="w-5/6 bg-no-repeat bg-cover border-8 border-double border-[#fff] bg-neutral-900 shadow-lg shadow-neutral-950 aspect-4/3 flex items-center  justify-center max-sm:w-11/12" 
                // style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/1438/1438680.png')" }}
            >
                <img loading="lazy" className="w-full border-2 object-cover border-neutral-700"  src={details.img} alt="certificate"/>
            </a>
            :
            <div className="w-5/6 bg-no-repeat bg-cover border-8 border-double border-[#fff] bg-neutral-900 shadow-lg shadow-neutral-950 aspect-4/3  max-sm:w-11/12" 
                // style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/1438/1438680.png')" }}
            >
                <img loading="lazy" className="w-full border-2 object-cover border-neutral-700"  src={details.img} alt="certificate"/>
            </div>

        }
            <div className="flex flex-col items-center">
                <h2 className="text-2xl text-[#ddd]" >{details.issuer}</h2>
                <p className="text-xl text-[#ccc]" >{details.title}</p>
            </div>
        </div>
    )
}

function Certifications(){
    const certificateDetails=[
     {
        title:"Training Certificate",
        issuer:"Bharat Electronics",
        durtion:"",
        img:belCert,
        link:"",
     },   
     {
         title:"Certificate of Completion",
         issuer:"SkillUP by Simplilearn",
         durtion:"duration if available",
         img:busCert,
         link:"https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2NjQiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl80MTU5MzkwXzE2NzYyNzY0MDMucG5nIiwidXNlcm5hbWUiOiJBYmh1ZGF5YSBTaW5naCJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4159390_1676276403.png&_branch_match_id=1149359643915441876&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1i9NColwDvR0y6tIAgC3LteHIwAAAA%3D%3D",
        },   
        {
           title:"Certificate of Appreciation",
           issuer:"Serve - Welfare Society",
           durtion:"",
           img:ngoCert,
           link:"",
        },   
    //  {
    //     title:"Title of certificate",
    //     issuer:"Name of issuer",
    //     durtion:"duration if available",
    //     img:"",
    //     link:"",
    //  },   
    ]
    return(
        <>
        <div className="animate__animated animate__fadeIn slower  grid grid-cols-2 grid-flow-row w-full px-8 max-sm:px-0 max-sm:mt-4">
            {certificateDetails.map((item,index)=>(
                <Certificate item={item} key={index}/>
            ))}
        </div>
        </>
    )
}

export {Certifications}

