import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

const MiniTest = () => {
  console.log('MiniTest rerender');

  const count = useSelector(state => state.app.countTwo);
  const [la, setLa] = useState(false);

  const setLane = () => {
    setLa(!la);
  }

  return (
    <div>Đây là component mini test {`countTwo`} <button onClick={setLane}>Set la</button></div>
  )
}

export default MiniTest;