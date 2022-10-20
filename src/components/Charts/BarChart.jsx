import React from 'react'
import { Bar } from 'react-chartjs-2'
// import { Chart as ChartJS} from 'chart.js'

export const BarChart = () => {
	return (
		<Bar
			data={{
				labels: ['Red', 'Blue', 'Green'],
			}}
			height={200}
			widht={400}
			options={{
				maintainAspectRatio: false,
			}}
		/>
	)
}
