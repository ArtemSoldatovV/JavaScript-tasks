import { createStore } from 'redux';

const defaultState = [
  { id: 1, title: 'Велосипед', count: 5, price: 100 },
  { id: 2, title: 'Самокат', count: 4, price: 100 },
  { id: 3, title: 'Гантели', count: 7, price: 100 },
  { id: 4, title: 'Ракетки', count: 1, price: 100 }
];

const initialState = {
  products: [...defaultState]
};

// Типы действий
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// Редьюсер
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id && product.count < 25
            ? { ...product, count: product.count + 1 }
            : product
        )
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id && product.count > 1
            ? { ...product, count: product.count - 1 }
            : product
        )
      };
    case ADD_PRODUCT:
      const newId = Math.max(...state.products.map(p => p.id)) + 1;
      const newTitle = action.payload.title;
      const newPrice = action.payload.price;
      return {
        ...state,
        products: [
          ...state.products,
          { id: newId, title: newTitle, count: 1, price: newPrice }
        ]
      };
    case REMOVE_PRODUCT:
      // Удаляем товар только если count равен нулю (по условию)
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload.id)
      };
    default:
      return state;
  }
}

const program = createStore(reducer);

export default program;

// Экшены
export const incrementCount = (id) => ({ type: INCREMENT_COUNT, payload: { id } });
export const decrementCount = (id) => ({ type: DECREMENT_COUNT, payload: { id } });
export const addProduct = (title, price) => ({ type: ADD_PRODUCT, payload: { title, price }});
export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, payload: { id } });