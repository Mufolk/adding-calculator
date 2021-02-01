import {useState} from 'react';
import './App.css';

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  const calculateTotal = () => {
    setTotal(number1 + number2);
  }

  return (
    <div className="App">
       <h1>Adding two numbers</h1>

       <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />

        <button onClick={calculateTotal}>Add them!</button>

        <h2>{total}</h2>

       </div>
    </div>
  );
}

export default App;
