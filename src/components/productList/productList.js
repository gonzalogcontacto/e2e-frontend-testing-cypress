import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartAddProduct,
  getProducts,
} from "../../services/stateManager/cartActionCreator";
import store from "../../services/stateManager/store";

const ProductList = () => {
  const dispatch = useDispatch();
  // sustituye al store.subscribe y el necesitar un state local.
  const products = useSelector((state) => state.products);

  // Sucede sólo en el momento en el que el compomente está montándose
  useEffect(() => {
    console.log("useEffect");
    dispatch(getProducts());
  }, []);

  const handlerAdd = (product) => {
    // dispatch
    store.dispatch(cartAddProduct(product));
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div>
          <img src={product.image}></img>
          <div>{product.price} €</div>
          <button
            className="addToShoppingCart"
            onClick={() => handlerAdd(product)}
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
