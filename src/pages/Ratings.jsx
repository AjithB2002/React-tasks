import React, { useState } from 'react';

const NumberInput = ({
  render,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
}) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return render({
    value,
    onChange: handleChange,
    min,
    max,
  });
};

const NumberDisplay = (props) => {
  return (
  <>
    <div className='container text-center'>
      <h4>Component Composition</h4>
        <p className='h4 pt-3'>Ratings</p>
     <span>{props.value}</span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
    <hr />
    </>
  );
};

const Ratings = () => {
  return (
    <NumberInput
      render={(props) => <NumberDisplay {...props} />}
      min={0}
      max={10}
    />
  );
};

export default Ratings;