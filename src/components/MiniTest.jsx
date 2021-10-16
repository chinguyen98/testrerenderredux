import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

const MiniTest = () => {
  console.log('MiniTest rerender');

  const { countTwo } = useSelector(state => state.app);
  const [la, setLa] = useState(false);

  const setLane = () => {
    setLa(!la);
  }

  return (
    <div>Đây là component mini test {`countTwo`} <button onClick={setLane}>Set la</button></div>
  )
}

export default MiniTest;