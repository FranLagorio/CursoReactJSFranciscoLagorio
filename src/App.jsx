import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { NavBarContainer } from "./components/NavBarContainer";
import { ItemListContainer } from "./container/ItemListContainer";
import { Footer } from "./components/Footer";

import { ItemDetailContainer } from "./container/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { CheckoutContainer } from "./container/CheckoutContainer";
import { ShopComponentContext, ShopContext } from "./context/ShopContext";
import { FavsContainer } from "./container/FavsContainer";

function App() {
    return (
        <>
            <ShopComponentContext>
                <Router>
                    <header>
                        <NavBarContainer />
                    </header>

                    <Switch>
                        <Route exact path="/">
                            {" "}
                            <ItemListContainer
                                greeting={{ saludo: "BIENVENIDOS A POSTAL DE MATES" }}
                            />
                        </Route>

                        <Route exact path="/category/:category">
                            <ItemListContainer greeting={{ saludo: "Listado por Categoria - " }} />
                        </Route>

                        <Route path="/item/:id">
                            {" "}
                            <ItemDetailContainer greeting={{ saludo: "Detalle de Producto - " }} />
                        </Route>

                        <Route path="/checkout">
                            <CheckoutContainer />
                        </Route>

                        <Route path="/favorites">
                            <FavsContainer />
                        </Route>
                    </Switch>

                    <footer>
                        <Footer />
                    </footer>
                </Router>
            </ShopComponentContext>
        </>
    );
}

export default App;
