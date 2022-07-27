import styled from '@emotion/styled';

export const RecipeCardWrapper = styled.div`
  overflow: hidden;
  transition: box-shadow 300ms;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.26), 0 10px 10px rgba(0, 0, 0, 0.22);
    -ms-transform: scale(1.03);
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    img {
      //-ms-transform: scale(1.2);
      //-webkit-transform: scale(1.2);
      //transform: scale(1.2);
    }
  }
`;

export const NavbarWrapper = styled.div`
  position: sticky ;
  top: 0;
  z-index: 2;
`;

export const CardBodyWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  min-height: '150px';
`;

export const ArrayDirectionsWrapper = styled.div`
  display: flex;
  p {
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }
  &:hover {
    border-radius: 10px;
    background-color: #f1d2a7;
  }
`;

export const SideDishAndRecipesWrapper = styled.div`
  display: 'flex';
  float: right;
  font-family: Amatic SC, cursive;
  font-size: 25px;
  color: white;
  padding: 20px;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: lightgray;
  }
`;




