import type Question from "./Question";

class Quiz {
    title: string;
    icon: string;
    iconBackgroundColor: string;
    questions: Question[];

    constructor(title: string, icon: string, iconBackgroundColor: string, questions: Question[]) {
        this.title = title;
        this.icon = icon;
        this.iconBackgroundColor = iconBackgroundColor;
        this.questions = [...questions];
    }
}

export default Quiz;