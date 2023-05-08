import styles from "./Btn.module.scss"

function Btn(props) {
  return (
    <button className={styles.btn} onClick={props.fetchPollutionHandler}>
        Check pollution
    </button>
  )
}
export default Btn