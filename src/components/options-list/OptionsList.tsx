import styles from "./OptionsList.module.scss";
import OptionItem from "./OptionItem";
import Option from "../../models/Option";

interface MyProps {
    options: Option[];
    onOptionSelected: (key: string) => void;
}

function OptionsList(props: MyProps) {
    const handleClick = (key: string) => {
        props.onOptionSelected(key);
    }

    return (
        <div className={styles["options-list"]}>
            {props.options.map(option => <OptionItem onClick={handleClick} key={option.key} option={option}></OptionItem>)}
        </div>
    )
}

export default OptionsList;