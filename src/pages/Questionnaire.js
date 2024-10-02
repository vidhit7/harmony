import React, { useState } from 'react';

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'In the past two weeks, how often have you felt sad or unhappy?',
      answerOptions: [
        { answerText: 'Not at all', value: 0 },
        { answerText: 'Occasionally', value: 1 },
        { answerText: 'Most of the time', value: 2 },
        { answerText: 'All the time', value: 3 },
      ],
    },

    {
        questionText: 'How often have you felt discouraged about the future?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      {
        questionText: 'How often have you felt like a failure or overly critical of yourself?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      

      

      {
        questionText: 'In the past two weeks, how often have you found it hard to enjoy things that you usually do?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      {
        questionText: 'How often have you experienced physical symptoms of anxiety (e.g., heart pounding, dizziness, difficulty breathing)?',
        answerOptions: [  
        { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      {
        questionText: 'How often have you felt nervous or anxious without any clear reason?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      {
        questionText: 'How often have you had trouble falling asleep or staying asleep?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      {
        questionText: 'How often have you felt that your hands or body were trembling or shaky?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

      {
        questionText: 'How often have you felt tired or had low energy in the past two weeks?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      },

     

      {
        questionText: 'How often have you found it difficult to relax or calm yourself when stressed?',
        answerOptions: [
          { answerText: 'Not at all', value: 0 },
          { answerText: 'Occasionally', value: 1 },
          { answerText: 'Most of the time', value: 2 },
          { answerText: 'All the time', value: 3 },
        ],
      }
    
    // (Add remaining questions here...)
  ];

  const handleAnswerOptionClick = (value) => {
    setScore(score + value);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      alert(`Your current score is: ${score + value}`);
    } else {
      setShowScore(true);
    }
  };

  const categorizeHealth = (score) => {
    if (score <= 10) return 'Healthy Mental State';
    else if (score <= 17) return 'Mild Distress';
    else if (score <= 24) return 'Moderate Distress';
    else return 'Severe Distress';
  };
  

  return (
    <div className="questionnaire-section bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-lg shadow-2xl max-w-4xl mx-auto mt-20">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Mental Health Assessment</h1>
      {showScore ? (
        <div className="score-section text-2xl font-bold text-center text-indigo-700">
          Your final score is {score} <br />
          Your mental health level is: {categorizeHealth(score)}
        </div>
      ) : (
        <>
          <div className="progress-bar bg-indigo-200 rounded-full h-2 mb-6">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="question-section">
            <div className="question-count text-xl font-semibold mb-4">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text text-2xl font-light mb-6 text-indigo-900">
              {questions[currentQuestion].questionText}
            </div>
            <div className="answer-section grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.value)}
                  className="p-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 font-medium text-lg"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Questionnaire;
