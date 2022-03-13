import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Home.css';
import logo from './logo.svg'

const Home = () => {
    return (
        <div>
            <div className="header">
                <Link to="" className="header-logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <p className="header-text">Welcome To React Hooks</p>
            </div>
            <ul className="link-container">
                <li><NavLink activeClassName="active" to="/useEffect">Use Effect</NavLink></li>
                <li><NavLink activeClassName="active" to="/useState">Use State</NavLink></li>
                <li><NavLink activeClassName="active" to="/useReducer">Use Reducer</NavLink></li>
                <li><NavLink activeClassName="active" to="/useRef">Use Ref</NavLink></li>
                <li><NavLink activeClassName="active" to="/useLayoutEffect">Use Layout Effect</NavLink></li>
                <li><NavLink activeClassName="active" to="/useImperativeHandle">Use Imperative Handle</NavLink></li>
                <li><NavLink activeClassName="active" to="/useContext">Use Context</NavLink></li>
                <li><NavLink activeClassName="active" to="/useMemo">Use Memo</NavLink></li>
                <li><NavLink activeClassName="active" to="/useCallback">Use Callback</NavLink></li>
                <li><NavLink activeClassName="active" to="/customHook">Custom Hook</NavLink></li>
            </ul>
        </div>
    )
};

export default Home;