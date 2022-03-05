import React, { useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import "./App.css";

const Index = function () {
  return <div>首页</div>;
};
const List = function (props) {
  console.log(props);
  return <div>列表页</div>;
};
function App() {
  return (
    <div className="layout">
      <div className="left">
        <Link to="/index">首页</Link>
        <Link to="/list">列表</Link>
        <Link to="/sub/childindex">子应用首页</Link>
      </div>
      <div className="content" >
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <div id="child"></div>
      </div>
    </div>
  );
}

export default App;
