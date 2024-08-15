// src/components/RealTimePoll.js
import React, { useState } from 'react';

const RealTimePoll = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="real-time-poll p-8 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">How important is emotional intelligence to you?</h3>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => handleVote(0)} className="p-4 bg-indigo-500 text-white rounded-lg">
          Very Important
        </button>
        <button onClick={() => handleVote(1)} className="p-4 bg-indigo-500 text-white rounded-lg">
          Important
        </button>
        <button onClick={() => handleVote(2)} className="p-4 bg-indigo-500 text-white rounded-lg">
          Neutral
        </button>
        <button onClick={() => handleVote(3)} className="p-4 bg-indigo-500 text-white rounded-lg">
          Not Important
        </button>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Results:</h4>
        <ul>
          <li>Very Important: {votes[0]}</li>
          <li>Important: {votes[1]}</li>
          <li>Neutral: {votes[2]}</li>
          <li>Not Important: {votes[3]}</li>
        </ul>
      </div>
    </div>
  );
};

export default RealTimePoll;
