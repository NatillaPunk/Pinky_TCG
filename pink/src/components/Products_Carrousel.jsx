import { useEffect, useRef } from "react";


export default function Carrousel_Product_Linear (){
    //Setting reference to handle carousel position
    const Carousel_container_ref = useRef(null);

    const listProducts =[
            {
                id:"cardIdentifier0",
                name:"Test",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier1",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier2",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier3",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier4",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier5",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier6",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier7",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier8",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier9",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier10",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier11",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier12",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier13",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier14",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            {
                id:"cardIdentifier15",
                name:"Test2",
                price: "100",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente!",
                url: "https://cardkingdom.imgix.net/final-fantasy-313622?ixlib=php-3.3.1&auto=format&q=35&fit=clip&usm=15&sharp=30&usmrad=1&width=297&blend-w=297"
            },
            

        ];
    
        
        useEffect(()=>{
            
            console.log(Carousel_container_ref);
        })




    return (
     
        <>
            <div className="w-full h-10 flex flex-row">
                <h1 className="">Trending</h1>
            </div>
            <div ref={Carousel_container_ref} className="carousel_product_container   gap-20 w-full h-fit flex flex-row items-center justify-start  overflow-x-scroll ">
            
            {
                listProducts.map(({id,url})=>(
                    
                    <li key={id} className="product_holder  flex flew-row flex-wrap ">
                        
                        <div className="product_image h-60 w-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${url})`}}></div>
                        
                        <div className="product_information">
                            <h4>Product_title</h4>
                            <h5>Product_expansion</h5>
                            <span>Product_Price</span>
                        </div>
                    </li>
                
                
                 ))
            } 
            {/* End of Map */}
                        

            </div>
            <div className="w-full">
                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
        </>
    );
}
