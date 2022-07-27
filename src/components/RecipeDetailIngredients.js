import React from 'react'
import { Table } from 'reactstrap';
import RecipeDetailIngredient from './RecipeDetailIngredient';

const RecipeDetailIngredients = ({ ingredients, servingCount }) => {
  return (
    <Table striped style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Množství</th>
          <th>Jednotka</th>
          <th>Surovina</th>
        </tr>
      </thead>
      <tbody>
        <RecipeDetailIngredient
          ingredients={ingredients}
          servingCount={servingCount}
        />
      </tbody>
    </Table>
  );
};

export default RecipeDetailIngredients
