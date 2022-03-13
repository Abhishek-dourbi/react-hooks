import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseReducer from './Hooks/UseReducer';
import UseState from './Hooks/UseState';
import UseRef from './Hooks/UseRef';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import UseImperativeHandle from './Hooks/UseImperativeHandle/UseImperativeHandle';
import UseContext from './Hooks/UseContext/UseContext';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseImperativeHandle /> */}
      <UseContext />
    </div>
  );
}

export default App;
