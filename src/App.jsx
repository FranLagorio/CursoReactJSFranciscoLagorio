import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { ItemListContainer } from "./container/HomeContainer";
import { NavBar } from "./components/NavBar";



function App() {
    return (
        <div className="App">
            <body>

                <header>
                    < NavBar />
                </header>

                <main >

                    < ItemListContainer greeting={ {saludo: 'BIENVENIDOS A POSTAL DE MATES' }} />

                </main>

            </body>   
        </div>
    );
}
export default App;
