import logo from "./logo.svg";
import "./App.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { increaseAction } from "./reducer/app/app.action";
import Test from "./components/Test";
import MiniTest from "./components/MiniTest";
import useConnectWsk from "./useConnectWsk";
import useTest from "./hooks/useTest";
import { increaseThreeAction, testOlaAction } from "./reducer/tada/tada.action";
import ListTest from "./components/ListTest";
import { useState } from "react";


function App() {
  console.log("app rerender");
  // const count = useSelector(state => state.app.count);
  // const { countTwo } = useSelector(state => state.app);
  // const app = useSelector(state => state.app);
  // const { increaseThree } = useSelector(state => state.tada.ecec.blabla);
  // const { blaqq } = useSelector(state => state.tada.hihi);
  // const test = useSelector(state => state.tada.ecec.blabla)
  const soso = useSelector((state) => state.tada.hihi.ccc);
  // const blaqq1 = useSelector(state => state.tada.hihi.blaqq)

  const [forceRender, setForceRender] = useState(0);
  const [listId, setListId] = useState([1, 2, 3, 4, 5, 6, 7]);

  const dispatch = useDispatch();

  // const { wskData, turnOnWsk, turnoffWsk } = useConnectWsk()

  // useTest();

  const handleClick = () => {
    // dispatch(increaseAction())
    // dispatch(increaseThreeAction())
    // setForceRender(new Date().getTime())
    setListId([10, ...listId])
    dispatch(testOlaAction());
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      {/* <button onClick={() => { turnOnWsk() }}>Turn on wsk</button>
      <button onClick={turnoffWsk}>Turn off wsk</button>
      <Test wskData={wskData} /> */}
      {/* <MiniTest /> */}
      {/* <ListTest key={forceRender} /> */}
      {listId.map((item) => (
        <ListTest item={item} />
      ))}
    </div>
  );
}

export default App;
