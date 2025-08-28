class Question {
    question: string;
    options: string[];
    answer: string;

    constructor(question: string, options: string[], answer: string) {
        if (!options.includes(answer)) {
            throw new Error(`Question has no options which match answer.
                             Question: ${question}
                             Answer: ${answer}`);
            
        }

        this.question = question;
        this.options = [...options];
        this.answer = answer;
    }
}

export default Question;