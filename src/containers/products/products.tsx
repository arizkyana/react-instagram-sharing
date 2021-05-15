import React from 'react';
import CartContext, { ICartItem, IContextValues, withCartContext } from '../../components/cart/cart.context';
import MainLayout from '../../layouts/main';

import { ProductsList, ProductsStyled, ProductsItem, ProductItemTitle } from './products.styled';

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

  const handleAddToCart = (value: IContextValues, product: ICartItem) => {
    value.setCarts([
      ...value.carts,
      {
        ...product,
      }
    ]);
  };

  return (
    <CartContext.Consumer>
      {(value: IContextValues) => (
        <MainLayout>
          <ProductsStyled>
            <h1>Products</h1>
            <ProductsList>
              {
                products.map((p: ICartItem, i: number) => (
                  <ProductsItem key={i}>
                    <ProductItemTitle children={p.productName} />
                    <button type="button" onClick={() => handleAddToCart(value, p)}>add to cart</button>
                  </ProductsItem>
                ))
              }
            </ProductsList>
          </ProductsStyled>
        </MainLayout>
      )}
    </CartContext.Consumer>
  )
}

export default withCartContext(PageDashboard);
