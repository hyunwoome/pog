import styles from './Header.module.css';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { blue, lightBlue } from '@material-ui/core/colors';
import { useState } from 'react';

const Header = () => {
	const [show, setShow] = useState(false);

	const onClickToggle = () => {
		setShow(!show);
	};

	const onBlurToggle = () => {
		if (show === false) {
			setShow(show);
		} else {
			setShow(!show);
		}
	};

	return (
		<section className={styles.headerContainer}>
			<div className={styles.logo}>
				<Link href="/">
					<h1>Pride of Golf</h1>
				</Link>
			</div>
			{/* {show === true ? ( */}
			<div className={styles.navbar}>
				<div>
					<Link href="/login">
						<a>로그인</a>
					</Link>
				</div>
				<li>
					<Link href="/">
						<a>예약확인</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>견적문의</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>후기게시판</a>
					</Link>
				</li>
			</div>
			{/* ) : null */}
			<button
				className={styles.menuIcon}
				onClick={onClickToggle}
				onBlur={onBlurToggle}
			>
				<MenuIcon />
			</button>
		</section>
	);
};

export default Header;
