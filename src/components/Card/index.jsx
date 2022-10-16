import PropTypes from 'prop-types'
import './styles.css'

const Card = ({ classGrid }) => {
	return (
		<article className={`card__container ${classGrid}`}>
			<h2 className='card__title'>Teste</h2>
			<div className='card__data'></div>
		</article>
	)
}

Card.propTypes = {
	classGrid: PropTypes.string,
}

export default Card
