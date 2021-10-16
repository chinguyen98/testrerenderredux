import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MiniTest from './MiniTest';

const Test = ({ wskData }) => {
  console.log('Test rerender');

  const { count } = useSelector(state => state.app);

  useEffect(() => {
    console.log({ wskData })
  }, [wskData])

  return (
    <>
      <div>Đây là component test</div>
      <p>Result: {count}</p>
    </>
  )
}

export default Test;