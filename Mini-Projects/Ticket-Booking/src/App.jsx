import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [takenSeats, setTakenSeats] = useState(['A5', 'B6', 'D5', 'E3', 'f5', 'E5'])
  const [flag, setFlag] = useState(true);
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];
  const price = 14.99;
  function handleClear() {
    setSelectedSeats([]);
  }
  function handleBooking() {
    setTakenSeats((prev) => [...prev, ...selectedSeats]);
    setCount(selectedSeats.length)
    setFlag(flag => !flag)
  }
  function rebook() {
    setSelectedSeats([])
    setFlag((flag) => !flag);
  }
  return (
    <div className='main-container'> {flag ? <> <div className='top-container'>
      <h2>Choose your seats</h2>
      <p> select upto 4 seats - $14.99 each </p>
    </div>
      <div className='screen'><h3>SCREEN</h3></div>
      <div className='seats-container'>
        {
          rows.map((row, idx) => {
            return (<div key={idx} className='row'> {cols.map((col) => {
              const id = row + col;
              return <div key={id} >
                <button onClick={() => {
                  if (selectedSeats.includes(id)) {
                    setSelectedSeats(selectedSeats.filter(s => s !== id));
                  } else if (selectedSeats.length < 4) {
                    setSelectedSeats([...selectedSeats, id]);
                  }

                  else if (selectedSeats.length === 4) {
                    alert("Youve reached maximum limit you cannot selected more")
                  }
                }} className={`btn ${takenSeats.includes(id) ? "taken" : selectedSeats.includes(id) ? 'selected' : ''}`}
                  disabled={takenSeats.includes(id)}
                > </button>
              </div>
            }
            )
            }
            </div>
            )
          }
          )
        }
      </div>

      <div className='info-container'>
        <button className='available-btn'></button>
        <span>Available</span>
        <button className='selected-info'></button>
        <span>Selected</span>
        <button className='takenSeats-info'></button>
        <span>Taken</span>
      </div>
      <div className='selectedSeats' ><span >
        {selectedSeats.map((ele, idx) => idx !== selectedSeats.length - 1 ? ele + ',' : ele)}
      </span></div>
      <div className='final-btns'><button onClick={handleClear}>clear</button>
        <button onClick={handleBooking}>Book</button></div>  </> : <div className='booked-container'>

      <h1>Total Booking with seatID</h1>

      <h3>Seat Ids {selectedSeats.map((ele, idx) => idx !== selectedSeats.length - 1 ? ele + ',' : ele)}</h3>

      <p>Total bill : {count * price}</p>

      <button onClick={rebook} >Book again</button>
    </div>
    }
    </div>
  )
}

export default App
