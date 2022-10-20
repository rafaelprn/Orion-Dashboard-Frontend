import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
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
	Legend
)

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'MÉDIA POR ANO',
		},
	},
}

const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']

export const data = {
	labels,
	datasets: [
		{
			label: 'Estados',
			data: labels.map(() => Math.random() * 1000),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Biomas',
			data: labels.map(() => Math.random() * 1000),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}

export function LineChart() {
	return <Line className="chart3" options={options} data={data} />
}
