import { useState } from 'react';
import './App.css'
import questions from './Component/Quiz'
import QuizComplete from './Component/QuizComplete';

function App() {
  const [currentInd, setCurrentInd] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  
  const currentQuestion = questions[currentInd];
  
  const handleIndIncrease = () => {
    // Check if the user has selected an answer
    if (selectedAnswer) {
      setCurrentInd((prevInd) => prevInd + 1);
      setScore((prevScore) => prevScore + (selectedAnswer.isCorrect ? 1 : 0))
      setSelectedAnswer(null);
    } else {
      alert("Please select an answer before proceeding");
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
      {currentInd === questions.length ? <QuizComplete score={score} /> : <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500 p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h1 className="text-4xl font-bold text-center text-blue-600">
            Quiz App
          </h1>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Question {currentInd + 1}: {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-4">
            {currentQuestion.answers.map((answer, ind) => (
              <button
                key={ind}
                className={`w-full py-3 px-4 rounded-lg transition duration-300 ease-in-out text-white ${selectedAnswer === answer ? "bg-green-500" : "bg-blue-500"}
              hover:${selectedAnswer === answer ? "bg-green-600" : "bg-blue-600"}`}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer.option}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className=" py-3 px-4 rounded-lg bg-purple-500 text-white font-semibold transition duration-300 ease-in-out hover:bg-purple-600"
              onClick={handleIndIncrease}
            >
              { currentInd === questions.length - 1 ? "Finish" : "Next Question"}
            </button>
          </div>
        </div>
      </div>}
    </>
  )
}

export default App
