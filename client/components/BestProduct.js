import styles from './BestProduct.module.css';
import Link from 'next/link';

const BestProduct = () => {
	return (
		<div className={styles.bestProductContainer}>
			<section className={styles.title}>
				<Link href="/">
					<a>
						<h3>👍 베스트 골프상품</h3>
					</a>
				</Link>
			</section>
			<section className={styles.container}>
				<div className={styles.card}></div>
			</section>
		</div>
	);
};

export default BestProduct;
