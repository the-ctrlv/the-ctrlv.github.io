import { Controller } from 'react-hook-form';
import Select from 'components/Select';
import QuestionTemplate from '../QuestionTemplate';

export default function DropdownQuestion({
	errors,
	register,
	currentValues,
	data,
	control,
}) {
	const inputName = data.name;
	const options = data.choices?.map((option) => ({ value: option, label: option }));
	return (
		<QuestionTemplate data={data} errors={errors}>
			<Controller
				name={inputName}
				className={errors?.inputName && 'invalid'}
				control={control}
				{...register(inputName, { required: 'Reason is required' })}
				render={({ field: { onChange } }) => (
					<Select
						variant="assessment"
						onChange={onChange}
						defaultValue={currentValues[inputName]?.value}
						isInvalid={errors?.inputName}
						assessmentOptions={options}
					/>
				)}
			/>
		</QuestionTemplate>
	);
}
