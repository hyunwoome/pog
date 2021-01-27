import styles from './Footer.module.css';
import Link from 'next/link';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getLuminance } from '@material-ui/core';

const Footer = () => {
	const [show, setShow] = useState(false);

	const onClickToggle = () => {
		setShow(!show);
	};

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
				<small className={styles.copyright}>
					ⓒ 2021 PRIDE OF GOLF SERVICE INC. ALL RIGHTS RESERVED
				</small>
				<div className={styles.iconCopyright}>
					<div className={styles.assetText}>
						<div>Asset Copyright</div>
						<button onClick={onClickToggle}>
							<ExpandMoreIcon style={{ fontSize: 15 }} />
						</button>
					</div>
					{show === true ? (
						<ul className={styles.iconCopyrightList}>
							<li>
								Icons made by{' '}
								<a href="https://www.freepik.com" title="Freepik">
									Freepik
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a href="https://smashicons.com/" title="Smashicons">
									Smashicons
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a href="https://www.freepik.com" title="Freepik">
									Freepik
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">
									bqlqn
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a href="https://www.freepik.com" title="Freepik">
									Freepik
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a
									href="https://www.flaticon.com/authors/wichaiwi"
									title="Wichai.wi"
								>
									Wichai.wi
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a
									href="https://www.flaticon.com/authors/smashicons"
									title="Smashicons"
								>
									Smashicons
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a
									href="https://www.flaticon.com/authors/good-ware"
									title="Good Ware"
								>
									Good Ware
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a
									href="https://www.flaticon.com/authors/mangsaabguru"
									title="mangsaabguru"
								>
									mangsaabguru
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
							<li>
								Icons made by{' '}
								<a href="https://www.freepik.com" title="Freepik">
									Freepik
								</a>{' '}
								from{' '}
								<a href="https://www.flaticon.com/" title="Flaticon">
									www.flaticon.com
								</a>
							</li>
						</ul>
					) : null}
				</div>
			</section>
		</div>
	);
};

export default Footer;
