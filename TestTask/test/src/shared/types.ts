export interface QuestionType {
	title: string;
	options: string[];
	correctAnswer: string;
	price: string;
}

export type QuestionProps = {
	option?: string;
	questionInfo: QuestionType;
	nextQuestion: () => void;
	setIsGameFinished: (isGameFinished: boolean) => void;
	setTotalEarned: (totalEarned: string) => void;
	setIsModalVisible: (isModalVisible: boolean) => void;
};