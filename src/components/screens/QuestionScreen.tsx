import type Quiz from "../../models/Quiz";
import OptionsList from '../options-list/OptionsList';
import Screen from './Screen';
import styles from './QuestionScreen.module.scss';
import Option from "../../models/Option";
import { useState } from "react";

interface MyProps {
    currentQuiz: Quiz;
    onQuizComplete: (score: number) => void;
}

function QuestionScreen(props: MyProps) {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const options = props.currentQuiz.questions[currentQuestion].options.map((option, index) => new Option(String.fromCharCode(65 + index), false, String.fromCharCode(65 + index), "#f4f6fa", option))
    const correctOption = options.find(option => option.value == props.currentQuiz.questions[currentQuestion].answer)
    if (correctOption == undefined) {
        alert("Something went wrong. Can't find correct answer to this question.");
    }
    const correctAnswer = correctOption!.key;

    const handleAnswerSelected = (key: string) => {
        setSelectedAnswer(key);
    }

    const handleButtonClick = () => {
        if (isSubmitted) {
            if (currentQuestion < props.currentQuiz.questions.length - 1) {
                setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1)
                setSelectedAnswer("");
                setIsSubmitted(false);
            }
            else {
                props.onQuizComplete(score);
            }
        }
        else if (selectedAnswer != "") {
            if (selectedAnswer == correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }
            setIsSubmitted(true);
        }
    }

    const part1 =
        <div className={styles["question-container"]}>
            <div className={styles["question-text-container"]}>
                <p className={styles["question-number"]}>Question {currentQuestion + 1} of 10</p>
                <h1 className={styles["question-text"]}>{props.currentQuiz.questions[currentQuestion].question}</h1>
            </div>
            <div className={styles["progress-bar"]}></div>
        </div>;

    const part2 =
        <div className={styles["answer-container"]}>
            <OptionsList onOptionSelected={handleAnswerSelected} options={options} selectedOption={selectedAnswer} showResults={isSubmitted} correctOption={correctAnswer} />
            <button onClick={handleButtonClick}>{isSubmitted ? "Next Question" : "Submit Answer"}</button>
        </div>;
        

    return (
        <Screen part1={part1} part2={part2}>
        </Screen>
    );
}

export default QuestionScreen;