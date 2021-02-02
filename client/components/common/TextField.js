import styled from 'styled-components';

export default function TextField({
	type,
	placeholder,
	Icon,
	color,
	fontSize,
}) {
	return (
		<TextFieldContainer>
			<TextFieldIconWrapper>
				<Icon color={color} fontSize={fontSize} />
			</TextFieldIconWrapper>
			<TextFieldInput type={type} placeholder={placeholder} />
		</TextFieldContainer>
	);
}

const TextFieldContainer = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	position: relative;
`;

const TextFieldIconWrapper = styled.div`
	position: absolute;
	left: 15px;
`;

const TextFieldInput = styled.input`
	width: 100%;
	height: 56px;
	padding: 12px 16px 14px 45px;
	font-size: 1rem;
	font-weight: 400;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border: 0;
	border-bottom: 1px solid #727272;
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;
