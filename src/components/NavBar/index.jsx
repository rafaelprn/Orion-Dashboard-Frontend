import * as S from './styles.module.css'
import Rocket from '../../assets/rocket.svg'

const Navbar = () => {
	return (
		<section className={S.navbar}>
			<nav className={S.navbar__container}>
				<div className={S.navbar__brand}>
					<img src={Rocket} />
					Orion Aerospace Design
				</div>
				<h1 id={S.navbar__title}>Queimadas</h1>
			</nav>
		</section>
	)
}

export default Navbar
