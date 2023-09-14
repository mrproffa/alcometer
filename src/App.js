import React, { useState } from 'react';
import './/App.css';

function App() {

  const [weight, setWeight] = useState();

  const [bottles, setBottles] = useState(1);

  const [time, setTime] = useState(1);

  const [gender, setGender] = useState('male');

  const [result, setResult] = useState(0);

  const numbers = new Array(24).fill(null).map((_, i) => i + 1)

  const litres = bottles * 0.33;

  const grams = litres * 8 * 4.5;

  const burning = weight / 10

  const gramsLeft = grams - (burning * time);

  function handleSubmit(e) {

    e.preventDefault();

    let alcohol = 0;

    if (gender === 'male') {
      alcohol = gramsLeft / (weight * 0.7);
    }
    else {
      alcohol = gramsLeft / (weight * 0.6);
    }
    if (alcohol < 0) {
      setResult(0);
    }
    else {
      setResult(alcohol);
    }
  }
  return (
    <div id="container">
      <h3>Alcometer</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bottles</label>
          <select onChange={e => setBottles(e.target.value)}>
            {
              numbers.map(bottle => (
                <option value={bottle}>{bottle}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Time Passed (hours)</label>
          <select onChange={e => setTime(e.target.value)}>
            {
              numbers.map(time => (
                <option value={time}>{time}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Result</label>
          <output>{result.toFixed(2)} ‰</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}
export default App;
