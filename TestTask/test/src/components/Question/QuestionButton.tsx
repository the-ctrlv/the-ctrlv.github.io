import { useRef } from "react";
import { QuestionProps } from "../../shared/types";

import { ReactComponent as ImageBorderButtonLarge } from "../../assets/button-border-large.svg";

import { StyledQuestionButton } from "./styles";

export default function QuestionButton({
	option,
	nextQuestion,
	questionInfo,
	setTotalEarned,
	setIsGameFinished,
	setIsModalVisible,
}: QuestionProps) {
	const btnRef = useRef<HTMLLIElement>(null);


	const handleClick = () => {
		btnRef.current?.classList.add('selected');
		document.querySelectorAll<HTMLElement>('.btn-question').forEach((btn) => {
			btn.classList.add('disabled');
		});

		setTimeout(() => {
			btnRef.current?.classList.remove('selected')
			if (option === questionInfo.correctAnswer) {
				btnRef.current?.classList.add('correct')
				setTimeout(() => {
					nextQuestion();
				}, 1000);
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
		<StyledQuestionButton className="btn-question" ref={btnRef} onClick={handleClick}>
			<span>{option}</span>
			<ImageBorderButtonLarge />
		</StyledQuestionButton >
	)
}