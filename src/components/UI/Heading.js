import styles from "./Heading.module.scss";

function Heading() {
  return (
    <div className={styles.heading}>
        <h1 className={styles["heading__title"]}>
            Check pollution in your area
        </h1>
    </div>
  )
}
export default Heading