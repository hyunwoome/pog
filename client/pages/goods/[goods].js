import { useRouter } from 'next/router';
import styles from './goods.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Goods = () => {
	const router = useRouter();
	const goodsTitle = router.query.goods;
	const width = 260;
	const hight = 160;
	const itemSubTitle = '태국';
	const itemTitle = '[라차부리] 디스클럽 1박2일★ 카트 포함 노캐디';
	const itemPrice = '45,000원~';

	let koreanGoodsTitle = '';
	switch (goodsTitle) {
		case 'hotdeal':
			koreanGoodsTitle = '초특가';
			break;
		case 'taiwan':
			koreanGoodsTitle = '태국';
			break;
		case 'taiwan':
			koreanGoodsTitle = '태국';
			break;
		case 'china':
			koreanGoodsTitle = '중국';
			break;
		case 'japan':
			koreanGoodsTitle = '일본';
			break;
		case 'vietnam':
			koreanGoodsTitle = '베트남';
			break;
		case 'philippines':
			koreanGoodsTitle = '필리핀';
			break;
		case 'guam-saipan':
			koreanGoodsTitle = '괌·사이판';
			break;
		case 'asia':
			koreanGoodsTitle = '기타 아시아';
			break;
		case 'korea':
			koreanGoodsTitle = '국내투어';
			break;
		case 'local':
			koreanGoodsTitle = '지방출발';
			break;
	}

	return (
		<div className={styles.goodsContainer}>
			<section className={styles.goodsTitle}>
				<h2>{koreanGoodsTitle} 골프</h2>
			</section>
			<section className={styles.itemContainer}>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
				<div className={styles.itemWrapper}>
					<Link href="/">
						<a>
							<Image
								src="/images/goods/golf.jpg"
								width={width}
								height={hight}
								layout="responsive"
							/>
							<div className={styles.itemText}>
								<div className={styles.itemSubTitle}>{itemSubTitle}</div>
								<div className={styles.itemTitle}>{itemTitle}</div>
								<div className={styles.itemPrice}>{itemPrice}</div>
							</div>
						</a>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Goods;
