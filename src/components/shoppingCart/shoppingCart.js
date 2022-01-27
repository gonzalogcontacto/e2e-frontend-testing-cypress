import { useEffect, useState } from "react";
import store from "../../services/stateManager/store";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  // Sucede sólo en el momento en el que el compomente está omntándose
  useEffect(() => {
    store.subscribe(() => {
      // Se pinta de nuevo el componente con la data que nosotros le seteamos al state del componente
      setProducts(store.getState().cart);
    });
  }, []);

  return (
    <div className="cart">
      {products.map((product) => (
        <div>
          <img style={{ maxWidth: "60px" }} src={product.image}></img>
          <div>{product.price} € </div>
        </div>
      ))}
      {products.length === 0 && <p>No hay productos</p>}
      Total: ${products.reduce((sum, product) => sum + product.price, 0)}
    </div>
  );
};

export default ShoppingCart;
