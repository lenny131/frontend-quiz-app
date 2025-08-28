import styles from "./ThemeToggleSwitch.module.scss";

interface MyProps {
    onToggle: (isOn: boolean) => void;
}

function ThemeToggleSwitch(props: MyProps) {
    return (
        <div className={styles["switch"]}>
            <img className={styles["icon"]} src="./assets/images/icon-sun-dark.svg" />
            <div className={styles["toggle"]}>
                <div className={styles["circle"]}></div>
            </div>
            <img className={styles["icon"]}src="./assets/images/icon-moon-dark.svg" />
        </div>
    )
}

export default ThemeToggleSwitch;