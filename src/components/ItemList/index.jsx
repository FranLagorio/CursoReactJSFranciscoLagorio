import {CardComponent} from "../CardComponent"

export const ItemList = ({products}) => {
        return (
            <div>
            {products.map( product => {
                return < CardComponent product={product}  />     
            })
            }        
            </div>
    )
}