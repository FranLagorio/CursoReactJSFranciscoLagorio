import { CardComponent } from "../../components/CardComponent";
import { NavBar } from "../../components/NavBar";
import { useEffect } from "react";

import "./estilosHomeContainer.scss";

export const HomeContainer = (props) => {

    useEffect ( () => {
        console.log("Se crea una card")
        return () => {
            console.log("Se modifica estado")
        }
    })

    return (
        <>
          
            <header>
                <NavBar  />
            </header>

            <section>
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
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
            </section>
        </>
    );
};

//  < CardComponent ruta="/images/mateImperial.jpg" />
