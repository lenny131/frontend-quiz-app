import type Quiz from "../../models/Quiz";
import styles from './QuizBanner.module.scss';

interface MyProps {
    currentQuiz: Quiz|null;
}

function QuizBanner(props: MyProps) {
    if (props.currentQuiz == null) {
        return (
            <div className={styles["empty-banner"]}></div>
        )
    }
    else {
        const style = {backgroundColor: props.currentQuiz.iconBackgroundColor}
        return (
            <div className={styles["quiz-banner"]}>
                <img src={props.currentQuiz.icon} alt={props.currentQuiz.title} style={style} />
                <p>{props.currentQuiz.title}</p>
            </div>
        )
    }
}

export default QuizBanner;