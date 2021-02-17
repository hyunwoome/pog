import styled from 'styled-components';

export default function BaseInput({
	type,
	placeholder,
	required,
	id,
	defaultValue,
}) {
	return (
		<BaseInputComponent
			type={type}
			placeholder={placeholder}
			required={required}
			id={id}
			defaultValue={defaultValue}
		/>
	);
}

const BaseInputComponent = styled.input`
	width: 100%;
	border: 1px solid var(--color-border);
	padding: 16px;
	font-size: 1rem;
	border-radius: 3px;
	margin-bottom: 16px;
	&::placeholder {
		color: var(--color-placeholder);
	}
`;
