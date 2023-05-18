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
import UseDeferredValue from './Hooks/UseDeferredValue/UseDeferredValue';
import UseTransition from './Hooks/UseTransition';
import UseId from './Hooks/UseId/UseId';
import UseSyncExternalStore from './Hooks/UseSyncExternalStore/UseSyncExternalStore';

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
          <Route path="useDeferredValue" element={<UseDeferredValue />} />
          <Route path='useTransition' element={<UseTransition />} />
          <Route path='useId' element={<UseId />} />
          <Route path='useSyncExternalStore' element={<UseSyncExternalStore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
