import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Swal from 'sweetalert2'

import "./styles.scss";
import { getFirestore } from "../../firebase/client";
import firebase from "firebase/app"
import '@firebase/firestore'

export const CheckoutContainer = () => {
    const { cart, clearCart, removeItem, getTotal, addOne, substractOne } = useContext(ShopContext);
    const [form, setForm] = useState({ email: "", name: "", phone: "" });

    function dispatchOrder(newOrder) {
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(newOrder).then(({ id }) => {
            Swal.fire(`Orden cargada, conserve el id: ${id}. Gracias`);
            actualizarStock(newOrder)
            clearCart()
        })
            .catch(e => {
                Swal.fire("Ha ocurrido un error")
            })
            .finally(() => {
            })
    }

    async function actualizarStock(newOrder) {
        console.log(newOrder.pedido);
        const db = getFirestore();
        const carritoActualizar = db.collection("productos").where(firebase.firestore.FieldPath.documentId(), "in", newOrder.pedido.map(element => element.id));

        const query = await carritoActualizar.get();
        console.log(query)
        const batch = db.batch();
        const outOfStock = []

        query.docs.forEach((docSnapshot, index) => {
            if (docSnapshot.data().stock >= newOrder.pedido[index].cantidad) {
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - newOrder.pedido[index].cantidad })
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
        } else {
            Swal.fire("Algunos productos no tienen stock")
        }
    }

    function validarDatos() {
        if (form.email.includes("@") && form.name !== null && form.phone !== null) {
            const newOrder = {
                buyer: { name: form.name, phone: form.phone, email: form.email },
                pedido: cart.map(element => ({
                    name: element.item.title,
                    id: element.item.id,
                    cantidad: element.cantidad
                })),
                fecha: (new Date()).toLocaleString(),
                total: getTotal()
            }
            console.log(newOrder)
            dispatchOrder(newOrder)
        } else {
            // alert("Complete Datos") 
            const alertPersonalizado = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-danger',
                },
                buttonsStyling: false
            })
            alertPersonalizado.fire({
                title: "ERROR",
                text: "INGRESA TODOS LOS DATOS",
                icon: "error",
                timer: 3000,
                confirmButtonText: "Volver",
            })
        }
    }

    useEffect(() => {
        console.log(form)
    }, [form]);

    return (
        <>
            {cart.length !== 0 ? (
                cart.map((product) => {
                    return (
                        <div className="container d-flex flex-column flex-md-row  justify-content-center align-items-center my-2">
                            <div className="col-8 col-md-2 p-0">
                                <img src={product.item.pictureURL} alt="" />
                            </div>

                            <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center  col-8 col-md-2 py-2 ">
                                <div className="text-center">Producto: {product.item.title}</div>
                            </div>

                            <div className="d-flex flex-row justify-content-center justify-content-md-start align-ite   ms-center  col-8 col-md-2 py-2 ">
                                <div>Precio: ${product.item.price}</div>
                            </div>

                            <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                                <div className="d-flex flex-row w-75 justify-content-around align-items-center p-0 ">
                                    <button
                                        className="btn btn-success d-flex align-items-center h-10"
                                        onClick={() => addOne(product.item, product.cantidad)}
                                    >
                                        +
                                    </button>
                                    <div className="d-flex align-items-center text-center">
                                        {product.cantidad}
                                    </div>
                                    <button
                                        className="btn btn-danger d-flex align-items-center h-10"
                                        onClick={() => substractOne(product.item, product.cantidad)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>

                            <div className="  col-8 col-md-2 d-flex flex-row justify-content-center">
                                <div className=" col-auto d-flex align-items-center">
                                    <button
                                        className="btn btn-danger d-flex align-items-center h-10 m-1"
                                        onClick={() => {
                                            removeItem(product);
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="inline-block d-flex justify-content-center mt-5">
                    <p>
                        No hay productos en el carrito! Haz click para ver los mates!
                        <Link to="/">
                            <button className="mx-1">Listado</button>
                        </Link>
                    </p>{" "}
                </div>
            )}
            <div className="container d-flex justify-content-end">Total: ${getTotal()}</div>
            <div className="container d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => clearCart()}>
                    {" "}
                    LIMPIAR CARRITO{" "}
                </button>
            </div>

            <div className="texto22px text-center my-2">COMPLETA TUS DATOS</div>
            <div className="container d-flex flex-column justify-content-center align-items-center">

                <div className="w-75 container-fluid d-flex flex-row justify-content-center">
                    <label for="name" className="col-3" > Nombre completo:  </label>
                    <input type="text" placeholder="Ingresa tu nombre" className="mx-1" onInput={(e) => setForm({ ...form, name: e.target.value })} />
                </div>

                <div className="w-75 container-fluid d-flex flex-row justify-content-center">
                    <label for="email" className="col-3"> Email:  </label>
                    <input value={null} type="email" placeholder="...@gmail.com" className="mx-1" onInput={(e) => setForm({ ...form, email: e.target.value })} />
                </div>

                <div className="w-75 container-fluid d-flex flex-row justify-content-center">
                    <label for="phone" className="col-3"> Telefono:  </label>
                    <input type="phone" placeholder="+54 9" className="mx-1" onInput={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>

                <button className="btn btn-primary m-4 " onClick={() => validarDatos()}>
                    Comprar
                </button>
            </div>



        </>
    );
};
