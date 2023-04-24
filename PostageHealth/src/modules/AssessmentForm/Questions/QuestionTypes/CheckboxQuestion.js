import QuestionTemplate from '../QuestionTemplate';

export default function CheckboxQuestion({
	data,
	errors,
	register,
	currentValues,
}) {
	const inputName = data.name;
	return (
		<QuestionTemplate data={data} errors={errors}>
			{data.choices.map((choice, index) => (
				// eslint-disable-next-line jsx-a11y/label-has-associated-control
				<label key={index} className="checkbox-label">
					<input
						type="checkbox"
						{...register(inputName, {
							required: data.isRequired ? 'This question is required' : false,
						})}
						className="checkbox"
						name={data.name}
						value={choice.value || currentValues[inputName]}
					/>
					<span className="checkbox-custom" />
					<h5>{choice.text}</h5>
				</label>
			))}
		</QuestionTemplate>
	);
}
