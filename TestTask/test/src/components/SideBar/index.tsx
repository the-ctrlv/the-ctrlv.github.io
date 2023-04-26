import { getClassNames } from "../../shared/functions";
import { QuestionType } from "../../shared/types";
import { StyledSideBar } from "./styles";
import { ReactComponent as ImageBorderButton } from "../../assets/button-border.svg";

type SideBarProps = {
	questionList: QuestionType[];
	currentQuestionNumber: number;
}

export default function SideBar(props: SideBarProps) {
	const { currentQuestionNumber, questionList } = props;
	return (
		<StyledSideBar className="side-bar">
			{questionList.reverse().map((question, index) => (
				<div key={index}
					className={getClassNames('side-bar__item',
						index === currentQuestionNumber && 'side-bar__item--active',
						index < currentQuestionNumber && 'side-bar__item--inactive')}>
					<h4>{question.price}</h4>
					<ImageBorderButton />
				</div>
			))}
		</StyledSideBar>
	);
}