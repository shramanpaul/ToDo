import React, { useState, useEffect } from 'react';

function Times() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      // Update the current date every second
      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
      };
    }, []);
  return (
    <>
      <div className="bg-[#FF6FFF] w-[20%] h-[5%] flex justify-center items-center rounded-md font-Space_Mono">
        Week of: <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  );
}

export default Times;
