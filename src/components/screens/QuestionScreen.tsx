import type Quiz from "../../models/Quiz";

interface MyProps {
    currentQuiz: Quiz;
}

function QuestionScreen(props: MyProps) {
    return (
        <div>You want questions? We got questions!</div>
    );
}

export default QuestionScreen;