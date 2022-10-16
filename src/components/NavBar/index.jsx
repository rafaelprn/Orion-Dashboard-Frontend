import './styles.css'
import Rocket from '../../assets/rocket.svg'

const Navbar = () => {
	return (
		<nav className='navbar__container'>
			<div className='navbar__brand'>
				<img src={Rocket} />
				Orion Aerospace Design
			</div>
			<h1 className='navbar__title'>Queimadas</h1>
		</nav>
	)
}

export default Navbar
