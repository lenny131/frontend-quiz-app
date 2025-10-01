import styles from "./OptionsList.module.scss";
import OptionItem from "./OptionItem";
import Option from "../../models/Option";

interface MyProps {
    options: Option[];
    selectedOption: string;
    showResults: boolean;
    correctOption: string;
    onOptionSelected: (key: string) => void;
}

function OptionsList(props: MyProps) {
    const handleClick = (key: string) => {
        props.onOptionSelected(key);
    }

    if (props.showResults) {
        return (
            <div className={styles["options-list"]}>
                {props.options.map(option => <OptionItem onClick={handleClick} key={option.key} option={option} isActive={option.key == props.selectedOption}
                                                isCorrect={props.correctOption == option.key ? true
                                                    : option.key == props.selectedOption ? false : undefined}></OptionItem>)}
            </div>
        );
    }
    else {
        return (
            <div className={styles["options-list"]}>
                {props.options.map(option => <OptionItem onClick={handleClick} key={option.key} option={option} isActive={option.key == props.selectedOption} isCorrect={undefined}></OptionItem>)}
            </div>
        );
    }
}

export default OptionsList;