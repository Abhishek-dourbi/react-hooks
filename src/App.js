import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';
import UseEffect from './Hooks/UseEffect';
import UseReducer from './Hooks/UseReducer';
import UseState from './Hooks/UseState';
import UseRef from './Hooks/UseRef';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import UseImperativeHandle from './Hooks/UseImperativeHandle/UseImperativeHandle';
import UseContext from './Hooks/UseContext/UseContext';
import UseMemo from './Hooks/UseMemo';
import UseCallback from './Hooks/UseCallback/UseCallback';
import CustomHook from './Hooks/CustomHook/CustomHook';
import ReactMemo from './Components/ReactMemo/ReactMemo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useLayoutEffect" element={<UseLayoutEffect />} />
          <Route path="useImperativeHandle" element={<UseImperativeHandle />} />
          <Route path="useContext" element={<UseContext />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallback" element={<UseCallback />} />
          <Route path="customHook" element={<CustomHook />} />
          <Route path="reactMemo" element={<ReactMemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
