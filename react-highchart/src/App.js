import React from "react";
import "./App.css";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Highcharts from "highcharts/highstock";
import Spline from "./charts/spline";
import MapChart from './charts/mapChart';
import StockChart from "./charts/stockChart";
function App() {
  return (
    <div className="container-fluid">
      <h2 className="center">Highcharts</h2>
      <Spline />
      <MapChart/>
      <StockChart/>
    </div>
  );
}

export default App;
