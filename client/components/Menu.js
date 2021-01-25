import styles from './Menu.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
	const width = 40;
	const height = 40;

	return (
		<div className={styles.menuContainer}>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/deal.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>초특가</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/elephant.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>태국</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/panda.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>중국</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/sakura.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>일본</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/cathedral.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>필리핀</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/asian-hat.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>베트남</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/flower.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>괌</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/beach.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>사이판</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/asia.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>기타아시아</span>
					</div>
				</a>
			</Link>
			<Link href="/">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/map.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>국내투어</span>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Menu;

// 초특가 / 태국 / 중국 / 일본 / 필리핀 / 베트남 / 괌 / 사이판 / 기타아시아 / 국내투어
