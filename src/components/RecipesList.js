import { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { SortValueContext } from '../Contexts/SortValueContext';
import { RecipeCard } from './RecipeCard';
import { RecipeCardWrapper } from './styledComponents';
import NoneResultFound from './NoneResultFound';

export const RecipesList = (props) => {
  const { select } = useContext(SortValueContext);
  const { recipes } = props;

  const sortRecipes = (recipes) => {
    const recipesCopy = [...recipes];
    switch (select) {
      case 'preparation_time_asc':
        recipesCopy.sort((currentRecipe, nextRecipe) => {
          if (!currentRecipe.preparationTime) {
            return 1;
          }
          if (!nextRecipe.preparationTime) {
            return -1;
          }
          if (currentRecipe.preparationTime === nextRecipe.preparationTime) {
            return 0;
          }
          return currentRecipe.preparationTime < nextRecipe.preparationTime
            ? -1
            : 1;
        });
        break;
      case 'preparation_time_dsc':
        recipesCopy.sort((currentRecipe, nextRecipe) => {
          if (!currentRecipe.preparationTime) {
            return 1;
          }
          if (!nextRecipe.preparationTime) {
            return -1;
          }
          if (currentRecipe.preparationTime === nextRecipe.preparationTime) {
            return 0;
          }
          return currentRecipe.preparationTime < nextRecipe.preparationTime
            ? 1
            : -1;
        });
        break;
      case 'title_desc':
        recipesCopy.sort((currentRecipe, nextRecipe) =>
          currentRecipe.title < nextRecipe.title ? 1 : -1,
        );
        break;
      default:
        recipesCopy.sort((currentRecipe, nextRecipe) =>
          currentRecipe.title < nextRecipe.title ? -1 : 1,
        );
    }
    return recipesCopy;
  };

  return (
    <Row className="gy-4">
      {recipes.length === 0 && <NoneResultFound />}
      {recipes !== 0 &&
        sortRecipes(recipes).map(
          ({ _id, slug, title, preparationTime, sideDish }) => {
            return (
              <Col key={_id} lg={3} md={4} sm={6} xs={12}>
                <RecipeCardWrapper>
                  <RecipeCard
                    title={title}
                    slug={slug}
                    preparationTime={preparationTime}
                    sideDish={sideDish}
                  />
                </RecipeCardWrapper>
              </Col>
            );
          },
        )}
    </Row>
  );
};
