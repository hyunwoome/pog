import styles from './Error404.module.css';
import Link from 'next/link';

const Error404 = () => {
	return (
		<div className={styles.error404Container}>
			<div className={styles.errorTitle}>
				<h3>페이지를 찾을 수 없습니다.</h3>
			</div>
			<div className={styles.errorText}>
				요청하신 페이지의 주소가 잘못 입력되었거나,<br></br>
				페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
			</div>
			<div className={styles.buttonContainer}>
				<Link href="/">
					<button className={styles.backButton}>이전</button>
				</Link>
				<Link href="/">
					<button className={styles.homeButton}>홈으로</button>
				</Link>
			</div>
		</div>
	);
};

export default Error404;
