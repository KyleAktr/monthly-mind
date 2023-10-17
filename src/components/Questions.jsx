import React, { useState } from 'react';
import quizQuestions from "../data/questions.json"

const Questions = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [answerValid, setAnswerValid] = useState(false)
    const [goodAnswer, setGoodAnswer] = useState(0)
    const currentQuestion = quizQuestions.quizQuestions[currentQuestionIndex]

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.quizQuestions.length -1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedAnswer(null)
            setAnswerValid(false)
        } if (selectedAnswer == currentQuestion.correctAnswer) {
            // alert("Correct")
                setGoodAnswer(goodAnswer + 1)
        }

        }
    

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value)
        setAnswerValid(true)
    }

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
                    />{currentQuestion.options[0]}
                </label>
                <label>
                    <input 
                    type="radio" 
                    value={currentQuestion.options[1]} 
                    checked={selectedAnswer === currentQuestion.options[1]}
                    onChange={handleAnswerChange}
                    />{currentQuestion.options[1]}
                </label>
                <label>
                    <input 
                    type="radio" 
                    value={currentQuestion.options[2]} 
                    checked={selectedAnswer === currentQuestion.options[2]}
                    onChange={handleAnswerChange}
                    />{currentQuestion.options[2]} 
                </label>
                <label>
                    <input 
                    type="radio" 
                    value={currentQuestion.options[3]} 
                    checked={selectedAnswer === currentQuestion.options[3]}
                    onChange={handleAnswerChange}
                    />{currentQuestion.options[3]}
                </label>
            </form>

            {/* <p>{currentQuestion.correctAnswer}</p> */}

            <button onClick={handleNextQuestion} disabled={!answerValid}>Next</button>

            <p>Nombre de bonne réponses : {goodAnswer}</p>

            

        </div>
    );
};

export default Questions;