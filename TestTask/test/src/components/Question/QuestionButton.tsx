import { useRef } from "react";
import { QuestionType } from "../../shared/types";
import { StyledQuestionButton } from "./styles";
type QuestionButtonProps = {
	option: string;
	questionInfo: QuestionType;
	nextQuestion: () => void;
	setIsGameFinished: (isGameFinished: boolean) => void;
	setTotalEarned: (totalEarned: string) => void;
	setIsModalVisible: (isModalVisible: boolean) => void;
};
export default function QuestionButton({
	option,
	nextQuestion,
	questionInfo,
	setTotalEarned,
	setIsGameFinished,
	setIsModalVisible,
}: QuestionButtonProps) {
	const btnRef = useRef<HTMLLIElement>(null);


	const handleClick = () => {
		btnRef.current?.classList.add('selected');
		document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
			btn.classList.add('disabled');
		});

		setTimeout(() => {
			btnRef.current?.classList.remove('selected')
			if (option === questionInfo.correctAnswer) {
				btnRef.current?.classList.add('correct')
				setTimeout(() => {
					nextQuestion();
				}, 2000);
			} else {
				btnRef.current?.classList.add('incorrect');
				setTimeout(() => {
					setTotalEarned(questionInfo.price === '500$' ? '0$' : questionInfo.price)
					setIsGameFinished(true);
					setIsModalVisible(true);
				}, 2000);
			}
			document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
				btn.classList.remove('disabled');
			});
		}, 2000);
	};


	return (
		<StyledQuestionButton className="btn" ref={btnRef} onClick={handleClick}>
			<span>{option}</span>
		</StyledQuestionButton >
	)
}