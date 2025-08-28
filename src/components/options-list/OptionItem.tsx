import styles from "./OptionItem.module.scss";
import Option from "../../models/Option";

interface MyProps {
    option: Option;
    onClick: (key: string) => void;
}

function OptionItem(props: MyProps) {
    const handleClick = () => {
        props.onClick(props.option.key);
    }

    const style = {backgroundColor: props.option.iconBackgroundColor}
    let icon: React.ReactElement;
    if (props.option.useImageIcon) {
        icon = <img className={styles["icon"]} src={props.option.iconContent} alt="" style={style} />;
    }
    else {
        icon = <div className={styles["icon"]} style={style}>{props.option.iconContent}</div>
    }
    return (
        <div onClick={handleClick} className={styles["option"]}>
            {icon}
            <p className={styles["option-text"]}>{props.option.value}</p>
        </div>
    )
}

export default OptionItem;