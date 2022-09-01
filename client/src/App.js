import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { pricesReceived } from './reducers/priceReducer';
import './App.css';
import PricesList from './components/PricesList/PricesList';

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
        if (counter > 2) {
          socket.disconnect();
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <PricesList />
    </div>
  );
}

export default App;
