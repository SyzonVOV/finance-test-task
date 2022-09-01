import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilters,
  toggleActiveFilter,
} from '../../../reducers/filtersReducer';

const PricesFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);
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
    <div>
      {filters.map(filter => (
        <button key={filter.name} onClick={handleButtonClick(filter.name)}>
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default PricesFilters;
