import React from "react";
// import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Spline Chart",
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  series: [
    {
      name: "Sachin",
      data: [1, 2, 3],
    },
    {
      name: "Ajay",
      data: [4,5,6],
    },
    {
      name: "Sandy",
      data: [5,0,4],
    },
    {
      name: "Sharad",
      data: [7,5,2],
    },
    {
      name: "Adi",
      data: [8,6,4],
    },
  ],
};

function Spline() {
  return (
    <div>
      <HighchartsReact
        Highcharts={Highcharts}
        // constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export default Spline;
