import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
)

import './styles.css'

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'MÉDIA DO ÚLTIMO SEMESTRE',
		},
	},
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: 'Biomas',
			data: labels.map(() => Math.random() * 1000),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
		{
			fill: true,
			label: 'Estados',
			data: labels.map(() => Math.random() * 1000),
			borderColor: 'rgb(250, 20, 50)',
			backgroundColor: 'rgba(250, 20, 50, 0.5)',
		},
	],
}

export function AreaChart() {
	return <Line className="chart2" options={options} data={data} />
}
