import styled from 'styled-components';

const Title = ({ title }) => {
	return <TitleWrapper>{title}</TitleWrapper>;
};

const TitleWrapper = styled.div`
	padding-top: 20px;
	margin-bottom: 20px;
	width: 100%;
	height: 50px;
	font-size: 1.5rem;
	text-align: center;
	font-weight: 500;
`;

export default Title;
