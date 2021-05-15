import Styled from '@emotion/styled';

export const ProductsStyled = Styled.div({});

export const ProductsList = Styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  // border: '1px solid red',
  margin: '0 -3px'
});

export const ProductsItem = Styled.div({
  border: '1px solid black',
  margin: '3px',
  width: '35%',
  padding: '.8rem',
  borderRadius: '.5rem'
});

export const ProductItemTitle = Styled.div({
  fontSize: '15pt',
  fontWeight: 'bold',
  marginBottom: '1rem'
})