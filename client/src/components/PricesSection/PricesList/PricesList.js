import { useSelector } from 'react-redux';

const PriceItem = price => {
  return (
    <li>
      <span>{price.ticker}</span> - <span>{price.price}</span>
    </li>
  );
};

const PricesList = () => {
  const items = useSelector(state => state.prices.newPrices);

  return (
    <ul>
      {items.map(item => (
        <PriceItem key={item.ticker} {...item} />
      ))}
    </ul>
  );
};

export default PricesList;
