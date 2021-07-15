import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./container/ItemListContainer";
import { ItemDetailContainer } from "./container/ItemDetailContainer";

import { CheckoutContainer } from "./container/CheckoutContainer";
import { ShopComponentContext } from "./context/ShopContext";
import { FavsContainer } from "./container/FavsContainer";

function App() {
    return (
        <>
            <ShopComponentContext>
                <Router>
                    <header style={{ zIndex: 2 }}>
                        <NavBar />
                    </header>

                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer
                                greeting={{ saludo: "BIENVENIDOS A POSTAL DE MATES" }}
                            />
                        </Route>

                        <Route exact path="/category/:category">
                            <ItemListContainer greeting={{ saludo: "Listado por Categoria - " }} />
                        </Route>

                        <Route path="/item/:id">
                            <ItemDetailContainer greeting={{ saludo: "Detalle de Producto - " }} />
                        </Route>

                        <Route path="/checkout">
                            <CheckoutContainer />
                        </Route>

                        <Route path="/favorites">
                            <FavsContainer />
                        </Route>
                    </Switch>

                    {/* <footer>
                        <Footer />
                    </footer> */}
                </Router>
            </ShopComponentContext>
        </>
    );
}

export default App;
