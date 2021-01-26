import styles from './HotDeal.module.css';
import Link from 'next/link';

const HotDeal = () => {
	return (
		<div className={styles.hotDealContainer}>
			<section className={styles.title}>
				<Link href="/">
					<a>
						<h4>🔥 초특가로 떠나자</h4>
					</a>
				</Link>
			</section>
			<section className={styles.container}>
				<div className={styles.card}></div>
			</section>
		</div>
	);
};

export default HotDeal;
