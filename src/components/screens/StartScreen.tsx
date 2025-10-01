import Quiz from '../../models/Quiz';
import OptionsList from '../options-list/OptionsList';
import Screen from './Screen';
import styles from './StartScreen.module.scss';
import Option from "../../models/Option";

interface MyProps {
    quizzes: Quiz[];
    onQuizSelected: (quiz: Quiz) => void;
}

function StartScreen(props: MyProps) {
    const handleQuizSelected = (key: string) => {
        const selectedQuiz = props.quizzes.find((quiz) => quiz.title == key)
        if (selectedQuiz == undefined) {
            throw new Error(`Can't find quiz: ${key}`);
        }
        props.onQuizSelected(selectedQuiz);
    }

    const options = props.quizzes.map(quiz => new Option(quiz.title, true, quiz.icon, quiz.iconBackgroundColor, quiz.title))

    const part1 =
        <div className={styles["header-container"]}>
            <div className={styles["title-container"]}>
                <p className={styles["subtitle"]}>Welcome to the</p>
                <h1 className={styles["title"]}>Frontend Quiz!</h1>
            </div>
            <p className={styles["description"]}>Pick a subject to get started.</p>
        </div>;

    const part2 =
        <OptionsList onOptionSelected={handleQuizSelected} options={options} />;

    return (
        <Screen part1={part1} part2={part2}>
        </Screen>
    );
}

export default StartScreen;