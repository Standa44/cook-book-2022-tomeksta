import React from 'react'
import { useState,  } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { BsPeopleFill } from 'react-icons/bs';



import { Alert, Button,  Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row, Spinner } from 'reactstrap';

const AddNewRecipePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState("");
  const [newSideDish, setNewSideDish] = useState("");
  const [newDirections, setNewDirections] = useState("");
  const [newServingCount, setNewServingCount] = useState("");
  const [newPreparationTime, setNewPreparationTime] = useState("");

  const handleNewTitleChange = (value) => setNewTitle(value);
  const handleNewDirectionsChange = (value) => setNewDirections(value);
  const handleNewServingCountChange = (value) => setNewServingCount(value);
  const handleNewdSideDishChange = (value) => setNewSideDish(value);
  const handleNewPreparationTimeChange = (value) =>
    setNewPreparationTime(value);

  const newRecipe = {
    title: newTitle,
    directions: newDirections,
    preparationTime: newPreparationTime,
    sideDish: newSideDish,
    servingCount: newServingCount,
    ingredients: [],
  };

  const slugify = (text) =>
    text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');

  const handleAddNewRecipeClicked = () => {
    setIsLoading(true);
    api
      .post('recipes/', newRecipe)
      .then(() => setIsLoading(false))
      .catch(() => setHasError(true))
      .finally(() => navigate(`/recipe/${slugify(newTitle)}`));
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (hasError) {
    return <Alert color="danger">Vyskytla se chyba</Alert>;
  }

  return (
    <Container>
      <h1>{newTitle}</h1>
      <Form method="POST" onSubmit={() => handleAddNewRecipeClicked()}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="editedTitle">N??zev receptu</Label>
              <Input
                id="editedTitle"
                type="text"
                placeholder="Zadej n??zev receptu"
                value={newTitle}
                onChange={(e) => handleNewTitleChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="editedServingCount">Po??et porc??</Label>
              <InputGroup>
                <Input
                  id="editedServingCount"
                  type="number"
                  placeholder="Zadej po??et porc??"
                  value={newServingCount}
                  onChange={(e) => handleNewServingCountChange(e.target.value)}
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
              <Label for="editedSideDish">P????loha</Label>
              <Input
                id="editedSideDish"
                type="text"
                placeholder="Zadej p????lohu k j??dlu"
                value={newSideDish}
                onChange={(e) => handleNewdSideDishChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="editedPreparationTime">Doba p????pravy</Label>
              <InputGroup>
                <Input
                  id="editedPreparationTime"
                  type="number"
                  placeholder="Zadej dobu p????pravy"
                  value={newPreparationTime}
                  onChange={(e) =>
                    handleNewPreparationTimeChange(e.target.value)
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
              onChange={(e) => handleNewDirectionsChange(e.target.value)}
              value={newDirections}
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
            P??idat recept
          </Button>
        </Row>
        <Row>
          <Link
            to={`/recipe`}
            style={{
              display: 'flex',
              textDecoration: 'none',
              justifyContent: 'center',
            }}
          >
            <Button color="warning" style={{ width: '80%', marginTop: '10px' }}>
              Zru??it
            </Button>
          </Link>
        </Row>
      </Form>
    </Container>
  );
}

export default AddNewRecipePage
