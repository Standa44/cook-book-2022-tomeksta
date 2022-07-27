import React from 'react';
import { CardSubtitle } from 'reactstrap';
import { BiTime } from 'react-icons/bi';
import {
  GiBowlOfRice,
  GiSlicedBread,
  GiCabbage,
  GiPotato,
} from 'react-icons/gi';

const RecipeCardFooter = (props) => {
  const { preparationTime, sideDish } = props;
  const getMinutes = (time) => {
    if (time % 60 !== 0) {
      var minutes = (time % 60) + 'min';
    } else return null;
    return minutes;
  };
  const getHours = (time) => {
    if (Math.floor(time / 60) !== 0) {
      var hours = Math.floor(time / 60) + 'h';
    } else return null;
    return hours;
  };

  const sideDishSwitch = (sideDish) => {
    sideDish = categorize(sideDish);
    var icon;

    function categorize(str) {
      if (str.includes('bram')) {
        return 'brambory';
      }
      if (str.includes('zelí')) {
        return 'zelí';
      }
      return str;
    }

    switch (sideDish) {
      case 'rýže':
        icon = <GiBowlOfRice />;
        break;
      case 'zelí':
        icon = <GiCabbage />;
        break;
      case 'chléb':
        icon = <GiSlicedBread />;
        break;
      case 'pečivo':
        icon = <GiSlicedBread />;
        break;
      case 'brambory':
        icon = <GiPotato />;
        break;
      default:
        icon = <GiBowlOfRice />;
    }
    return icon;
  };

  return (
    <CardSubtitle
      style={{
        display: 'flex',
        alignItems: 'end',
        flex: 'auto',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BiTime style={{ marginBottom: '5px' }} />
        {!preparationTime && 'neuvedeno'}
        {preparationTime && getHours(preparationTime)}
        {preparationTime && getMinutes(preparationTime)}

        {sideDish && ' | '}
        {sideDish && sideDishSwitch(sideDish)}
        {sideDish && ' ' + sideDish}
      </div>
    </CardSubtitle>
  );
};

export default RecipeCardFooter;
