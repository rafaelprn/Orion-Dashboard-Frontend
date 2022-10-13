import * as S from './styles.module.css'
import Rocket from '../../assets/rocket.svg'

const Navbar = () => {
	return (
		<header className={S.navbar}>
			<nav className={S.navbar__container}>
				<div className={S.navbar__brand}>
					<img src={Rocket} />
					Orion Aerospace Design
				</div>
				<div>
					<h1 id={S.navbar__title}>Queimadas</h1>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
