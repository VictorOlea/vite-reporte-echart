import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { horizontalBarChart } from './horizontalBarChart';
import { pieCharts } from './pieCharts';
import { chartBar } from "./chartBar";

//const datos: Array<number> = [30, 40, 81, 100, 50]
const data: number[] = Array(5)
.fill(undefined)
.map(() => Math.floor(100 * Math.random()))
//console.log(testDatos)

horizontalBarChart()
pieCharts()
chartBar(data)

// setTimeout(() => {
//     window.location.reload()
// }, 10000)