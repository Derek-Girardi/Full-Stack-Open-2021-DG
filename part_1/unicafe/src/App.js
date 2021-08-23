import React, { useState } from "react";

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  );
};

const StatisticLine = ({ text, number, symbol }) => (
  <tr>
    <td>{text}</td>
    <td>
      {number} {symbol}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const average = good - bad / sum;
  const positive = (good * 100) / sum;

  if (sum === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" number={good} />
          <StatisticLine text="neutral" number={neutral} />
          <StatisticLine text="bad" number={bad} />
          <StatisticLine text="all" number={sum} />
          <StatisticLine text="average" number={average} />
          <StatisticLine text="positive" number={positive} symbol="%" />
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  const handleGoodClick = () =>
    setFeedback({ ...feedback, good: feedback.good + 1 });

  const handleNeutralClick = () =>
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });

  const handleBadClick = () =>
    setFeedback({ ...feedback, bad: feedback.bad + 1 });

  return (
    <div>
      <Header />
      <table>
        <tbody>
          <tr>
            <td>
              <Button onClick={handleGoodClick} text="good" />
            </td>
            <td>
              <Button onClick={handleNeutralClick} text="neutral" />
            </td>
            <td>
              <Button onClick={handleBadClick} text="bad" />
            </td>
          </tr>
        </tbody>
      </table>
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </div>
  );
};

export default App;
