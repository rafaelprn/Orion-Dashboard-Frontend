import Card from './components/Card'
import * as S from './app.module.css'

const App = () => {
	return (
		<div className="App">
			<div className={S.graphs__container}>
				<div className={S.topbar__cards}>
					<Card />
					<Card />
				</div>
				<Card class={S.bottombar__card} />
			</div>
		</div>
	)
}

export default App
