import Styled from '@emotion/styled';

export const MainStyled = Styled.div({
  width: '720px',
  margin: '0 auto',
  minHeight: '100vh',
});

export const NavbarStyled = Styled.nav({
  display: 'block',
  overflow: 'hidden',
  '& > ul > li': {
    float: 'left',
    margin: '1rem'
  },
  '& > ul': {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  }
});

export const ContentStyled = Styled.section({
  padding: '1rem',
});