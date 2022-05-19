import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

/* 
`createContext` provides a container containing some data and making it   available to the entire hierarchy of components below without having to pass props down.
 */
export const ProductsContext = createContext({
  products: [],
  
});


export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = {products};
  
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

/*

const productReducer = (state, action) => {
  return {
    currentUser: 
  }
}

*/

