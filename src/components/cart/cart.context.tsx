import React, { createContext, useState } from 'react';

export interface ICartItem {
  productId: string;
  productName: string;
}

export interface IContextValues {
  carts: ICartItem[];
  setCarts: (carts: ICartItem[]) => void;
}

const contextValues: IContextValues = {
  carts: [],
  setCarts: () => { },
}

const CartContext = createContext(contextValues);

export const withCartContext = (WrappedComponent: React.FC) => {
  const ChildComponent = (): JSX.Element => {
    const [carts, setCarts] = useState<ICartItem[]>([]);
    return (
      <CartContext.Provider value={{
        carts,
        setCarts,
      }}>
        <WrappedComponent />
      </CartContext.Provider>
    )
  };
  return ChildComponent;
}

export default CartContext;
