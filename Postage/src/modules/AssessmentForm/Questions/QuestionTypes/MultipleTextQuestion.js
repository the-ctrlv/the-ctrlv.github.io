/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getClassNames } from 'shared';
import QuestionTemplate from '../QuestionTemplate';

export default function MultipleTextQuestion({
	data,
	setValue,
	registerMultipleQuestion,
	currentValues,
	triggerMultipleQuestions,
}) {
	const [isMultipleTextValid, setIsMultipleTextValid] = useState(false);
	const [multipleTextValues, setMultipleTextValues] =
		useState(
			data.items.reduce((acc, item) => ({ ...acc, [item.name]: currentValues[data.name]?.[item.name] || '' }), {})
		);

	const {
		register,
		formState: { errors, isValid },
		trigger,
	} = useForm({
		mode: 'all',
	});
	useEffect(() => {
		registerMultipleQuestion(data.name, multipleTextValues);
	}, [multipleTextValues]);

	useEffect(() => {
		if (triggerMultipleQuestions) {
			console.log(triggerMultipleQuestions);
			trigger();
		}
	}, [triggerMultipleQuestions]);

	useEffect(() => {
		if (isValid) {
			setValue(data.name, multipleTextValues, { shouldValidate: true });
			setIsMultipleTextValid(true);
		} else {
			console.log('not valid');
			setValue(data.name, null, { shouldValidate: true });
			setIsMultipleTextValid(false);
		}
	}, [isValid, multipleTextValues]);

	return (
		<QuestionTemplate data={data} errors={errors} isMultipleTextValid={isMultipleTextValid}>
			{data.items.map((item) => (
				<label
					key={item.name}
					className={getClassNames(
						'multiple-text-label',
						errors[item.name] && 'multiple-text-label--error'
					)}
				>

					<input
						{...register(item.name, { required: 'This question is required' })}
						type="text"
						id={item.name}
						onChange={(e) => {
							setMultipleTextValues({ ...multipleTextValues, [item.name]: e.target.value });
						}}
						onFocus={() => {
							trigger();
						}}
						defaultValue={currentValues[data.name]?.[item.name] || undefined}
						placeholder={item.title}
					/>
					<h4>{item.title}:</h4>
				</label>
			))}

			<input type="hidden" {...registerMultipleQuestion(data.name, { required: true })} />
		</QuestionTemplate>
	);
}
