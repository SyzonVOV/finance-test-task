import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilters,
  toggleActiveFilter,
} from '../../../reducers/filtersReducer';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PricesFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);
  //todo: complete errors handling
  const filtersError = useSelector(state => state.filters.error);

  useEffect(() => {
    dispatch(getFilters());
  }, [dispatch]);

  if (filtersError) {
    return <div>{filtersError}</div>;
  }

  const handleButtonClick = filter => () => {
    dispatch(toggleActiveFilter(filter));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Tickers</FormLabel>
      <FormGroup aria-label="position" row>
        {filters.map(filter => (
          <FormControlLabel
            key={filter.name}
            value="end"
            control={<Checkbox defaultChecked />}
            label={filter.name}
            labelPlacement="end"
            onClick={handleButtonClick(filter.name)}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default PricesFilters;
