import React, { useState } from "react";
import quizQuestions from "../data/questions.json";

const Questions = ({ goodAnswerCount, setGoodAnswerCount}) => {
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
      // alert("Correct")
      setGoodAnswerCount(goodAnswerCount + 1);
    }
    if (currentQuestionIndex === quizQuestions.quizQuestions.length - 2) {
      document.querySelector(".next-btn").innerHTML = "Terminer le quiz";
    }
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
    setAnswerValid(true);
  };

  return (
    <div>
      <h2>Questions {currentQuestionIndex + 1} :</h2>

      <p>{currentQuestion.question}</p>

      <form>
        <label>
          <input
            type="radio"
            value={currentQuestion.options[0]}
            checked={selectedAnswer === currentQuestion.options[0]}
            onChange={handleAnswerChange}
          />
          {currentQuestion.options[0]}
        </label>
        <label>
          <input
            type="radio"
            value={currentQuestion.options[1]}
            checked={selectedAnswer === currentQuestion.options[1]}
            onChange={handleAnswerChange}
          />
          {currentQuestion.options[1]}
        </label>
        <label>
          <input
            type="radio"
            value={currentQuestion.options[2]}
            checked={selectedAnswer === currentQuestion.options[2]}
            onChange={handleAnswerChange}
          />
          {currentQuestion.options[2]}
        </label>
        <label>
          <input
            type="radio"
            value={currentQuestion.options[3]}
            checked={selectedAnswer === currentQuestion.options[3]}
            onChange={handleAnswerChange}
          />
          {currentQuestion.options[3]}
        </label>
      </form>

      {/* <p>{currentQuestion.correctAnswer}</p> */}

      <button
        className="next-btn"
        onClick={handleNextQuestion}
        disabled={!answerValid}
      >
        Next
      </button>

    </div>
  );
};

export default Questions;
