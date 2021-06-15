import { CardComponent } from "../../components/CardComponent";
import "./estilosItemListContainer.scss";


export const ItemListContainer = ( props  ) => {
    return (
       <>

       <div>
          
          <h1>{props.greeting.saludo}</h1>
          
          <div className="container col-12 flex-row flex-wrap">
             < CardComponent ruta = "./images/mateImperial.jpg" />
             < CardComponent ruta = "./images/mateTorpedo.jpg" />
             < CardComponent  />
             < CardComponent  />
             < CardComponent />
             < CardComponent />
          </div>
       </div>

       </>
    )}

   //  < CardComponent ruta="/images/mateImperial.jpg" />