import { QuestionProps } from "../../shared/types";

import QuestionButton from "./QuestionButton";

import { StyledQuestion } from "./styles";


export default function Question({
	questionInfo,
	nextQuestion,
	setIsModalVisible,
	setTotalEarned,
	setIsGameFinished }: QuestionProps) {


	return (
		<StyledQuestion>
			<h2>{questionInfo.title}</h2>
			<ul>
				{questionInfo.options.map((option: string, index: number) => (
					<QuestionButton
						key={index}
						option={option}
						questionInfo={questionInfo}
						nextQuestion={nextQuestion}
						setTotalEarned={setTotalEarned}
						setIsGameFinished={setIsGameFinished}
						setIsModalVisible={setIsModalVisible}
					/>
				))}
			</ul>
		</StyledQuestion>
	);
}