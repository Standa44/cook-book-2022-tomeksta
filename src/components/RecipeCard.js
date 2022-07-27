import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';
import RecipeCardFooter from './RecipeCardFooter';

export const RecipeCard = (props) => {
  const { slug, title, preparationTime, sideDish } = props;

  return (
    <Card className="h-100">
      <Link
        to={`/recipe/${slug}`}
        style={{ color: 'black', textDecoration: 'none' }}
      >
        <CardImg src={placeholder} alt="Preview" top />
        <CardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '150px',
          }}
        >
          <CardTitle tag="h5">{title}</CardTitle>
          <RecipeCardFooter
            preparationTime={preparationTime}
            sideDish={sideDish}
          />
        </CardBody>
      </Link>
    </Card>
  );
};
