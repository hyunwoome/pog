import styles from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Image from 'next/image';

const Header = () => {
	return (
		<header className={styles.container}>
			<section className={styles.mainImage}>
				<Image src="/images/background.jpg" width={1024} height={600} />
			</section>
			<section className={styles.navbar}>
				<div className={styles.logo}>
					<a href="/">
						<GolfCourseIcon />
						<h3>Pride of Golf</h3>
					</a>
				</div>
				<div className={styles.search}>
					<form className={styles.searchBar} action="">
						<input
							type="text"
							placeholder="해외골프는 POG와 함께"
							name="search"
						/>
						<button type="submit">
							<SearchIcon />
						</button>
					</form>
				</div>
				<div className={styles.menu}>
					<button>
						<MenuIcon />
					</button>
				</div>
			</section>
		</header>
	);
};

export default Header;
