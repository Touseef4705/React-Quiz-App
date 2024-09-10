import questions from "./Quiz";

function QuizComplete({score, }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-purple-500 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-bold text-center text-purple-600">
                    Quiz Complete!
                </h1>

                <div className="text-center">
                    <p className="text-xl text-gray-800">
                        You Scored <span className="font-bold text-purple-600">{score}</span> out of <span className="font-bold text-purple-600"> {questions.length} </span>
                    </p>
                    <p className="mt-2 text-gray-600">Thank you for participating!</p>
                </div>

                <div className="space-y-4">
                    <button
                        className="w-full py-3 px-4 rounded-lg bg-green-500 text-white font-semibold transition duration-300 ease-in-out hover:bg-green-600"
                        onClick={() => window.location.reload()}
                    >
                        Restart Quiz
                    </button>
                    
                </div>

                <div className="mt-4 text-center">
                    <p className="text-gray-500">
                        Want to try again? Click the button above to restart!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuizComplete;