import React, { PropsWithChildren } from 'react';

import { MainStyled, ContentStyled } from './main.styled';

import CartContext, { withCartContext } from '../components/cart/cart.context';
import Navbar from '../components/navbar';

function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <MainStyled>
      <Navbar />
      <ContentStyled children={children} />
    </MainStyled>
  )
}

export default MainLayout;