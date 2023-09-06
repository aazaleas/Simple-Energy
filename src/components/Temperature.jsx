import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Temperature({ isScooterRunning }) {
  const [temperature, setTemperature] = useState(25); 

  useEffect(() => {
    let temperatureInterval;

    if (isScooterRunning) {
      temperatureInterval = setInterval(() => {
        const newTemperature = temperature + 0.25
        setTemperature(newTemperature);
      }, 1000); 
      if(temperature>26){
        toast("It's getting hot!!")
      }
    }

    return () => {
      clearInterval(temperatureInterval);
    };
  }, [isScooterRunning]);

  return (
    <div className="mt-10 w-1/2 h-1/3 bg-transparent rounded-lg p-4">
      <p className="text-2xl text-white">
        Current Temperature: {temperature.toFixed(2)}°C
      </p>
    </div>
  );
}

export default Temperature;
