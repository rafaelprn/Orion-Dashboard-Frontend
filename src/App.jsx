import Card from './components/Card'
import Image2 from './assets/Media_nos_ultimos_meses.png'
import Image3 from './assets/Media_Estados.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './app.css'
import { BarChart } from './components/Charts/BarChart'

const App = () => {

	const position = [-25.0947, -50.16316]

	return (
		<div className="App">
			<Card classGrid="div1" text="Por Ano">
				<BarChart />
			</Card>

			<Card classGrid="div2" text="Meses do Último Ano">
				<img src={Image2} alt="" />
			</Card>

			<Card classGrid="div3" text="Total">
				<img src={Image3} alt="" />
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
