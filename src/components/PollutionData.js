import styles from "./PollutionData.module.scss";
import Card from "./UI/Card";

function PollutionData(props) {
    const transformedData = [];

    for (const property in props.pollutionData) {
        let title;

        switch(property) {
            case 'co' : 
                title = `Carbon monoxide (${property})`;
                break;
            case 'no' : 
                title = `Nitrogen monoxide (${property})`;
                break;
            case 'no2' :
                title = `Nitrogen dioxide (${property})`;
                break; 
            case 'o3' :
                title  = `Ozone (${property})`;
                break;
            case 'so2' :
                title = `Sulphur dioxide (${property})`; 
                break;
            case 'pm2_5':
                title = `Fine particles matter (${property})`;
                break;
            case 'pm10' :
                title = `Coarse particulate matter (${property})`;
                break;
            case 'nh3' :
                title = `Ammonia (${property})`
                break;
            default :
                title = 'undefined'
        }

        const newObj = {
            title: title,
            value: props.pollutionData[property],
            key: title
        }

        transformedData.push(newObj);
    }

  const displayData = transformedData.map(el => {
    return <Card
        key={el.title}
        title={el.title}
        value={el.value}
    />
  })

  return (
    <div className={styles.pollution}>
       {displayData}
    </div>
  )
}
export default PollutionData