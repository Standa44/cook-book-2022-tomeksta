import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import SortBy from './SortBy';

const BodyHeader = ({ recipesAmount }) => {
  return (
    <div>
      <h1 style={{ display: 'inline-block' }}>Recepty</h1>
      <i>{"  " + "("+recipesAmount+")"}</i>
      <div style={{ display: 'flex', float: 'right' }}>
        <SortBy />
        <Link
          to={`/novy-recept`}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <Button color="success" style={{ marginLeft: '10px' }}>
            Přidat recept
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BodyHeader
