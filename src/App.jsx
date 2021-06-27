import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./container/ItemListContainer";
import { ItemDetailContainer } from "./container/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <NavBar />
        </header>

          {/* <ItemListContainer
            greeting={{ id: 1, saludo: "BIENVENIDOS A POSTAL DE MATES" }}
          /> */}

        < ItemDetailContainer />
      </body>
    </div>
  );
}

export default App;
