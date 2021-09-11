import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My stock chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const StockChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={"stockChart"}
    options={options}
  />
);

export default StockChart;
