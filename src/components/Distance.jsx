import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BatteryPercentageDecrement({onBatteryPercentageChange}) {
  const [batteryPercentage, setBatteryPercentage] = useState(100);

  const decrementBatteryPercentage = () => {
    setBatteryPercentage(prevPercentage => prevPercentage - 1);
    if(batteryPercentage<20){
      toast("You Are Running Low!!")
    }
  };

  useEffect(() => {
    const intervalId = setInterval(decrementBatteryPercentage, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    onBatteryPercentageChange(batteryPercentage);
  }, [batteryPercentage, onBatteryPercentageChange]);

  return (
    <div>
      
    </div>
  );
}

export default BatteryPercentageDecrement;
