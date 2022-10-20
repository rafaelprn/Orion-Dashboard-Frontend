import Card from './components/Card'
import { BarChart } from './components/Charts/BarChart'
import { AreaChart } from './components/Charts/AreaChart'
import { LineChart } from './components/Charts/LineChart'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './app.css'

const App = () => {

	const position = [-25.0947, -50.16316]

	return (
		<div className="App">
			<Card classGrid="div1" text="Por Ano">
				<BarChart />
			</Card>

			<Card classGrid="div2" text="Meses do Último Ano">
				<AreaChart />
			</Card>

			<Card classGrid="div3" text="Total">
				<LineChart />
			</Card>
			 
			<Card classGrid="div4" text="Mapa">
				<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</Card>
		</div>
	)
}

export default App
