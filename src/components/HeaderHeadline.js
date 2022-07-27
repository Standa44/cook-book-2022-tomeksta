import { Link } from 'react-router-dom';

import { SideDishAndRecipesWrapper } from './styledComponents';
import NavbarBrandComponent from './NavbarBrandComponent';

const HeaderHeadline = () => {

  return (
    <>
      <NavbarBrandComponent/>
      <SideDishAndRecipesWrapper>
        <Link to="/prilohy">Přílohy</Link>
      </SideDishAndRecipesWrapper>
      <SideDishAndRecipesWrapper>
        <Link to="/">Recepty</Link>
      </SideDishAndRecipesWrapper>
    </>
  );
};

export default HeaderHeadline;
