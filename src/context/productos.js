import { createContext, useContext } from 'react';

export const ProductosContext = createContext();

export function useProductos() {
  return useContext(ProductosContext);
}