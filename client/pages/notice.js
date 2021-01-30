import styled from 'styled-components';
import Title from '../components/main/Title';

const Notice = () => {
	return (
		<NoticeContainer>
			<NoticeWrapper>
				<Title title="공지사항" />
			</NoticeWrapper>
		</NoticeContainer>
	);
};

const NoticeContainer = styled.div`
	width: 100%;
	height: 80vh;
	background-color: white;
`;

const NoticeWrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Notice;
