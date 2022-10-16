import Card from './components/Card'
import './app.css'

const App = () => {
	return (
		<div className="App">
			<Card classGrid="div1" text="Por Ano"/>
			<Card classGrid="div2" text="Meses do Último Ano"/>
			<Card classGrid="div3" text="Total"/>
			<Card classGrid="div4" text="Mapa"/>
		</div>
	)
}

export default App
