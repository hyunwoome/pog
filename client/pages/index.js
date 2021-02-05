import styled from 'styled-components';
import Header from '../components/section/Header';
import Tabs from '../components/component/Tabs';
import MediaCardGrid from '../components/component/MediaCardGrid';

export default function Home() {
	return (
		<>
			<Header />
			<Tabs />
			<MediaCardGrid />
		</>
	);
}
