//selectors

export const getProducts = ({ products }) => products;
export const getProductsBasic = ({ products }) =>
  products.filter((product) => product.category === 'Basic');
export const getProductsExtended = ({ products }) =>
  products.filter((product) => product.category === 'Extended');
  export const getProductsById = ({ products }, id) =>
  products.find((product) => product.id === id);
// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');
// action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default productsReducer;