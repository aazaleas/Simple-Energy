import React, { useState } from 'react';
import '../index.css';
import ev from '../assets/scooty3.jpg';
import Odometer from './Odometer';
import scooty from '../assets/scooty.png';
import Distance from './Distance';
import Temperature from './Temperature';
import thermo from '../assets/thermometer.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const [currentBatteryPercentage, setCurrentBatteryPercentage] = useState(100);
  const [isScooterRunning, setIsScooterRunning] = useState(false);

  const handleBatteryPercentageChange = (newBatteryPercentage) => {
    setCurrentBatteryPercentage(newBatteryPercentage);
  };

  const distance = currentBatteryPercentage * 2;

  const handleLockButtonClick = () => {
    setIsScooterRunning(!isScooterRunning);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section */}
      <ToastContainer />
      <div className="md:w-1/2 pl-4 flex flex-col items-center justify-center gap-1">
        <img className="w-full mt-5" src={ev} alt="eVehicle.jpg" />
        {/* Lock/Unlock Scooter button */}
        <button className="p-4 w-full mt-2 md:mt-4 bg-black text-white font-semibold rounded-lg hover:bg-green-700" onClick={handleLockButtonClick}>
          {isScooterRunning ? 'Lock Scooter' : 'Unlock Scooter'}
        </button>
      </div>

      {/* Middle section */}
      <div className="w-full md:w-1/4 p-4">
        <div className="h-full bg-green-700 bg-opacity-60 shadow-md rounded-lg p-4">
          <h2 className="text-2xl text-white font-semibold mb-1px">Battery</h2>
          <Distance onBatteryPercentageChange={handleBatteryPercentageChange} />
          <Odometer batteryPercentage={currentBatteryPercentage} />
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/4 p-2 flex flex-col justify-between">
        {/* Temperature card */}
        <div className="h-2/3 bg-green-700 bg-opacity-60 shadow-md rounded-lg p-2">
          <h2 className="text-2xl text-white font-semibold mb-2">Temperature</h2>
          <div className='flex flex-row items-center justify-between'>
            <Temperature isScooterRunning={isScooterRunning} />
            <img className='h-20 w-20' src={thermo} alt='temperature.png' />
          </div>

        </div>

        <div className="h-2/3 bg-green-700 bg-opacity-60 shadow-md rounded-lg p-2 mt-5">
          <h2 className="text-2xl text-white font-semibold mb-2">Distance</h2>
          <div className="scooty-container">
            <img src={scooty} alt="Scooty" className="scooty" />
          </div>
          <h2 className="text-2xl text-white mb-1">---------------------------------</h2>
          <h2 className="text-2xl text-white mb-1">
            Estimated Distance to be traveled <b>{distance} km...</b>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
