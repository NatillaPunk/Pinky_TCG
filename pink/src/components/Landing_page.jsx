import { useEffect, useState } from "react"

export default function Landing_page() {
   const [navSize, setNavSize] = useState(100);
   function handleClick(e){
        const landingItems = Array.from(document.querySelectorAll(".landing-item"))
        const clickedImage = e.currentTarget;
        const sliderContainer = document.querySelector(".landing-list")
        console.log(clickedImage)

        const indexImage = landingItems.indexOf(clickedImage)
        sliderContainer.prepend(landingItems[indexImage])

   }




    useEffect(() => {
    const slider = document.querySelector('.landing-list');

    //Function to get and set size of nav
    const navObj = document.getElementsByClassName('menu-container')[0];

      if (navObj){
        setNavSize(navObj.offsetTop)
        console.log(navSize)
      }


    function activate(e) {
      const items = document.querySelectorAll('.landing-item');
      
      if (e.target.matches('.next')) {
        slider.append(items[0]);
      }
      if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
      }
    }

    document.addEventListener('click', activate, false);

    // Cleanup to avoid memory leaks
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, []); // ← run only once on mount




    const gallery_data = [
        {
        index: 0,
        title: "Kefka's Dream Nightmare",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/magic-the-gathering-final-fantasy-kefka.jpg"
        },
        {
        index: 2,
        title: "Amazing Title 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://mtgrocks.com/wp-content/uploads/2025/05/MTG-Final-Fantasy-Diamond-Weapon-Featured-Image.webp"
        },
         {
        index: 1,
        title: "Amazing Title 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus cupiditate molestiae mollitia ut commodi.",
        url: "https://gizmodo.com/app/uploads/2024/10/magic-the-gathering-final-fantasy-tidus-yuna.jpg"
        }
    ]

    return (
    <>
    <section className="w-full h-screen flex flex-row items-center justify-center flex-wrap">        
        <ul className="landing-list relative w-full h-full flex flex-row flex-wrap" style={{top: `${navSize}px`}}>
            {gallery_data.map(({index,title,description,url})=>(
               <li key={index} 
                className="landing-item z-0 flex w-full justify-center align-middle flex-wrap flex-row" onClick={(e)=>{handleClick(e)}}>
                
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
                
       <nav className="nav">
          <ion-icon className="btn prev" name="arrow-back-outline" />
          <ion-icon className="btn next" name="arrow-forward-outline" />
        </nav>
    </section>
    
    </>
    )
}