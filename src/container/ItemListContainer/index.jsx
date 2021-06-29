import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap"

export const ItemListContainer = (props) => {
  const { category } = useParams()

  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  const [filterProducts, setFilterProducts] = useState([])

  useEffect(async () => {
    setLoaded(false);

    const getItems = async () => {
      console.log(products)
      let filtrados

      if (products.length === 0) {
        const responseMates = await fetch("/json/mates.json");
        const dataMates = await responseMates.json();
        filtrados = dataMates
        setProducts(dataMates)
      } else {
        console.log(category)
        filtrados = category ? products.filter(element => element.category === category) : products
      }

      setFilterProducts(filtrados)
      setLoaded(true)
    }

    getItems()

  }, [products, category]);

  return (
    <>
      {category ?
        <h1 className="text-center my-5">{props.greeting.saludo + category}</h1> :
        <h1 className="text-center my-5">{props.greeting.saludo}</h1>}

      {loaded ?
        (<div>
          <ItemList products={filterProducts} />
        </div>) :
        (<div className="d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>)
      }
    </>
  );
};

