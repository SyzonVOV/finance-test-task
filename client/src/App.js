import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { pricesReceived } from './reducers/priceReducer';
import Container from '@mui/material/Container';
import PricesSection from './components/PricesSection/PricesSection';

let counter = 0;

function App() {
  const dispatch = useDispatch();
  const socket = io('http://localhost:4000');

  useEffect(() => {
    socket.emit('start');

    socket.on('connect', () => {
      console.log(socket.id);
      socket.on('ticker', response => {
        dispatch(pricesReceived(response));
        counter++;
        if (counter > 10) {
          socket.disconnect();
        }
      });
    });
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 14,
      }}>
      <PricesSection />
    </Container>
  );
}

export default App;
