// src/components/About/QuizSection.js
import React, { useState } from 'react';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState('');

  const questions = [
    {
      questionText: 'What is emotional intelligence?',
      answerOptions: [
        { answerText: 'The ability to solve complex problems.', isCorrect: false },
        { answerText: 'The ability to understand and manage your emotions.', isCorrect: true },
        { answerText: 'The ability to memorize information.', isCorrect: false },
        { answerText: 'The ability to read minds.', isCorrect: false },
      ],
      feedback: 'Emotional intelligence is about understanding and managing your emotions effectively.'
    },
    {
      questionText: 'Which of the following is a component of emotional intelligence?',
      answerOptions: [
        { answerText: 'Empathy.', isCorrect: true },
        { answerText: 'Speed.', isCorrect: false },
        { answerText: 'Strength.', isCorrect: false },
        { answerText: 'Knowledge.', isCorrect: false },
      ],
      feedback: 'Empathy is a key component of emotional intelligence.'
    },
    {
      questionText: 'How does mindfulness contribute to emotional well-being?',
      answerOptions: [
        { answerText: 'By helping you ignore emotions.', isCorrect: false },
        { answerText: 'By helping you stay present and aware.', isCorrect: true },
        { answerText: 'By helping you suppress emotions.', isCorrect: false },
        { answerText: 'By helping you avoid problems.', isCorrect: false },
      ],
      feedback: 'Mindfulness helps you stay present and aware, contributing to emotional well-being.'
    },
    {
      questionText: 'What is a benefit of continuous growth in emotional intelligence?',
      answerOptions: [
        { answerText: 'Increased stress levels.', isCorrect: false },
        { answerText: 'Improved relationships and self-awareness.', isCorrect: true },
        { answerText: 'Greater ability to control others.', isCorrect: false },
        { answerText: 'Ability to avoid emotions.', isCorrect: false },
      ],
      feedback: 'Continuous growth in emotional intelligence improves relationships and self-awareness.'
    },
  ];

  const handleAnswerOptionClick = (isCorrect, feedbackText) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setFeedback(feedbackText);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setFeedback('');
      }, 2000);
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 2000);
    }
  };

  return (
    <div className="quiz-section p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      {showScore ? (
        <div className="score-section text-2xl font-bold text-center text-indigo-600">
          You scored {score} out of {questions.length}
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
            <div className="question-text text-lg mb-6">
              {questions[currentQuestion].questionText}
            </div>
            <div className="answer-section grid grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect, questions[currentQuestion].feedback)}
                  className="p-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
          {feedback && (
            <div className="feedback-section mt-6 p-4 bg-indigo-100 text-indigo-900 rounded-lg">
              {feedback}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
