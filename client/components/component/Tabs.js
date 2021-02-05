import { useState } from 'react';
import styled from 'styled-components';

export default function Tabs() {
	const buttonTitle = [
		'초특가',
		'태국',
		'중국',
		'일본',
		'베트남',
		'필리핀',
		'괌 & 사이판',
		'기타아시아',
		'국내투어',
		'지방출발',
	];

	const [active, setActive] = useState(buttonTitle[0]);

	const buttonTitleList = buttonTitle.map((title) => (
		<TabsList key={title}>
			<ActiveButton active={active === title} onClick={() => setActive(title)}>
				{title}
			</ActiveButton>
			<ActiveTabsIndicator active={active === title} />
		</TabsList>
	));

	return (
		<TabsContainer>
			<TabsUnorderedList>{buttonTitleList}</TabsUnorderedList>
		</TabsContainer>
	);
}

const TabsContainer = styled.nav`
	background-color: var(--color-background);
	height: 48px;
`;

const TabsUnorderedList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	white-space: nowrap;
	overflow-y: hidden;
	overflow-x: auto;
	padding: 0;
	margin: 0;
`;

const TabsList = styled.li`
	list-style: none;
	position: relative;
`;

const TabsButton = styled.button`
	border: 0;
	background-color: var(--color-background);
	height: 48px;
	width: 96px;
	cursor: pointer;
	&:hover {
		background-color: var(--color-border);
	}
	@media screen and (max-width: 400px) {
		width: 80px;
	}
`;

const ActiveButton = styled(TabsButton)`
	opacity: 0.6;
	/* ${TabsIndicator} */
	${({ active }) => active && `opacity: 1`}
`;

const TabsIndicator = styled.span`
	background-color: black;
	position: absolute;
	height: 4px;
	right: 0;
	bottom: 0;
	left: 0;
	display: none;
`;

const ActiveTabsIndicator = styled(TabsIndicator)`
	${({ active }) => active && `display: block`}
`;
