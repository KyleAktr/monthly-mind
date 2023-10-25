import React, { useState } from "react";
import quizQuestions from "../data/questions.json";
import { Link } from "react-scroll";

const Questions = ({ goodAnswerCount, setGoodAnswerCount }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerValid, setAnswerValid] = useState(false);

  const currentQuestion = quizQuestions.quizQuestions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnswerValid(false);
    }
    if (selectedAnswer == currentQuestion.correctAnswer) {
      setGoodAnswerCount(goodAnswerCount + 1);
    }
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
    setAnswerValid(true);
  };

  return (
    <div className="questions">
      <div className="questions-container">
        <div className="current-question">
          <h2>Questions {currentQuestionIndex + 1}/8</h2>

          <h3>{currentQuestion.question}</h3>

          <form>
            <label
            className={`${
              selectedAnswer === currentQuestion.options[0]
                ? "label-checked"
                : "label"
            }`} 
            >
              <input
                type="radio"
                value={currentQuestion.options[0]}
                checked={selectedAnswer === currentQuestion.options[0]}
                onChange={handleAnswerChange}
              />
              {currentQuestion.options[0]}
            </label>
            <label
            className={`${
              selectedAnswer === currentQuestion.options[1]
                ? "label-checked"
                : "label"
            }`} 
            >
              <input
                type="radio"
                value={currentQuestion.options[1]}
                checked={selectedAnswer === currentQuestion.options[1]}
                onChange={handleAnswerChange}
              />
              {currentQuestion.options[1]}
            </label>
            <label
            className={`${
              selectedAnswer === currentQuestion.options[2]
                ? "label-checked"
                : "label"
            }`} 
            >
              <input
                type="radio"
                value={currentQuestion.options[2]}
                checked={selectedAnswer === currentQuestion.options[2]}
                onChange={handleAnswerChange}
              />
              {currentQuestion.options[2]}
            </label>
            <label
            className={`${
              selectedAnswer === currentQuestion.options[3]
                ? "label-checked"
                : "label"
            }`} 
            >
              <input
                type="radio"
                value={currentQuestion.options[3]}
                checked={selectedAnswer === currentQuestion.options[3]}
                onChange={handleAnswerChange}
              />
              {currentQuestion.options[3]}
            </label>
          </form>

          {currentQuestionIndex === quizQuestions.quizQuestions.length - 1 ? (
            <button className="next-btn" disabled={!answerValid}>
              <Link
                to="results-container"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Terminer le quiz
              </Link>
            </button>
          ) : (
            <button
              className="next-btn"
              onClick={handleNextQuestion}
              disabled={!answerValid}
            >
              Prochaine question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
