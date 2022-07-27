import React, { useContext } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { SortValueContext } from '../Contexts/SortValueContext';

const SortBy = () => {
  const { setSelect } = useContext(SortValueContext);

  return (
    <>
      <h5 style={{ padding: '7px' }}>Seřadit podle</h5>
      <FormGroup>
        <Input
          type="select"
          name="select"
          id="sort"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="title_asc">Názvu: A-Z</option>
          <option value="title_desc">Názvu: Z-A</option>
          <option value="preparation_time_asc">Doby přípravy: nejkratší</option>
          <option value="preparation_time_dsc">Doby přípravy: nejdelší</option>
        </Input>
      </FormGroup>
    </>
  );
};

export default SortBy;
