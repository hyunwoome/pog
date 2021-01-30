import styled from 'styled-components';

const Tabs = () => {
	return (
		<Tab>
			<Button>초특가</Button>
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
	background-color: #1876d1;
	display: flex;
	justify-content: space-between;
	white-space: nowrap;
	overflow-y: hidden;
	overflow-x: auto;
	padding: 0 10px;
`;

const Button = styled.button`
	background-color: #1876d1;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 14px 16px;
	font-size: 1rem;
	color: white;
  border-radius: 5px;
  &:hover {
		opacity: 0.5;
	}

  &:active {
    background-color: #458ad8;
  }
}
`;

export default Tabs;
