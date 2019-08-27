import React from "react";
import ReactDOM from "react-dom";
import './App.scss';

const App = () => {
  return <div className="main"> Hello <span className="main__test">test</span>React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));