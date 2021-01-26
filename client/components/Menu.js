import styles from './Menu.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
	const width = 40;
	const height = 40;

	return (
		<div className={styles.menuContainer}>
			<Link href="/goods/hotdeal">
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
			<Link href="/goods/taiwan">
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
			<Link href="/goods/china">
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
			<Link href="/goods/japan">
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
			<Link href="/goods/vietnam">
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
			<Link href="/goods/philippines">
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

			<Link href="/goods/guam-saipan">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/beach.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>괌 | 사이판</span>
					</div>
				</a>
			</Link>
			<Link href="/goods/asia">
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
			<Link href="/goods/korea">
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
			<Link href="/goods/local">
				<a>
					<div className={styles.gridItem}>
						<Image
							src="/images/menu/place.png"
							width={width}
							height={height}
							layout="fixed"
						/>
						<span className={styles.gridText}>지방출발</span>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Menu;
