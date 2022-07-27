import { useContext } from 'react';
import { RecipeDetailIngredientsContext } from '../Contexts/RecipeDetailIngredientsContext';
import NoneIngredientsFound from './NoneIngredientsFound';

const RecipeDetailIngredient = ({ ingredients, servingCount }) => {
  const { editedServingCount } = useContext(
    RecipeDetailIngredientsContext,
  );

  const getActualAmount = (amount, servingCount, editedServingCount) => {
    if (!amount)
      return 
    const acutalAmount = (amount / servingCount) * editedServingCount;
    const rounded = Math.round(acutalAmount * 10) / 10;
    return rounded;
  };

  return (
    <>
      {ingredients.length !== 0 ? (
        ingredients.map(({ _id, amount, amountUnit, name }) => (
          <tr key={_id}>
            <td>
              {editedServingCount === null ? amount :
                getActualAmount(amount, servingCount, editedServingCount)}
              {!amount && '-'}
            </td>
            <td>
              {amountUnit} {!amountUnit && '-'}
            </td>
            <td>
              {name}
              {!name && '-'}
            </td>
          </tr>
        ))
      ) : (
        <NoneIngredientsFound />
      )}
    </>
  );
};

export default RecipeDetailIngredient;
