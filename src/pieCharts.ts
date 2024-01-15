import * as echarts from "echarts";

export function pieCharts(): void {
  type PieEChartsOption = echarts.EChartsOption;

  var chartDom = document.getElementById("chart-pie")!;
  var myChart = echarts.init(chartDom);
  var option: PieEChartsOption;

  option = {
    legend: { textStyle: { color: "rgba(255, 255, 255, 0.87)" } },
    tooltip: {
      trigger: "item",
      formatter: "{d}%",
    },
    dataset: [
      {
        source: [
          ["Planta", "Sales", "Price", "Year"],
          ["Planta A", 123, 32, 2022],
          ["Planta B", 231, 14, 2022],
          ["Planta C", 235, 5, 2022],
          ["Planta D", 341, 25, 2022],
          ["Planta E", 122, 29, 2022],
          ["Planta A", 143, 30, 2023],
          ["Planta B", 201, 19, 2023],
          ["Planta C", 255, 7, 2023],
          ["Planta D", 241, 27, 2023],
          ["Planta E", 102, 34, 2023],
        ],
      },
      {
        transform: {
          type: "filter",
          config: { dimension: "Year", value: 2022 },
        },
      },
      {
        transform: {
          type: "filter",
          config: { dimension: "Year", value: 2023 },
        },
      },
    ],
    series: [
      {
        type: "pie",
        radius: 150,
        center: ["50%", "25%"],
        datasetIndex: 1,
        label: {
          position: "outside",
          color: "rgba(255, 255, 255, 0.87)",
        },
      },
      {
        type: "pie",
        radius: 150,
        center: ["50%", "50%"],
        datasetIndex: 2,
        label: {
          position: "outside",
          color: "rgba(255, 255, 255, 0.87)",
        },
      },
    ],

    // Optional. Only for responsive layout:
    media: [
      {
        query: { minAspectRatio: 1 },
        option: {
          series: [{ center: ["25%", "50%"] }, { center: ["75%", "50%"] }],
        },
      },
      {
        option: {
          series: [{ center: ["50%", "25%"] }, { center: ["50%", "50%"] }],
        },
      },
    ],
  };

  option && myChart.setOption(option);
}