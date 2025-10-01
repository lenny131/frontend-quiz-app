import { useState, useEffect, useRef } from "react";
import styles from "./App.module.scss";
import data from "./data/data.json";
import Quiz from "./models/Quiz";
import Question from "./models/Question";
import StartScreen from "./components/screens/StartScreen";
import ThemeToggleSwitch from "./components/common/ThemeToggleSwitch";
import QuestionScreen from "./components/screens/QuestionScreen";
import QuizBanner from "./components/common/QuizBanner";
import ResultScreen from "./components/screens/ResultScreen";

function App() {
    const [quizzes, setQuizzes] = useState(new Array<Quiz>())
    const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
    const score = useRef(0);
    
    /*
        Current Screen Values:
        1 - Start Screen
        2 - Question Screen
        3 - Result Screen
    */
    const [currentScreen, setCurrentScreen] = useState(1);
    
    useEffect(() => {
        setQuizzes(data.quizzes.map(function(quiz) { 
            return new Quiz(quiz.title, quiz.icon, quiz.iconBackgroundColor, quiz.questions.map(function(question) {
                return new Question(question.question, question.options, question.answer);
            }));
        }));
    }, []);

    const startQuiz = (selectedQuiz: Quiz) => {
        setCurrentQuiz(selectedQuiz);
        setCurrentScreen(2);
    }

    const showResults = (newScore: number) => {
        score.current = newScore;
        setCurrentScreen(3);
    }

    const returnHome = () => {
        score.current = 0;
        setCurrentQuiz(null);
        setCurrentScreen(1);
    }

    let screenComponent: React.ReactElement;
    switch (currentScreen) {
        case 1:
            screenComponent = <StartScreen quizzes={quizzes} onQuizSelected={startQuiz}></StartScreen>;
            break;
        case 2:
            screenComponent = <QuestionScreen currentQuiz={currentQuiz!} onQuizComplete={showResults}></QuestionScreen>;
            break;
        case 3:
            screenComponent = <ResultScreen currentQuiz={currentQuiz!} score={score.current} onReturnHome={returnHome}></ResultScreen>;
            break;
        default:
            throw new Error(`Invalid value for currentScreen: ${currentScreen}`);
    }

    return (
        <>
            <div className={styles["app-container"]}>
                <header className={styles["app-header"]}>
                    <QuizBanner currentQuiz={currentQuiz}></QuizBanner>
                    <ThemeToggleSwitch onToggle={(isOn: boolean) => {alert(`Dark mode on: ${isOn}`)}}></ThemeToggleSwitch>
                </header>
                <main className={styles["app-main"]}>
                    {screenComponent}
                </main>
                <footer className={styles["app-footer"]}>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://www.frontendmentor.io/profile/lenny131">Leonard Cohen</a>.
                </footer>
            </div>
        </>
    )
}

export default App
