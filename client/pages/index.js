import Menu from '../components/Menu';
import BestProduct from '../components/BestProduct';
import HotDeal from '../components/HotDeal';
import Review from '../components/Review';

export default function Home() {
	return (
		<div>
			<Menu />
			<BestProduct />
			<HotDeal />
			<Review />
		</div>
	);
}
