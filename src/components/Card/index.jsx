import * as S from './styles.module.css'

const Card = () => {
	return (
		<section className={S.cards}>
			<article className={S.card__container}>
				<h2 className={S.card__title}>Teste</h2>
				<div className={S.card__data}></div>
			</article>
		</section>
	)
}

export default Card
