// import { CardComponent } from "../../components/CardComponent";
import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect ( async () => {
            const response = await fetch ("./json/mates.json")
            const data = await response.json()
            setProducts(data)
            console.log(products)
        }  
       
    , [])

    return (
        <>
        <div>
            < ItemList products={products}/>
           
        </div>
        </>
    );
};

//  < CardComponent ruta="/images/mateImperial.jpg" />


{/* <section>
                <h1>{props.greeting.saludo}</h1>

                <div className=" container-fluid flex-row flex-wrap">
                    <CardComponent
                        ruta="./images/mateImperial.jpg"
                        title="Mate Imperial GuardaPampa"
                        price={4900}
                        stock={2}
                    />
                    <CardComponent
                        ruta="./images/mateImperial.jpg"
                        title="Mate Torpedo Clasico"
                        price={2450}
                        stock={1}
                    />
                    <CardComponent
                        ruta="./images/mateImperial.jpg"
                        title="Mate Imperial Clasico"
                        price={4600}
                        stock={3}
                    />
                    
                </div>
            </section> */}