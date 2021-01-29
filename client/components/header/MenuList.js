import styled from 'styled-components';
import Link from 'next/link';

const MenuList = () => {
	return (
		<MenuWrapper>
			<Link href="/">
				<MenuItemButton>
					<a>공지사항</a>
				</MenuItemButton>
			</Link>
			<Link href="/">
				<MenuItemButton>
					<a>로그인</a>
				</MenuItemButton>
			</Link>
			<Link href="/">
				<MenuItemButton>
					<a>예약확인</a>
				</MenuItemButton>
			</Link>
			<Link href="/">
				<MenuItemButton>
					<a>견적문의</a>
				</MenuItemButton>
			</Link>
			<Link href="/">
				<MenuItemButton>
					<a>후기게시판</a>
				</MenuItemButton>
			</Link>
		</MenuWrapper>
	);
};

const MenuWrapper = styled.div`
	position: absolute;
	width: 150px;
	height: 250px;
	top: 60px;
	left: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	box-shadow: 1px 2px 5px black;
	// !: display: none
	/* display: none; */
`;

const MenuItemButton = styled.button`
	height: 50px;
	background-color: white;
	border: none;
	font-size: 1.1rem;
	text-align: left;
	padding: 0 1rem;
	cursor: pointer;
	&:hover {
		background-color: lightgray;
	}
`;

export default MenuList;
