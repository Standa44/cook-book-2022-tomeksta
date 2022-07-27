import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { api } from '../api';

import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
  Spinner,
} from 'reactstrap';
import { BsPeopleFill } from 'react-icons/bs';

const RecipeEditPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    directions,
    title,
    preparationTime,
    _id,
    slug,
    servingCount,
    sideDish,
    ingredients,
  } = location.state;

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedSideDish, setEditedSideDish] = useState(sideDish);
  const [editedDirections, setEditedDirections] = useState(directions);
  const [editedServingCount, setEditedServingCount] = useState(servingCount);
  const [editedPreparationTime, setEditedPreparationTime] =
    useState(preparationTime);

  const handleEditedTitleChange = (value) => setEditedTitle(value);
  const handleEditedSideDishChange = (value) => setEditedSideDish(value);
  const handleEditedDirectionsChange = (value) => setEditedDirections(value);
  const handleEditedServingCountChange = (value) =>
    setEditedServingCount(value);
  const handleEditedPreparationTimeChange = (value) =>
    setEditedPreparationTime(value);

  const newRecipe = {
    title: editedTitle,
    directions: editedDirections,
    preparationTime: editedPreparationTime,
    sideDish: editedSideDish,
    servingCount: editedServingCount,
    ingredients: ingredients,
  };

  const handleSubmitClicked = () => {
    setIsLoading(true);
    api
      .post(`recipes/${_id}`, newRecipe)
      .then(() => setIsLoading(false))
      .catch(() => setHasError(true))
      .finally(() => navigate(`/`));
  };


  if (isLoading) {
    return <Spinner />;
  }
  if (hasError) {
    return <Alert color="danger">Vyskytla se chyba</Alert>;
  }

   if (!location.state) {
     return null;
   }

  return (
    <>
      <h2>{title}</h2>
      <Form method="POST" onSubmit={() => handleSubmitClicked()}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="editedTitle">Název receptu</Label>
              <Input
                id="editedTitle"
                type="text"
                placeholder="Zadej název receptu"
                value={editedTitle}
                onChange={(e) => handleEditedTitleChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="editedServingCount">Počet porcí</Label>
              <InputGroup>
                <Input
                  id="editedServingCount"
                  type="number"
                  placeholder="Zadej počet porcí"
                  value={editedServingCount}
                  onChange={(e) =>
                    handleEditedServingCountChange(e.target.value)
                  }
                />
                <InputGroupText>
                  <BsPeopleFill />
                </InputGroupText>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="editedSideDish">Příloha</Label>
              <Input
                id="editedSideDish"
                type="text"
                placeholder="Zadej přílohu k jídlu"
                value={editedSideDish}
                onChange={(e) => handleEditedSideDishChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="editedPreparationTime">Doba přípravy</Label>
              <InputGroup>
                <Input
                  id="editedPreparationTime"
                  type="number"
                  placeholder="Zadej dobu přípravy"
                  value={editedPreparationTime}
                  onChange={(e) =>
                    handleEditedPreparationTimeChange(e.target.value)
                  }
                />
                <InputGroupText>min</InputGroupText>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <FormGroup>
            <Label for="directions">Postup</Label>
            <Input
              id="directions"
              type="textarea"
              name="text"
              onChange={(e) => handleEditedDirectionsChange(e.target.value)}
              value={editedDirections}
              style={{ minHeight: '200px' }}
            />
          </FormGroup>
        </Row>
        <Row>
          <Button
            color="success"
            type="submit"
            style={{ width: '80%', margin: 'auto' }}
          >
            Uložit
          </Button>
        </Row>
        <Row>
          <Link
            to={`/recipe/${slug}/`}
            style={{
              display: 'flex',
              textDecoration: 'none',
              justifyContent: 'center',
            }}
          >
            <Button color="warning" style={{ width: '80%', marginTop: '10px' }}>
              Zrušit
            </Button>
          </Link>
        </Row>
      </Form>
    </>
  );
};

export default RecipeEditPage;
