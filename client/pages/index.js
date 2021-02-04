import styled from 'styled-components';
import Header from '../components/section/Header';
import Tabs from '../components/component/Tabs';
import BottomNavigation from '../components/section/BottomNavigation';

export default function Home() {
	return (
		<>
			<Header />
			<Tabs />
			<BottomNavigation />
		</>
	);
}
