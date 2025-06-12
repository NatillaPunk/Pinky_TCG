import { useEffect } from "react"

export default function Landing_page() {
    function handleClick(index) {
            let landingItems = document.querySelectorAll(".landing-item")
            let slider = document.querySelector(".landing-list")
        

            console.log("Landing Items", landingItems[index]);
            slider.prepend(landingItems[index])

            
    }

    useEffect(()=>{
        document.addEventListener('click', (e)=>{
            

            

        })
        
    },[])




    const gallery_data = [
        {
        index: 0,
        title: "Kefka's Dream Nightmare",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/magic-the-gathering-final-fantasy-kefka.jpg"
        },
        {
        index: 1,
        title: "Amazing Title 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://mtgrocks.com/wp-content/uploads/2025/05/MTG-Final-Fantasy-Diamond-Weapon-Featured-Image.webp"
        },
         {
        index: 2,
        title: "Amazing Title 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://th.bing.com/th/id/R.c4b36df7562097407fd22646e37f0a56?rik=FU1CwSIAfZXDog&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fP8XPAVk.jpg&ehk=Vy3nqmQv1yCwJx49ajP0nr1HZrgmh6nJUtPpaz2ILBA%3d&risl=&pid=ImgRaw&r=0"
        }
    ]

    return (
    <>
    <section className="w-full h-screen flex flex-row items-center justify-center flex-wrap">        
        <ul className="landing-list relative w-full h-full flex flex-row flex-wrap">
            {gallery_data.map(({index,title,description,url})=>(
               <li key={index} 
                className="landing-item z-0 flex w-full justify-center align-middle flex-wrap flex-row" onClick={()=>{handleClick(index)}}>
                
                <div className="landing-text flex w-3/6 text-white justify-center align-middle flex-wrap flex-row absolute left-11 bottom-3/12">
                    <h1 className="w-full">{title}</h1>
                    <p className="w-full">{description}</p>
                </div>
                <div className="landing-image basis-full bg-cover bg-center " style={{ backgroundImage: `url(${url})` }}></div>
                </li>
            ))}

            {/* <li className="landing-item flex w-full justify-center align-middle flex-wrap flex-row">
                <div className="landing-text flex w-3/6 text-white justify-center align-middle flex-wrap flex-row absolute left-11 bottom-3/12">
                    <h1 className="w-full">{gallery_data[0].title}</h1>
                    <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae amet quod voluptatum ducimus, officiis iste ipsum cum cupiditate nihil nesciunt!</p>
                </div>
                <div className="landing-image basis-full bg-[url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/magic-the-gathering-final-fantasy-kefka.jpg)] bg-cover bg-center "></div>
            </li> */}
            
        </ul>

       
    </section>
    
    </>
    )
}