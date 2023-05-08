import styles from "./Card.module.scss"

function Card(props) {
  return (
    <div className={styles.card}>
        <h2 className={styles["card__title"]}>{props.title}</h2>
        <div className={styles["card__assessment"]}>{props.assessment}</div>
        <div className={styles["card__value"]}>{props.value}</div>
    </div>
  )
}
export default Card