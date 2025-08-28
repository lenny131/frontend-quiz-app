import type Quiz from "../../models/Quiz";

interface MyProps {
    currentQuiz: Quiz;
}

function QuestionScreen(props: MyProps) {
    return (
        <div>Selected quiz: {props.currentQuiz.title}</div>
    );
}

export default QuestionScreen;