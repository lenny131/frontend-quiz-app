import styles from './Screen.module.scss';

interface MyProps {
    part1: React.ReactNode;
    part2: React.ReactNode;
}

function Screen(props: MyProps) {
    return (
        <div className={styles["screen"]}>
            <div className={styles["part1"]}>
                {props.part1}
            </div>
            <div className={styles["part2"]}>
                {props.part2}
            </div>
        </div>
    );
}

export default Screen;