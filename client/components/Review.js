import styles from './Review.module.css';
import Link from 'next/link';

const Review = () => {
	return (
		<div className={styles.reviewContainer}>
			<section className={styles.title}>
				<Link href="/">
					<a>
						<h3>🌟 후기게시판</h3>
					</a>
				</Link>
			</section>
			<section className={styles.container}>
				<div className={styles.card}></div>
			</section>
		</div>
	);
};

export default Review;
