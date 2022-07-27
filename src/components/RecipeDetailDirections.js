import { Button, Col,  } from 'reactstrap';
import { ArrayDirectionsWrapper } from './styledComponents';

const RecipeDetailDirections = ({directions}) => {
  const copyToClipboard = (direction) => {
    navigator.clipboard.writeText(direction.slice(2).trim());
    return alert('Text byl zkopírován');
  };

  const splitDirectionsToArray = (directions) => {
    const arrayDirections = directions.split(/(?:\n\n|\n)+/);
    return arrayDirections.map((direction, index) => (
      <ArrayDirectionsWrapper key={index}>
        <p>
          <Button
            color="warning"
            onClick={ () => copyToClipboard(direction) }
            title="Zkopírovat daný krok"
            style={{width: "40px", height: "40px"}}
          >
            {index + 1}
          </Button>
        </p>
        <p>{direction.slice(2).trim()}</p>
      </ArrayDirectionsWrapper>
    ));
  };

  return (
    <>
      <Col lg={8}>{directions && splitDirectionsToArray(directions)}</Col>
    </>
  );
}

export default RecipeDetailDirections
