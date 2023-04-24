import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

import moment from 'moment';
import QuestionTemplate from '../QuestionTemplate';

import 'react-datepicker/dist/react-datepicker.css';

export default function TextQuestion({
	data,
	errors,
	register,
	control,
}) {
	const inputName = data.name;
	const [startDate, setStartDate] = useState(null);
	const isDateInput = data.inputType === 'date';
	const validationPatterns = () => {
		switch (data.inputType) {
			case 'email':
				return {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: 'Invalid email address',
				};
			case 'tel':
				return {
					value: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
					message: 'Invalid phone number',
				};
			case 'date':
				return {
					value: /^\d{1,2}\/\d{1,2}\/\d{4}$/,
					message: 'Date must be in dd/mm/yyyy format',
				};
			default:
				return null;
		}
	};
	return (
		<QuestionTemplate data={data} errors={errors}>
			{isDateInput ? (
				<Controller
					control={control}
					name={inputName}
					render={({ field: { onChange } }) => (
						<ReactDatePicker
							showIcon
							dateFormat="yyyy/MM/dd"
							selected={startDate}
							onChange={(date) => {
								setStartDate(date);
								onChange(moment(date).format('DD/MM/YYYY'));
							}}
							placeholderText={data.title}
							popperPlacement="bottom-end"
						/>
					)}
					rules={{
						required: data.isRequired ? 'This question is required' : false,
						pattern: validationPatterns(),
					}}
					placeholder={data.title}
				/>
			) : (
				<input
					type="text"
					{...register(inputName, {
						required: data.isRequired ? 'This question is required' : false,
						pattern: validationPatterns(),
					})}
					className="text-input"
					placeholder={data.title}
				/>
			)}
		</QuestionTemplate>
	);
}
