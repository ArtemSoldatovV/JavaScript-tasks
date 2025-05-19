import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCount,
  decrementCount,
  addProduct,
  removeProduct
} from './module/program';

function App() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const title = prompt('Введите название товара');
    const price = prompt('Введите стоимость товара');
    if (title) {
      dispatch(addProduct(title, price));
    }
  };

  // Обработка увеличения количества товара
  const handleIncrement = (id) => {
    dispatch(incrementCount(id));
  };

  // Обработка уменьшения количества товара
  const handleDecrement = (id) => {
    dispatch(decrementCount(id));
    // После уменьшения проверяем и удаляем товар если count ==0
    const product = products.find(p => p.id === id);
    if (product.count -1 <=0 ) {
      dispatch(removeProduct(id));
    }
  };
  const cartItems = useSelector(state => state.products);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div>
      <h1>Товары</h1>
      <button onClick={handleAddProduct}>Добавить товар</button>
      <h3>Общая стоимость корзины: {totalCost}</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong> - стоимость одного товара: {product.price}
            , Общая сумма: {product.price * product.count}  
            <button onClick={() => handleIncrement(product.id)}>+</button>
            Количество: {product.count}
            <button onClick={() => handleDecrement(product.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;