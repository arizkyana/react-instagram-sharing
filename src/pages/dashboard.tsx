import React from 'react';
import CartContext, { ICartItem, IContextValues, withCartContext } from '../components/cart/cart.context';
import MainLayout from '../layouts/main';

const products: ICartItem[] = [
  {
    productId: '1',
    productName: 'Laptop',
  },
  {
    productId: '2',
    productName: 'Smartphone',
  },
  {
    productId: '3',
    productName: 'Tablet',
  },
];

function PageDashboard() {

  const handleAddToCart = (value: IContextValues) => {
    value.setCarts([
      ...value.carts,
      {
        productId: '4',
        productName: 'testing'
      }
    ]);
  };

  return (
    <CartContext.Consumer>
      {(value: IContextValues) => (
        <MainLayout>
          <div>
            <h1>Dashboard</h1>
            <p>Products</p>
            {
              products.map((p: ICartItem, i: number) => (
                <div key={i}>
                  <p>{p.productName}</p>
                  <button type="button" onClick={() => handleAddToCart(value)}>add to cart</button>
                </div>
              ))
            }
          </div>
        </MainLayout>
      )}
    </CartContext.Consumer>
  )
}

export default withCartContext(PageDashboard);
