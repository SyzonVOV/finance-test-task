import PricesList from './PricesList/PricesList';
import PricesFilters from './PricesFilters/PricesFilters';

const PricesSection = () => {
  return (
    <>
      <PricesFilters />
      <PricesList />
    </>
  );
};

export default PricesSection;
