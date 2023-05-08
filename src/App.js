import ReactDOM from 'react-dom'
import './App.scss';
import Modal from './components/Modal';
import Heading from './components/UI/Heading';
import Btn from './components/UI/Btn';
import AirQuality from './components/AirQuality';
import PollutionData from './components/PollutionData';
import Table from './components/Table';
import { useState } from 'react';
const APIkey = 'bf5b34f1577bd4f6dcf5726c11e10689'


function App() {
  const [pollutionData, updatePollutionData] = useState({});
  const [loading, updateLoading] = useState(false);
  const [airQuality, updateAirQuality] = useState();
  const [showModal, updateShowModal] = useState(false);
  const [latLon, updateLatLon] = useState();


  async function fetchData(lat,lon) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`);

    const data = await response.json();

    updatePollutionData(data.list[0].components);
    updateAirQuality(data.list[0].main);
    updateLoading(false);
  }

  function fetchPollutionHandler() {
    updateLoading(true);

    // Get user position
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      updateLatLon([lat,lon]);
      fetchData(lat,lon);
    },
      function(error) {
        console.log(error);
        if(error.code === 1 ){
          updateShowModal(true);
        }
      }
    );
  }

  return (
    <div className="app">
      {showModal && ReactDOM.createPortal(<Modal updateShowModal={updateShowModal}/>, document.getElementById('modal-root'))}

      <section className='mb-2'>
        <Heading/>
        <Btn fetchPollutionHandler={fetchPollutionHandler}/>
      </section>

      <div className="divider"></div>
      
      <section className='mb-2'>
        {loading && <p className='loading'>Loading...</p>}
        {!loading && <AirQuality airQualityData={airQuality} latLonData={latLon}/>}
        {!loading && <PollutionData pollutionData={pollutionData}/>}
      </section>

      <div className="divider"></div>

      <section>
        <Table/>
      </section>
    </div>
  );
}

export default App;
