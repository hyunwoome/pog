import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Card = () => {
	const width = 150;
	const height = 110;
	const location = '베트남';
	const title = '하노이-피닉스cc';
	const price = '130,000원~';

	return (
		<div className={styles.cardContainer}>
			<div className={styles.imageContainer}>
				<Link href="/">
					<a>
						<Image
							src="/images/card/golf.jpg"
							width={width}
							height={height}
							layout="fixed"
						/>
					</a>
				</Link>
			</div>
			<section className={styles.cardContent}>
				<Link href="/">
					<a>
						<div className={styles.location}>{location}</div>
						<div className={styles.title}>
							<h5>{title}</h5>
						</div>
						<div className={styles.price}>
							<h5>{price}</h5>
						</div>
					</a>
				</Link>
			</section>
		</div>
	);
};

export default Card;
