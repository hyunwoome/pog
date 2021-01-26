import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<section className={styles.subMenu}>
				<ul className={styles.menuList}>
					<li>
						<Link href="/">
							<a>회사소개</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>개인정보처리방침</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>여행약관</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>해외여행지보험</a>
						</Link>
					</li>
				</ul>
			</section>
			<section className={styles.content}>
				<div className={styles.brand}>(주)프라이드오브골프</div>
				<div className={styles.brandContent}>
					※ 부득이한 사정에 의해 여행일정이 변경되는 경우 사전 동의를 받습니다.
				</div>
				<div className={styles.copyright}>
					COPYRIGHT ⓒ PRIDE OF GOLF SERVICE INC. ALL RIGHTS RESERVED
				</div>
			</section>
		</div>
	);
};

export default Footer;
