import styled from 'styled-components';
import BackButton from '../../components/component/BackButton';
import BaseInput from '../../components/component/BaseInput';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useRouter } from 'next/router';
import LabelInput from '../../components/component/LabelInput';

export default function QuestionCreate() {
	const router = useRouter();
	const homeButton = () => {
		router.push('/');
	};
	return (
		<div>
			<BackButton
				title="견적문의하기"
				icon={HomeRoundedIcon}
				color="#ff577f"
				buttonHandle={homeButton}
			/>
			<QuestionCreateContainer>
				<QuestionCreateContentWrapper>
					<TitleContainer>
						<LabelInput
							for="title"
							label="제목"
							type="text"
							id="title"
							placeholder="제목은 자동으로 생성됩니다."
							disabled={true}
						/>
					</TitleContainer>
					<DropdownContainer></DropdownContainer>
				</QuestionCreateContentWrapper>
			</QuestionCreateContainer>
		</div>
	);
}

const QuestionCreateContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
	padding: 54px 0px 32px 0px;
	text-align: center;
`;

const QuestionCreateContentWrapper = styled.div`
	padding: 8px 16px;
`;

const TitleContainer = styled.div``;

const DropdownContainer = styled.div``;
