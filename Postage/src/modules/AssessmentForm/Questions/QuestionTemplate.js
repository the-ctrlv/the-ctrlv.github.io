import { useRef } from 'react';
import { getClassNames } from 'shared';
import { StyledQuestion } from '../styles';

export default function QuestionTemplate({ data, children, errors, isMultipleTextValid }) {
	const isDateInput = data.inputType === 'date';
	const isMultipleText = data.type === 'multipletext';

	const inputName = data.name;
	const questionIndex = data.name.match(/\d+/)[0];

	const question = useRef(null);

	return (
		<StyledQuestion
			ref={question}
			className={getClassNames(
				'question',
				questionIndex <= 4 ? 'content-start' : 'fadeIn',
				isDateInput && 'date-question'
			)}
			data-scroll
			id={`question${questionIndex}`}
		>
			<h3 className="question__title">
				{questionIndex}.{' '}{data.title}
				{data.isRequired && <span>*</span>}
			</h3>

			{children}

			{errors[inputName] && !isMultipleText && (
				<p className="error-message">
					{errors[inputName].message}
				</p>
			)}
			{!!Object.keys(errors).length && !isMultipleTextValid && isMultipleText && (
				<p className="error-message">
					Fill up all the fields
				</p>
			)}
		</StyledQuestion>
	);
}
