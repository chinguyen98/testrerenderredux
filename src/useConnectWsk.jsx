import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const useConnectWsk = () => {
  const wsk = useRef(555);

  useEffect(() => {
    wsk.current = { url: 'asd' };
  }, []);

  const turnOnWsk = () => {
    console.log('hihi')
    wsk.current = { url: 'asd' };
  }

  const turnoffWsk = () => {
    wsk.current = null;
  }

  return { wskData: wsk.current, turnOnWsk, turnoffWsk };
}

export default useConnectWsk;