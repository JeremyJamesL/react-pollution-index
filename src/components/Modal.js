import styles from "./Modal.module.scss";
import { Fragment } from "react";


function Modal(props) {

  return (
    <Fragment>
    <div className={styles.modal}>
        <div className={styles["modal__msg"]}>
            <div className={styles["modal__warning"]}>⚠️</div>
            <p>This app requires location permission, please allow location services by <a href="https://support.google.com/chrome/answer/114662?hl=en-GB&co=GENIE.Platform%3DAndroid">resetting your permissions</a> and clicking 'check pollution' again </p>
            <div className={styles["modal__close"]} onClick={() => props.updateShowModal(false)}>×</div>
        </div>
    </div>
    </Fragment>
  )
}
export default Modal