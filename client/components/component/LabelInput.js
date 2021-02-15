import styled from 'styled-components';

export default function LabelInput({
	id,
	forInput,
	label,
	type,
	placeholder,
	disabled,
}) {
	return (
		<TextInputLabel for={forInput}>
			{label}
			<TextInputComponent
				type={type}
				id={id}
				placeholder={placeholder}
				disabled={disabled}
			/>
		</TextInputLabel>
	);
}

const TextInputLabel = styled.label``;

const TextInputComponent = styled.input``;
