import { Navbar, Container } from 'reactstrap';
import { NavbarWrapper } from './styledComponents';
import HeaderHeadline from './HeaderHeadline';

export function Header() {
  return (
    <NavbarWrapper>
      <Navbar color="dark" dark>
        <Container>
          <HeaderHeadline />
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
}
