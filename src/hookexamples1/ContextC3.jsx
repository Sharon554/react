import React, { useContext } from 'react';
import { GlobalDataProvider } from './ContextAPI';

const ContextC3 = () => {
  const { count, incre } = useContext(GlobalDataProvider);

  return (
    <div>
      <h2>ContextC3 Component</h2>
      <p>Count: {count}</p>
      <button onClick={incre}>Increment</button>
    </div>
  );
};

export default ContextC3;
