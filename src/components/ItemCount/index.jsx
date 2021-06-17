import { useState } from "react";
// import { onSub } from "../../utils/const";

export const ItemCount = ({ stock, initial, onAdd }) => {
    
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
    
    const [contador, setContador] = useState(initial);

    return (
        <>
            <div className="flex-row justify-content-center align-content-center w-50 ">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setContador(agregar(contador, stock));
                    }}
                >
                    +
                </button>

                <div className="px-1 text-center align-content-center flex-grow-1">
                    {stock === "A consultar" && "No hay stock"}
                    {stock !== "A consultar" && contador}
                </div>

                {/* <input type="text" value={contador} /> */}

                <button
                    className="btn btn-danger"
                    onClick={() => {
                        setContador(restar(contador, stock));
                    }}
                >
                    -
                </button>
            </div>
            <button className="btn btn-dark mt-1 w-100" type="submit" onClick={ () => {onAdd(contador)}}> Agregar al Carrito </button>
        </>
    );
};
