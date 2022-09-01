import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const PricesList = () => {
  const getActiveFilters = state =>
    state.filters.filters.reduce((prev, curr) => {
      if (curr.isActive) {
        return [...prev, curr.name];
      }
      return prev;
    }, []);
  //todo: move selector next to a respective reducer
  const selectFilteredPrices = createSelector(
    getActiveFilters,
    state => state.prices.newPrices,
    (filters, prices) => {
      return prices.filter(price => filters.includes(price.ticker));
    },
  );
  const items = useSelector(selectFilteredPrices);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {items.map(item => (
            <TableRow
              key={item.ticker}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {item.ticker}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.change}</TableCell>
              <TableCell align="right">
                {item.change > 0 ? (
                  <ArrowCircleUpIcon color="success" />
                ) : (
                  <ArrowCircleDownIcon color="error" />
                )}
              </TableCell>
              <TableCell align="right">{`${item.change_percent} %`}</TableCell>
              <TableCell align="right">{item.last_trade_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PricesList;
