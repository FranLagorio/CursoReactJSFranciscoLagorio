// export function onAdd(contador, stock) {
//     if (stock === "A consultar") {
//         console.log("No hay stock");
//     } else if (contador < stock) {
//         return contador + 1;
//     } else {
//         console.log(`Maximo disponible ${stock}`);
//         return (contador = stock);
//     }
// }

// export function onSub(contador, stock) {
//     if (stock === "A consultar") {
//         console.log("No hay stock");
//     } else if (contador <= stock && contador > 0) {
//         return contador - 1;
//     } else {
//         return (contador = 0);
//     }
// }

export const onAdd = (x) => {
    alert(`Has agregado ${x} productos al carrito`)
}