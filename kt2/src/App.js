import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
  ]);

  const addProduct = () => {
    const input = prompt('Введите имя и цену товара (например, "Велосипед 1000")');
    if (input) {
      const [name, price] = input.split(' ');
      const newProduct = {
        id: Date.now(),
        name: name,
        price: parseInt(price, 10),
        count: 1,
      };
      setProducts([...products, newProduct]);
    }
  };

  const incrementCount = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.count < 25 ? { ...product, count: product.count + 1 } : product
    ));
  };

  const decrementCount = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleDoubleClick = (id) => {
    const product = products.find(p => p.id === id);
    if (product && product.count === 0) {
      removeProduct(id);
    }
  };

  return (
    <div>
      <button class="add_product_button" onClick={addProduct}>Добавить товар</button>
      <ul class="position">
        {products.map(product => (
          <li key={product.id} onDoubleClick={() => handleDoubleClick(product.id)}>
			<ul class="box location">
			
				<li class="two_thirds_box">
					{product.name}
					<br/>
					<br/>
					Price:{product.price}
				</li>
				<br/>
				<li class="one_thirds_box">
					<button class="button_plus_minus" onClick={() => incrementCount(product.id)}>+</button>
				</li>
				<li class="one_thirds_box">
					{product.count}
				</li>
				<li class="one_thirds_box">
					<button class="button_plus_minus" onClick={() => decrementCount(product.id)}>-</button>
				</li>
				
			</ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;