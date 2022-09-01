import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const PriceItem = price => {
  return (
    <li>
      <span>{price.ticker}</span> - <span>{price.price}</span>
    </li>
  );
};

const PricesList = () => {
  const getActiveFilters = state =>
    state.filters.filters.reduce((prev, curr) => {
      if (curr.isActive) {
        return [...prev, curr.name];
      }
      return prev;
    }, []);

  const selectFilteredPrices = createSelector(
    getActiveFilters,
    state => state.prices.newPrices,
    (filters, prices) => {
      return prices.filter(price => filters.includes(price.ticker));
    },
  );
  const items = useSelector(selectFilteredPrices);

  return (
    <ul>
      {items.map(item => (
        <PriceItem key={item.ticker} {...item} />
      ))}
    </ul>
  );
};

export default PricesList;
