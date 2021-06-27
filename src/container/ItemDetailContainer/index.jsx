import { useState } from "react";
import { useEffect } from "react";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";

export const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);

  useEffect(async () => {
    const response = await fetch("./json/mates.json");
    const productos = await response.json();
    setItem(productos[0]);
  }, []);

  return (
    <>
      {items ? (
        <ItemDetailComponent product={items} />
      ) : (
        console.log("No cargue")
      )}
    </>
  );
};
