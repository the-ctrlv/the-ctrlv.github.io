import { useEffect } from 'react';
import CheckboxQuestion from './QuestionTypes/CheckboxQuestion';
import DropdownQuestion from './QuestionTypes/DropdownQuestion';
import MultipleTextQuestion from './QuestionTypes/MultipleTextQuestion';
import RadioQuestion from './QuestionTypes/RadioQuestion';
import TextQuestion from './QuestionTypes/TextQuestion';

export default function Questions({
	assessmentData,
	currentValues,
	setValue,
	errors,
	control,
	register,
	currentPoints,
	triggerMultipleQuestions,
	setCurrentPoints }) {
	useEffect(() => {
		console.log('currentValues', currentValues);
	}, [currentValues]);
	const questions = assessmentData.map((question, i) => {
		switch (question.type) {
			case 'radiogroup':
				return (
					<RadioQuestion
						key={i}
						data={question}
						currentValues={currentValues}
						setValue={setValue}
						errors={errors}
						register={register}
						currentPoints={currentPoints}
						setCurrentPoints={setCurrentPoints}
					/>

				);
			case 'dropdown':
				return (
					<DropdownQuestion
						key={i}
						data={question}
						currentValues={currentValues}
						setValue={setValue}
						errors={errors}
						register={register}
						control={control}
					/>
				);
			case 'checkbox':
				return (
					<CheckboxQuestion
						key={i}
						data={question}
						currentValues={currentValues}
						register={register}
						errors={errors}
					/>
				);
			case 'text':
				return (
					<TextQuestion
						key={i}
						data={question}
						errors={errors}
						control={control}
						register={register}
					/>
				);
			case 'multipletext':
				return (
					<MultipleTextQuestion
						key={i}
						data={question}
						registerMultipleQuestion={register}
						errors={errors}
						currentValues={currentValues}
						setValue={setValue}
						triggerMultipleQuestions={triggerMultipleQuestions}
					/>
				);
			default:
				return null;
		}
	});

	return questions;
}
