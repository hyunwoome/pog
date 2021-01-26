import styles from './Header.module.css';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
	return (
		<section className={styles.headerContainer}>
			<div className={styles.logo}>
				<Link href="/">
					<h1>Pride of Golf</h1>
				</Link>
			</div>
			<ul className={styles.navbar}>
				<li>
					<Link href="/login">
						<a>로그인</a>
					</Link>
				</li>
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
				<li>
					<Link href="/">
						<a>
							<AccountCircleIcon />
						</a>
					</Link>
				</li>
			</ul>
			<button className={styles.menuIcon}>
				<MenuIcon />
			</button>
		</section>
	);
};

export default Header;
