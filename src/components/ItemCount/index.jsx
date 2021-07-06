import { useContext } from "react";
import { useState } from "react";
export const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);
    function agregar(contador, stock) {
        if (stock === "A consultar") {
            console.log("No hay stock");
        } else if (contador < stock) {
            return contador + 1;
        } else {
            console.log(`Maximo disponible ${stock}`);
            return (contador = stock);
        }
    }

    function restar(contador, stock) {
        if (stock === "A consultar") {
            console.log("No hay stock");
        } else if (contador <= stock && contador > 1) {
            return contador - 1;
        } else {
            return (contador = 1);
        }
    }

    return (
        <>
            {stock !== "N/D" ? (
                <>
                    <div className="d-flex flex-row justify-content-center align-content-center w-75 m-auto ">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setContador(agregar(contador, stock));
                            }}
                        >
                            +
                        </button>

                        <div className="px-1 d-flex flex-row justify-content-center align-items-center w-25 texto16px text-center">
                            {stock === "A consultar" && "No hay stock"}
                            {stock !== "A consultar" && contador}
                        </div>

                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                setContador(restar(contador, stock));
                            }}
                        >
                            -
                        </button>
                    </div>

                    <div className="d-flex flex-row justify-content-center align-content-center w-100">
                        <button
                            className="btn btn-dark mt-1 w-100"
                            type="submit"
                            onClick={() => onAdd(contador)}
                        >
                            Agregar al Carrito
                        </button>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};
