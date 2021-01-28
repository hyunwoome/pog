import styled from 'styled-components';

const Tabs = () => {
	return (
		<Tab>
			<Button primary>초특가</Button>
			<Button>태국</Button>
			<Button>중국</Button>
			<Button>일본</Button>
			<Button>베트남</Button>
			<Button>필리핀</Button>
			<Button>괌 & 사이판</Button>
			<Button>기타아시아</Button>
			<Button>국내투어</Button>
			<Button>지방출발</Button>
		</Tab>
	);
};

const Tab = styled.div`
	overflow: scroll;
	background-color: #1876d1;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button`
	background-color: #1876d1;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 14px 16px;
	transition: 0.3s;
	font-size: 1rem;
	color: white;
`;

export default Tabs;
