import React from 'react'
import { Alert } from 'reactstrap';

const NoneIngredientsFound = () => {
  return (
    <tr>
      <td colSpan="3">
        <Alert color="secondary" style={{}}>
          Nejsou dostupné žádné ingredience
        </Alert>
      </td>
    </tr>
  );
}

export default NoneIngredientsFound
