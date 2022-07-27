import { useState, useEffect } from 'react';
import { Alert, Col, Spinner, Table } from 'reactstrap';
import { api } from '../api';

const SideDishesPage = () => {
  const [sideDishes, setSideDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    api
      .get('recipes/side-dishes')
      .then((response) => setSideDishes(response.data), setIsLoading(false))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (hasError) {
    return <Alert color="danger">Vyskytla se chyba</Alert>;
  }

  if (!sideDishes) {
    return null;
  }

  return (
    <div>
      <h1 style={{ display: 'inline-block' }}>Přílohy</h1>
      <Col md="6">
        <Table striped style={{ textAlign: 'center' }}>
          <thead></thead>
          <tbody>
            {sideDishes.map((sideDish, index) => (
              <tr key={index}>
                <td>{sideDish}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </div>
  );
};

export default SideDishesPage;
