import styled from 'styled-components';
import BoardCardList from '../component/BoardCardList';

export default function Board() {
	return (
		<BoardContainer>
			<BoardTitle>후기 게시판</BoardTitle>
			<BoardCardList />
		</BoardContainer>
	);
}

const BoardContainer = styled.div`
	width: 100%;
	margin-top: 16px;
	background-color: var(--color-background);
	padding: 4px 16px;
`;

const BoardTitle = styled.h3`
	font-weight: 400;
	margin: 0;
	padding: 16px 0;
`;
