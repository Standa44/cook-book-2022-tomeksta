import { useContext } from 'react';
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { BiTime } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { RecipeDetailIngredientsContext } from '../Contexts/RecipeDetailIngredientsContext';

const RecipeDetailPreparationTime = ({ preparationTime, servingCount }) => {
  const { editedServingCount, setEditedServingCount } = useContext(
    RecipeDetailIngredientsContext,
  );

  const getMinutes = (time) => {
    if (time % 60 !== 0) {
      var minutes = (time % 60) + 'min';
    } else return null;
    return minutes;
  };
  const getHours = (time) => {
    if (Math.floor(time / 60) !== 0) {
      var hours = Math.floor(time / 60) + 'h ';
    } else return null;
    return hours;
  };

  return (
    <>
      <h5>
        <BiTime style={{ marginBottom: '3px' }} />
        {!preparationTime && 'neuvedeno'}
        {preparationTime && getHours(preparationTime)}
        {preparationTime && getMinutes(preparationTime)}
      </h5>
      <InputGroup>
        <InputGroupText>
          <BsPeopleFill />
        </InputGroupText>
        <Input
          id="editedServingCount"
          type="number"
          placeholder="Zadej počet porcí"
          value={
            editedServingCount === null ? servingCount : editedServingCount
          }
          onChange={(e) => setEditedServingCount(e.target.value)}
        />
      </InputGroup>
    </>
  );
};

export default RecipeDetailPreparationTime;
