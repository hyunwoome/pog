import styles from './BestProduct.module.css';
import Link from 'next/link';
import Card from './Card';

const BestProduct = () => {
	return (
		<div className={styles.bestProductContainer}>
			<section className={styles.title}>
				<Link href="/">
					<a>
						<h4>👍 베스트 골프상품</h4>
					</a>
				</Link>
			</section>
			<section className={styles.container}>
				<div className={styles.card}>
					<Card />
				</div>
			</section>
		</div>
	);
};

export default BestProduct;
