import { QuestionType } from "../../shared/types";
import QuestionButton from "./QuestionButton";
import { StyledQuestion } from "./styles";


type QuestionProps = {
	questionInfo: QuestionType;
	nextQuestion: () => void;
	setIsGameFinished: (isGameFinished: boolean) => void;
	setTotalEarned: (totalEarned: string) => void;
};

export default function Question({
	questionInfo,
	nextQuestion,
	setTotalEarned,
	setIsGameFinished }: QuestionProps) {


	return (
		<StyledQuestion className="question">
			<h2>{questionInfo.title}</h2>
			<ul className="options">
				{questionInfo.options.map((option: string, index: number) => (
					<QuestionButton
						key={index}
						option={option}
						questionInfo={questionInfo}
						nextQuestion={nextQuestion}
						setTotalEarned={setTotalEarned}
						setIsGameFinished={setIsGameFinished}
					/>
				))}
			</ul>
		</StyledQuestion>
	);
}