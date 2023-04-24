import { useState } from 'react';
import QuestionTemplate from '../QuestionTemplate';

export default function RadioQuestion({
	data,
	currentValues,
	setValue,
	errors,
	register,
	currentPoints,
	setCurrentPoints,
}) {
	const inputName = data.name;
	const [isPointAdded, setIsPointAdded] = useState(false);
	return (
		<QuestionTemplate data={data} errors={errors}>
			{data.choices.map((choice, index) => (
				// eslint-disable-next-line jsx-a11y/label-has-associated-control
				<label key={index} className="radio-label">

					<input
						type="radio"
						{...register(inputName, {
							required: data.isRequired ? 'This question is required' : false,
						})}
						value={choice.value}
						points={data.points}
						defaultChecked={currentValues[inputName] === choice.value}
						name={inputName}
						onChange={(e) => {
							setValue(inputName, e.target.value, { shouldValidate: true });
							if (e.currentTarget.value === 'Item 1') {
								setCurrentPoints(currentPoints + Number(e.target.getAttribute('points')));
								setIsPointAdded(true);
							} else if (isPointAdded) {
								setCurrentPoints(currentPoints - Number(e.target.getAttribute('points')));
							}
						}}
					/>
					<span>{choice.text}</span>
				</label>
			))}
		</QuestionTemplate>
	);
}
