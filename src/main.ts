import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { horizontalBarChart } from './horizontalBarChart';
import { pieCharts } from './pieCharts';
import { chartBar } from "./chartBar";

const datos: Array<number> = [30, 40, 81, 100, 50, 61]

horizontalBarChart()
pieCharts()
chartBar(datos)

// setTimeout(() => {
//     window.location.reload()
// }, 10000)