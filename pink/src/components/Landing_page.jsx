import { useEffect } from "react"

export default function Landing_page() {
    const gallery_data = [
        {
        index: 1,
        title: "Kefka's Dream Nightmare",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/magic-the-gathering-final-fantasy-kefka.jpg"
        },
        {
        index: 2,
        title: "Amazing Title 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://mtgrocks.com/wp-content/uploads/2025/05/MTG-Final-Fantasy-Diamond-Weapon-Featured-Image.webp"
        }
    ]

    return (
    <>
    <section className="w-full h-screen flex flex-row items-center justify-center flex-wrap">        
        <ul className="w-full h-full landing-list flex flex-row flex-wrap">
            {gallery_data.map(({index,title,description,url})=>(
               <li key={index} className="landing-item flex w-full justify-center align-middle flex-wrap flex-row">
                <div className="landing-text flex w-3/6 text-white justify-center align-middle flex-wrap flex-row absolute left-11 bottom-3/12">
                    <h1 className="w-full">{title}</h1>
                    <p className="w-full">{description}</p>
                </div>
                <div className="landing-image basis-full bg-[url({url})] bg-cover bg-center " style={{ backgroundImage: `url(${url})` }}></div>
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