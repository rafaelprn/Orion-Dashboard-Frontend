import PropTypes from 'prop-types'
import './styles.css'



const Card = ({ classGrid, text, children }) => {
	return (
		<article className={`card__container ${classGrid}`}>
			<h2 className='card__title'>{text}</h2>
			<div className='card__data'>{children}</div>
		</article>
	)
}

Card.propTypes = {
	classGrid: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node
}

export default Card
