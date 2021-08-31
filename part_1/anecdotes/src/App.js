import React, { useState, useEffect } from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const MainAnecdote = ({ title, anecdote, anecdoteVotes }) => (
  <>
    <h1>{title}</h1>
    <div style={{ fontWeight: "bold" }}>{anecdote}</div>
    <div style={{ fontWeight: "bold" }}>{anecdoteVotes}</div>
  </>
);
const MostVoted = ({ title, anecdote, votes }) => (
  <>
    <h1>{title}</h1>
    <div style={{ fontWeight: "bold" }}>{anecdote}</div>
    <div style={{ fontWeight: "bold" }}>{votes}</div>
  </>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  //Empty array for starting state of our votes
  const emptyArray = Array(anecdotes.length).fill(0);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    currentVotes: emptyArray,
    mostVotes: 0,
  });

  //Gets random anecdote and checks to make sure we get a different one
  const handleRandomAnecdotes = () => {
    let random = generateRandomNumber();

    while (random === selected) {
      random = generateRandomNumber();
    }
    setSelected(random);
  };

  const handleVotingUpdate = () => {
    const copy = [...votes.currentVotes];
    copy[selected] += 1;
    setVotes({ ...votes, currentVotes: copy });
  };

  //When our votes update, we want to dynamically check for the most voted item
  useEffect(() => {
    const max = votes.currentVotes.indexOf(Math.max(...votes.currentVotes));

    if (votes.currentVotes[max] <= votes.currentVotes[votes.mostVotes]) {
      return;
    }

    setVotes({ ...votes, mostVotes: max });
  }, [votes]);

  return (
    <div>
      <MainAnecdote
        title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        anecdoteVotes={`has ${votes.currentVotes[selected]} votes`}
      />
      <table>
        <tbody>
          <tr>
            <td>
              <Button onClick={handleVotingUpdate} text="vote" />
            </td>
            <td>
              <Button onClick={handleRandomAnecdotes} text="next anecdote" />
            </td>
          </tr>
        </tbody>
      </table>
      <MostVoted
        title="Anecdote with most votes"
        anecdote={anecdotes[votes.mostVotes]}
        votes={`has ${votes.currentVotes[votes.mostVotes]} votes`}
      />
    </div>
  );
};

export default App;
