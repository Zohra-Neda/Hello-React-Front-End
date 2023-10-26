import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const messages = useSelector((state) => state.messages.value);
  return (
    <div>
      <h1>Refresh To see the new messages </h1>
      <p>{messages.message}</p>
    </div>
  );
};

export default Greeting;