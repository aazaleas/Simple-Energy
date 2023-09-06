import React from 'react';
import '../index.css';

function Odometer({ batteryPercentage }) {
  // Calculate the rotation angle for the dial based on battery percentage
  const rotationAngle = (batteryPercentage / 100) * 180; // Assumes a half-circle dial

  // Determine the fill color based on battery percentage
  const fillColor = batteryPercentage < 10 ? 'red' : 'green';

  return (
    <div className="flex flex-col items-center justify-center h-2/3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-80 w-80"
        viewBox="0 0 200 200"
      >
        {/* Odometer background */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill={fillColor}
          stroke="beige"
          strokeWidth="8"
        />
        {/* Dial */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="20"
          stroke="black"
          strokeWidth="8"
          transform={`rotate(${rotationAngle} 100 100)`}
        />
      </svg>
      <div className="text-2xl text-white mb-1">
        Battery Percentage: {batteryPercentage}%
      </div>
    </div>
  );
}

export default Odometer;
