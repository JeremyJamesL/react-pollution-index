import styles from "./AirQuality.module.scss";

function AirQuality(props) {

    const airQualityString = () => {
        let string;
        switch(props.airQualityData.aqi) {
            case 1 : 
                string = 'Good'
            break;
            case 2 : 
                string = 'Fair'
            break;
            case 3 : 
                string = 'Moderate'
            break;
            case 4 : 
                string = 'Poor'
            break;
            case 5 : 
                string = 'Very poor'
            break;
            default : 
                string = 'Unknown'
        }
        return string;
    } 

  return (
    <div className={styles.quality}>
        {props.airQualityData !== undefined &&
        <div className={styles["quality__assessment"]}>
             <p>The air quality at <span className={styles["quality__coords"]}>{props.latLonData[0]}</span> <span className={styles["quality__coords"]}>{props.latLonData[1]}</span> is:</p>   
            <span className={styles["quality__string"]}>
                    {airQualityString()}
            </span>
        </div>
        }
    </div>
  )
}
export default AirQuality