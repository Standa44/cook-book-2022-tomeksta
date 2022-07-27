import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Alert, Button, ButtonGroup, Spinner } from 'reactstrap';
import { api } from '../api';
import { BsTrash, BsPencilSquare } from 'react-icons/bs';

const RecipeDetailButtonGroup = ({ recipe }) => {
  const {
    _id,
    slug,
    title,
    preparationTime,
    ingredients,
    directions,
    servingCount,
    sideDish,
  } = recipe;
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const handleRemoveClicked = (_id) => {
    setIsLoading(true);
    api
      .delete(`recipes/${_id}`)
      .then(() => setIsLoading(false))
      .catch(() => setHasError(true))
      .finally(() => navigate('/'));
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (hasError) {
    return <Alert color="danger">Vyskytla se chyba</Alert>;
  }

  if (!_id) {
    return null;
  }

  return (
    <div style={{ display: 'flex', float: 'right' }}>
      <ButtonGroup>
        <Link
          to={`/recipe/${slug}/upravit`}
          state={{
            directions: directions,
            title: title,
            preparationTime: preparationTime,
            _id: _id,
            slug: slug,
            servingCount: servingCount,
            sideDish: sideDish,
            ingredients: ingredients
          }}
          style={{ color: 'black', textDecoration: 'none' }}
        >
          <Button color="info">
            <BsPencilSquare />
            Edit
          </Button>
        </Link>

        <Button color="danger" onClick={() => handleRemoveClicked(_id)}>
          <BsTrash />
          Remove
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default RecipeDetailButtonGroup;
