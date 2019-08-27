import React from "react";
import ReactDOM from "react-dom";
import './App.scss';
import img1 from './assets/1.jpeg'

const App = () => {
  return <div className="main"> Hello <img src={img1}/><span className="main__test">test</span>React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));