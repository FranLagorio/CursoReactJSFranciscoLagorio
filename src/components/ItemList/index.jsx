import { CardComponent } from "../CardComponent"

export const ItemList = ({ products }) => {

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center align-content-center my-3">
            {products.map(product => {
                return <CardComponent key={product.id} product={product} />
            })
            }
        </div>
    )
}