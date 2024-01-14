import * as echarts from "echarts";

export function horizontalBarChart() {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('chart-container')
    var myChart = echarts.init(chartDom);
    var option: EChartsOption

    option = {
        title: {
          text: 'Mantenimientos',
          textStyle: {color: 'rgba(255, 255, 255, 0.87)'},
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {textStyle:{color: "rgba(255, 255, 255, 0.87)"}},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {color: "rgba(255, 255, 255, 0.87)"}
        },
        yAxis: {
          type: 'category',
          data: ['Planta A', 'Planta B', 'Planta C', 'Planta D', 'Planta E', 'Total Planta'],
          axisLabel: {color: "rgba(255, 255, 255, 0.87)"}
        },
        series: [
          {
            name: '2022',
            type: 'bar',
            data: [180, 130, 45, 100, 130, 585]
          },
          {
            name: '2023',
            type: 'bar',
            data: [190, 220, 30, 120, 130, 690]
          }
        ]
      };
      
      option && myChart.setOption(option);

}
