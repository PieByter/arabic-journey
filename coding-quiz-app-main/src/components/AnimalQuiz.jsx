import { useState } from "react";
import checked from "../assets/checked.png";
import cross from "../assets/cross.png";
import homeButton from "../images/icon/home_button.png";
import replayButton from "../images/icon/replay_button.png";
import "../css/file.css";
import bear from "../images/animals/bear.png";
import deer from "../images/animals/deer.png";
import giraffe from "../images/animals/giraffe.png";
import monkey from "../images/animals/monkey.png";
import owl from "../images/animals/owl.png";
import pelican from "../images/animals/pelican.png";
import tucan from "../images/animals/tucan.png";
import turkey from "../images/animals/turkey.png";

const AnimalQuiz = () => {
    const questions = [
        {
            image: bear,
            answerOptions: [
                { answerText: "بُومَة", isCorrect: false },
                { answerText: "صديق", isCorrect: false },
                { answerText: "أخت", isCorrect: false },
                { answerText: "دُبٌّ", isCorrect: true },
            ],
        },
        {
            image: deer,
            answerOptions: [
                { answerText: "دُبٌّ", isCorrect: false },
                { answerText: "جدتي", isCorrect: false },
                { answerText: "صديق", isCorrect: false },
                { answerText: "عزيزي", isCorrect: true },
            ],
        },
        {
            image: giraffe,
            answerOptions: [
                { answerText: "زرافة", isCorrect: true },
                { answerText: "جدتي", isCorrect: false },
                { answerText: "دُبٌّ", isCorrect: false },
                { answerText: "صديق", isCorrect: false },
            ],
        },
        {
            image: monkey,
            answerOptions: [
                { answerText: "زرافة", isCorrect: false },
                { answerText: "جدتي", isCorrect: false },
                { answerText: "ةقرد", isCorrect: true },
                { answerText: "صديق", isCorrect: false },
            ],
        },
        {
            image: owl,
            answerOptions: [
                { answerText: "أخت", isCorrect: true },
                { answerText: "ةقرد", isCorrect: false },
                { answerText: "بُومَة", isCorrect: false },
                { answerText: "صديق", isCorrect: false },
            ],
        },
        {
            image: pelican,
            answerOptions: [
                { answerText: "أخت", isCorrect: false },
                { answerText: "صديق", isCorrect: false },
                { answerText: "بُومَة", isCorrect: true },
                { answerText: "زرافة", isCorrect: false },
            ],
        },
        {
            image: tucan,
            answerOptions: [
                { answerText: "جدتي", isCorrect: false },
                { answerText: "امرأة", isCorrect: false },
                { answerText: "الطوقان", isCorrect: true },
                { answerText: "صديق", isCorrect: false },
            ],
        },
        {
            image: turkey,
            answerOptions: [
                { answerText: "جدتي", isCorrect: false },
                { answerText: "امرأة", isCorrect: false },
                { answerText: "صديق", isCorrect: false },
                { answerText: "ديك رومى", isCorrect: true },
            ],
        },
    ];

    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentIndex] = isCorrect;

        setUserAnswers(newAnswers);

        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentIndex === questions.length - 1) {
            setQuizFinished(true);
        } else {
            setCurrentIndex((value) => value + 1);
        }
    };

    const handlePlayAgain = () => {
        setQuizFinished(false);
        setCurrentIndex(0);
        setScore(0);
    };

    return (
        <>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-2xl px-4">
                <div className="bg-slate-100 shadow-md rounded-lg mt-4">
                    {quizFinished ? (
                        <div className="text-center px-4 py-8">
                            <img
                                src={score === 0 ? cross : checked}
                                className="w-14 m-auto"
                                alt=""
                            />
                            <h3 className="text-2xl mt-4">
                                {" "}
                                You scored <b>{score}</b> out of <b>{questions.length}</b>
                            </h3>
                            <div className="flex items-center justify-center py-1 mt-8">
                                <button
                                    className="px-3 mx-2 text-blue-400 hover:text-blue-300"
                                    onClick={() =>
                                    (window.location.href =
                                        "http://127.0.0.1:80/ArabicJourney-master/category.html")
                                    }
                                >
                                    <img src={homeButton} className="w-18 h-16 m-auto" alt="" />
                                </button>
                                <button
                                    className="px-3 mx-2 text-blue-400 hover:text-blue-300"
                                    onClick={handlePlayAgain}
                                >
                                    <img src={replayButton} className="w-18 h-16 m-auto" alt="" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="bg-blue-400 text-center px-4 py-2 rounded-t-lg">
                                <h2 className="text-2xl text-white font-semibold tracking-wide">
                                    Animal Name Quiz
                                </h2>
                            </div>
                            <div
                                className="image-container"
                                style={{
                                    padding: "16px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    //https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Medan_city_2019.jpg/600px-Medan_city_2019.jpg
                                    src={questions[currentIndex].image}
                                    alt="Animal Name Quiz"
                                    className="image"
                                    style={{ width: "250px", height: "300px" }}
                                />
                            </div>
                            <div className="py-8 px-4">
                                <div className="pb-2 text-center">
                                    <h3 className="font-semibold text-lg">
                                        <span className="text-lg bg-slate-200 w-fit rounded-lg px-2 py-1 shadow mr-2">
                                            {currentIndex + 1} / {questions.length}{" "}
                                        </span>
                                    </h3>
                                </div>
                                <div className="mt-2 flex flex-col text-left">
                                    {questions[currentIndex].answerOptions.map((answer, index) => {
                                        const isUserAnswerCorrect = userAnswers[currentIndex] !== null && answer.isCorrect;
                                        const isUserAnswerIncorrect =
                                            userAnswers[currentIndex] !== null && userAnswers[currentIndex] !== index;

                                        return (
                                            <button
                                                className={`mt-2 rounded-lg py-2 px-4 ${isUserAnswerCorrect
                                                        ? "bg-green-300" // Style for correct answer
                                                        : isUserAnswerIncorrect
                                                            ? "bg-red-300" // Style for incorrect answer
                                                            : "bg-slate-200" // Default style
                                                    } hover:bg-slate-300`}
                                                onClick={() => handleAnswerClick(answer.isCorrect)}
                                                key={answer.answerText}
                                            >
                                                {answer.answerText}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default AnimalQuiz;
