import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('chart-container')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  title: {
    text: 'Mantenimientos',
    textStyle: {color: 'rgba(255, 255, 255, 0.87)'}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: 'category',
    data: ['Planta A', 'Planta B', 'Planta C', 'Planta D', 'Planta E', 'Total Planta']
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

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

type PieEChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('chart-pie')!;
var myChart = echarts.init(chartDom);
var option: PieEChartsOption;

option = {
  dataset: [
    {
      source: [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Planta A', 123, 32, 2022],
        ['Planta B', 231, 14, 2022],
        ['Planta C', 235, 5, 2022],
        ['Planta D', 341, 25, 2022],
        ['Planta E', 122, 29, 2022],
        ['Planta A', 143, 30, 2023],
        ['Planta B', 201, 19, 2023],
        ['Planta C', 255, 7, 2023],
        ['Planta D', 241, 27, 2023],
        ['Planta E', 102, 34, 2023]
      ]
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2022 }
      }
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2023 }
      }
    },
  ],
  series: [
    {
      type: 'pie',
      radius: 150,
      center: ['50%', '25%'],
      datasetIndex: 1
    },
    {
      type: 'pie',
      radius: 150,
      center: ['50%', '50%'],
      datasetIndex: 2
    }
  ],

  // Optional. Only for responsive layout:
  media: [
    {
      query: { minAspectRatio: 1 },
      option: {
        series: [
          { center: ['25%', '50%'] },
          { center: ['75%', '50%'] },
        ]
      }
    },
    {
      option: {
        series: [
          { center: ['50%', '25%'] },
          { center: ['50%', '50%'] }
        ]
      }
    }
  ]
};

option && myChart.setOption(option);
