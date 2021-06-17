import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { HomeContainer } from "./container/HomeContainer";

function App() {
    return (
        <div className="App">
            <body>
             < HomeContainer greeting={ {id: 1, saludo: 'BIENVENIDOS A POSTAL DE MATES',  }} />
            </body>   
        </div>
    );
}

export default App;
