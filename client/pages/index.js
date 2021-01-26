import Header from '../components/Header';
import Main from '../components/Main';
import Menu from '../components/Menu';
import BestProduct from '../components/BestProduct';
import HotDeal from '../components/HotDeal';
import Review from '../components/Review';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Header />
			<Menu />
			<BestProduct />
			<HotDeal />
			<Review />
			<Footer />
		</>
	);
}
