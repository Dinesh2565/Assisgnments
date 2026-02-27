import { useState } from 'react';
import './index.css'
function App() {
  const [count, setCount] = useState(1);
  const [bill, setBill] = useState(0.00);
  const [tip, setTip] = useState(0.00);
  const [totalPerPerson, setTotalPerPerson] = useState(0.00);
  const [flag, setFlag] = useState(true)
  let totalAmount = 0;
  const tipAmount = Number((bill * (tip / 100)).toFixed(2));;
  const total = (bill + tipAmount);
  totalAmount = Number((total / count).toFixed(2));;

  function roundBill() {
    setTotalPerPerson(Math.round(totalAmount));
    setFlag((prev) => !prev)
  };

  return (
    <div className="body-container">
      <div className="main-container">
        <h2>Tip calculator</h2>
        <div className="top-container">
          <h3>Bill Amount</h3>
          <input type="number" placeholder="$ 0.00 " onChange={(e) => setBill(Number(e.target.value))} />
        </div>
        <div className="tip-container">
          <h4>Tip %</h4>
          <button onClick={() => setTip(10)}> 10%</button>
          <button onClick={() => setTip(15)}> 15%</button>
          <button onClick={() => setTip(18)}> 18%</button>
          <button onClick={() => setTip(20)}> 20%</button>
          <button onClick={() => setTip(25)}> 25%</button>
          <input
            type="number"
            placeholder="custom"
            onChange={(e) => setTip(Number(e.target.value))}
          />
        </div>
        <div className="person-container">
          <button onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>

        <div>
          <button className="roundup-button" onClick={roundBill}>Round up per person</button>
        </div>

        <div className="bill-container">
          <p>TipAmount <span> {tipAmount}</span></p>
          <p>Total Bill  <span> {bill}</span></p>
          <p>Total/person <span>  {flag ? totalAmount : totalPerPerson}</span></p>
        </div>
      </div>
    </div>
  );
}


export default App;
