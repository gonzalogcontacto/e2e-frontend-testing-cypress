import logo from './logo.svg';
import './App.css';
import ProductList from './components/productList/productList';
import ShoppingCart from './components/shoppingCart/shoppingCart';

function App() {
  return (
    <div className="App">
        <ShoppingCart />
        <ProductList />
    </div>
  );
}

export default App;
