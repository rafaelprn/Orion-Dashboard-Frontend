import PropTypes from 'prop-types'
import './styles.css'



const Card = ({ classGrid, text }) => {
	return (
		<article className={`card__container ${classGrid}`}>
			<h2 className='card__title'>{text}</h2>
			<div className='card__data'></div>
		</article>
	)
}

Card.propTypes = {
	classGrid: PropTypes.string,
	text: PropTypes.string
}

export default Card
