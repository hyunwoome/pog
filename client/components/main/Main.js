import styled from 'styled-components';
import Tabs from './Tabs';

const Main = () => {
	return (
		<MainContainer>
			<Tabs />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
`;

export default Main;
