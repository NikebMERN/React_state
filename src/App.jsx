import React from "react";

import IncreaseDecreaseandReset from "./Components/Hooks/Count Q3/IncreaseDecreaseandReset";
import Countwithtittle from "./Components/Hooks/Count with tittle Q4/Countwithtittle";
import CounterbyReducer from "./Components/Hooks/UseReducer/CounterbyReducer";
import EvenCounterbyReducer from "./Components/Hooks/UseReducer/EvenCounterbyReducer";
import CounterDisplay from './Components/state/Count Q1/Mycounter';
import EvenCounterDisplayer from './Components/state/Even counter Q2/EvenCounterDisplayer';
import Mounting from "./Components/state/Life cycle in state/Mounting";
import UnmountDisplayer from "./Components/state/Life cycle in state/UnmountDisplayer";
import Update from "./Components/state/Life cycle in state/Update";

function App() {
  return (
    <div>
      <div className="top-one">
        <h1>Counter</h1>
      <CounterDisplay />
    </div>
<br />
<div className="top-two">
        <h1>Even Counter</h1>
      <EvenCounterDisplayer />
    </div>
<br />

<div className="top-three">
        <h1>States life Cycle</h1>
      <Mounting />
      <Update />
      <UnmountDisplayer />
    </div>
<br />
<div className="top-Four">
        <h1>Hook Counter</h1>
      <IncreaseDecreaseandReset />
    </div>
<br />
<div className="top-Five">
        <h1>Hook Counter with tittle</h1>
      <Countwithtittle />
    </div>
    <br />
<div className="top-Six">
        <h1>Hook Counter using UseReducer</h1>
      <CounterbyReducer />
    </div>
    <br />
<div className="top-Seven">
        <h1>Hook Even Counter using UseReducer</h1>
      <EvenCounterbyReducer />
    </div>
    </div>



  );
}

export default App;
