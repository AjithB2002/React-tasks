import React, { useMemo, useState } from 'react';

function ExpensiveFunction({ a, b }) {
  console.log('Expensive function called');
  return a + b;
}

function Container({ a, b }) {
  const result = useMemo(() => ExpensiveFunction({ a, b }), [a, b]);

  return <div>Result: {result}</div>;
}

function Memorization() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
   <>
    <div className='text-center'>
        <h4>Memorization</h4>
      <input  value={a} onChange={(e) => setA(e.target.value)} />
      <input value={b} onChange={(e) => setB(e.target.value)} />
      <Container a={a} b={b} />
    </div>
    <hr />
   </>

  );
}

export default Memorization;


