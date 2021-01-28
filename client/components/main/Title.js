import styled from 'styled-components';

const Title = () => {
	return <TitleWrapper>로그인</TitleWrapper>;
};

const TitleWrapper = styled.div`
	padding-top: 20px;
	width: 100%;
	height: 50px;
	font-size: 1.5rem;
	text-align: center;
	font-weight: 500;
`;

export default Title;
