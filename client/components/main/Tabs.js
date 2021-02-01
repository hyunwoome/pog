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
	background-color: #edf1f7;
	display: flex;
	white-space: nowrap;
	overflow-y: hidden;
	overflow-x: auto;
	padding: 5px 15px;
	margin: 10px 0 5px 0;
`;

const Button = styled.button`
	background-color: white;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 12px 15px;
	font-size: 1rem;
	border-radius: 5px;
	margin-right: 10px;
	border: 1px solid #e1e8ef;
	box-shadow: 1px 1px 2px gray;
  &:hover {
		opacity: 0.5;
	}
  &:active {
		background-color: #ea3284;
  }
}
`;

export default Tabs;
