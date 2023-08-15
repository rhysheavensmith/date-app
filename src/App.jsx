import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();

  date.setDate(date.getDate() + count);

  let formattedDate = date.toDateString();

  return (
    <div className="date-container">
      <div className="step">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <h1>{step}</h1>
      </div>
      <div className="count">
        <button onClick={() => setCount((prevCount) => prevCount - step)}>
          -
        </button>
        <input
          type="text"
          onChange={(e) =>
            !isNaN(Number(e.target.value)) && setCount(Number(e.target.value))
          }
          value={count}
        />
        <button onClick={() => setCount((prevCount) => prevCount + step)}>
          +
        </button>
      </div>

      {count === 0 ? (
        <h1>today is {formattedDate}</h1>
      ) : (
        <h1>
          {count} days from today is {formattedDate}
        </h1>
      )}
    </div>
  );
}
