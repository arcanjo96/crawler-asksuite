import { Button, LinearProgress } from '@material-ui/core';
import { useState } from 'react';

import SelectDate from './components/SelectDate/';
import Room from './components/Room';
import { fetchRooms } from './services/crawlerService';

import './app.css';

function App() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSetCheckIn(value) {
    const date = value.split('-');
    const newDate = `${date[2]}${date[1]}${date[0]}`;
    setCheckIn(newDate);
  }

  function handleSetCheckOut(value) {
    const date = value.split('-');
    const newDate = `${date[2]}${date[1]}${date[0]}`;
    setCheckOut(newDate);
  }

  function handleSetIsLoading(value) {
    setIsLoading(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert('Por favor, preencha os campos!');
      return;
    }

    setRooms([]);
    handleSetIsLoading(true);
    const fetchedRooms = await fetchRooms(checkIn, checkOut);
    setRooms(fetchedRooms.rooms);
    handleSetIsLoading(false);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="checkIn">
          <SelectDate
            label="Check In"
            setCheckIn={handleSetCheckIn}
          />
        </div>
        <div className="checkOut">
          <SelectDate
            label="Check Out"
            setCheckIn={handleSetCheckOut}
          />
        </div>
        <Button
          className="btn-submit"
          type='submit'
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Buscar
        </Button>
      </form>

      {isLoading && <LinearProgress />}

      <div className="rooms">
        {rooms.length > 0 && rooms.map(room => {
          return (
            <Room
              thumbs={room.thumbs}
              title={room.title}
              description={room.description}
              price={room.price}
            />
          );
        })}
      </div>
    </div >
  );
}

export default App;
