import type Quiz from "../../models/Quiz";
import Screen from './Screen';
import styles from './ResultScreen.module.scss';
import QuizBanner from "../common/QuizBanner";

interface MyProps {
    currentQuiz: Quiz;
    score: number
    onReturnHome: () => void;
}

function ResultScreen(props: MyProps) {
    const handleButtonClick = () => {
        props.onReturnHome();
    }

    const part1 =
        <div className={styles["header-container"]}>
            <h1 className={styles["title"]}>Quiz completed</h1>
            <p className={styles["subtitle"]}>You scored...</p>
        </div>;

    const part2 =
        <div className={styles["main-container"]}>
            <div className={styles["result-container"]}>
                <QuizBanner currentQuiz={props.currentQuiz}></QuizBanner>
                <div className={styles["score-container"]}>
                    <p className={styles["score"]}>{props.score}</p>
                    <p className={styles["total-score"]}>out of {props.currentQuiz.questions.length}</p>
                </div>
            </div>
            <button onClick={handleButtonClick}>Play Again</button>
        </div>;
        

    return (
        <Screen part1={part1} part2={part2}>
        </Screen>
    );
}

export default ResultScreen;