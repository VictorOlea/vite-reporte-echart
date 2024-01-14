import * as echarts from "echarts";

export function chartBar() {
  // Create the echarts instance
  var myChart = echarts.init(document.getElementById("chart-bar"));

  // Draw the chart
  myChart.setOption({
    title: {
      text: "Producción por Planta",
      textStyle: { color: "rgba(255, 255, 255, 0.87)" },
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      data: [
        "Planta A",
        "Planta B",
        "Planta C",
        "Planta D",
        "Planta E",
      ],
      axisLabel: {color: "rgba(255, 255, 255, 0.87)"}
    },
    yAxis: {
        axisLabel: {color: "rgba(255, 255, 255, 0.87)"}
    },
    series: [
      {
        name: "",
        type: "bar",
        data: [30, 40, 81, 100, 50, 61],
      },
    ],
  });
}
