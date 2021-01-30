import styled from 'styled-components';
import Link from 'next/link';

const MenuList = ({ open }) => {
	return (
		<MenuWrapper open={open}>
			<Link href="/notice">
				<MenuItemButton>
					<a>공지사항</a>
				</MenuItemButton>
			</Link>
			<Link href="/login">
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
	top: 44px;
	left: 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border: 1px solid #c4c4c4;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
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
