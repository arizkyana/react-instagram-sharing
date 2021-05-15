import Styled from '@emotion/styled';

export const NavbarStyled = Styled.nav({
  display: 'block',
  overflow: 'hidden',
  '& > ul > li': {
    float: 'right',
    margin: '1rem'
  },
  '& > ul': {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  }
});
