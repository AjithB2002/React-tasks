import React, { useEffect, useState } from 'react';

const TickTock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div className='h5'>Current time:</div>
      <div className='h5'>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default TickTock;