import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAction } from './reducer/app/app.action';
import Test from './components/Test';
import MiniTest from './components/MiniTest';
import useConnectWsk from './useConnectWsk';
import useTest from './hooks/useTest';

function App() {
  console.log('app rerender')
  // const { count } = useSelector(state => state.app);
  const { countTwo } = useSelector(state => state.app);

  const dispatch = useDispatch();

  // const { wskData, turnOnWsk, turnoffWsk } = useConnectWsk()

  // useTest();

  const handleClick = () => {
    dispatch(increaseAction())
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      {/* <button onClick={() => { turnOnWsk() }}>Turn on wsk</button>
      <button onClick={turnoffWsk}>Turn off wsk</button>
      <Test wskData={wskData} /> */}
      <MiniTest />
    </div>
  );
}

export default App;
