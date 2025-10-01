import styles from "./OptionItem.module.scss";
import Option from "../../models/Option";

interface MyProps {
    option: Option;
    isActive: boolean;
    isCorrect: boolean | undefined;
    onClick: (key: string) => void;
}

function OptionItem(props: MyProps) {
    const handleClick = () => {
        props.onClick(props.option.key);
    }

    let icon: React.ReactElement;
    if (props.option.useImageIcon) {
        const style = {backgroundColor: props.option.iconBackgroundColor}
        icon = <img className={styles["image-icon"]} src={props.option.iconContent} alt="" style={style} />;
    }
    else {
        icon = <div className={styles["text-icon"]}><span>{props.option.iconContent}</span></div>
    }

    type booleanAttributes = { [key: string]: boolean }
    const additionalAttributes: booleanAttributes = {};

    if (props.isActive) {
        additionalAttributes['data-isactive'] = true;
    }

    if (props.isCorrect == true) {
        additionalAttributes['data-iscorrect'] = true;
    }

    if (props.isCorrect == false) {
        additionalAttributes['data-iswrong'] = true;
    }

    return (
        <div onClick={handleClick} className={styles["option"]} {...additionalAttributes}>
            {icon}
            <p className={styles["option-text"]}>{props.option.value}</p>
        </div>
    )

    /*if (props.isCorrect == undefined) {
        if (props.isActive) {
            return (
                <div onClick={handleClick} className={styles["option"]} data-isactive={true}>
                    {icon}
                    <p className={styles["option-text"]}>{props.option.value}</p>
                </div>
            )
        }
        else {
            return (
                <div onClick={handleClick} className={styles["option"]}>
                    {icon}
                    <p className={styles["option-text"]}>{props.option.value}</p>
                </div>
            )
        }
    }
    else {
        if (props.isCorrect!) {
            return (
                <div onClick={handleClick} className={styles["option"]} data-iscorrect={true}>
                    {icon}
                    <p className={styles["option-text"]}>{props.option.value}</p>
                </div>
            )
        }
        else {
            return (
                <div onClick={handleClick} className={styles["option"]} data-iswrong={true}>
                    {icon}
                    <p className={styles["option-text"]}>{props.option.value}</p>
                </div>
            )
        }
    }*/
}

export default OptionItem;