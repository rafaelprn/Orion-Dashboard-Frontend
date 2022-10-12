import * as S from './styles.module.css'

const Card = () => {
	return (
		<article className={S.card__container}>
			<h2 className={S.card__title}>Teste</h2>
			<div className={S.card__data}></div>
		</article>
	)
}

export default Card
