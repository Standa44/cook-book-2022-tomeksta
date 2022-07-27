import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import { Container, Spinner, Alert, Row, Col } from 'reactstrap';
import RecipeDetailDirections from '../components/RecipeDetailDirections';
import RecipeDetailPreparationTime from '../components/RecipeDetailPreparationTime';
import RecipeDetailButtonGroup from '../components/RecipeDetailButtonGroup';
import RecipeDetailIngredients from '../components/RecipeDetailIngredients';
import { RecipeDetailIngredientsContext } from '../Contexts/RecipeDetailIngredientsContext';

export function RecipeDetailPage() {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [editedServingCount, setEditedServingCount] = useState(null);

  const { slug } = useParams();
  useEffect(() => {
    setIsLoading(true);
    api
      .get(`recipes/${slug}`)
      .then((response) => setRecipe(response.data), setIsLoading(false))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [slug]);

  if (isLoading) {
    return <Spinner />;
  }
  if (hasError) {
    return <Alert color="danger">Vyskytla se chyba</Alert>;
  }

  if (!recipe) {
    return null;
  }

  const { title, preparationTime, ingredients, directions, servingCount } =
    recipe;

  return (
    <Container>
      <div>
        <h1 style={{ display: 'inline-block' }}>{title}</h1>
        <RecipeDetailButtonGroup recipe={recipe} />
      </div>

      <Row>
        <Col lg={4}>
          <RecipeDetailIngredientsContext.Provider
            value={{ editedServingCount, setEditedServingCount }}
          >
            <RecipeDetailPreparationTime
              preparationTime={preparationTime}
              servingCount={servingCount}
            />
            <RecipeDetailIngredients
              ingredients={ingredients}
              servingCount={servingCount}
            />
          </RecipeDetailIngredientsContext.Provider>
        </Col>
        <RecipeDetailDirections directions={directions} />
      </Row>
    </Container>
  );
}
