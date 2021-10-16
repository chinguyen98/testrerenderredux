import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function useTest() {
  const { count } = useSelector(state => state.app);

  useEffect(() => {
    console.log({ count });
  }, [count])

}

export default useTest;