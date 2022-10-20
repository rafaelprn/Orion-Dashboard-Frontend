import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import './styles.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'QUEIMADAS POR ANO',
		},
	},
}

const labels = ['2018', '2019', '2020', '2021', '2022']

export const data = {
	labels,
	datasets: [
		{
			label: 'Norte',
			data: labels.map(() => (Math.random()*1000)),
			backgroundColor: 'rgba(230, 250, 100, 0.7)',
		},
		{
			label: 'Nordeste',
			data: labels.map(() => (Math.random()*1000)),
			backgroundColor: 'rgba(53, 162, 235, 0.7)',
		},
		{
			label: 'Centro-Oeste',
			data: labels.map(() => (Math.random()*1000)),
			backgroundColor: 'rgba(0, 255, 132, 0.7)',
		},
		{
			label: 'Sudeste',
			data: labels.map(() => (Math.random()*1000)),
			backgroundColor: 'rgba(255, 99, 132, 0.7)',
		},
		{
			label: 'Sul',
			data: labels.map(() => (Math.random()*1000)),
			backgroundColor: 'rgba(250, 140, 200, 0.7)',
		},
	],
}

export const BarChart = () => {
	return <Bar className='chart1' data={data} options={options} />
}
