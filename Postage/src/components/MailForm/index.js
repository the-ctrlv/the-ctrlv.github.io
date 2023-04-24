import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { getClassNames } from 'shared';
import { StyledMailForm } from './styles';

export default function MailForm({ isNotification }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFormValid, setIsFormValid] = useState(isValid);
  const [sumbitError, setSubmitError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const buttonTitle = isNotification ? 'Subscribe' : 'Join the Mailing List';
  useEffect(() => {
    setIsFormValid(isValid);
    setSubmitError(false);
  }, [isValid]);

  useEffect(() => {
    reset({
      data: '',
    });
  }, [isSubmitSuccessful]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    setInputValue(data);
    setInputValue('');

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: inputValue }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.status === 201) {
      setIsFormSubmitted(true);
      setIsLoading(false);
    }

    return response;
  };

  return (
    <StyledMailForm onSubmit={handleSubmit(onSubmit)} className={isNotification && 'notification-mode'}>
      <div className="input-container">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <input
              id="email"
              className={getClassNames(
                isFormValid && 'valid',
                errors?.email && 'invalid',
                isFormSubmitted && 'submitted'
              )}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder={
                (isLoading && 'Submitting...') ||
                (isFormSubmitted && 'Submitted') ||
                (isNotification && 'E-mail') ||
                'Enter your email'
              }
              value={inputValue}
              onChange={(e) => {
                onChange(e);
                setInputValue(e.target.value);
              }}
            />
          )}
        />
        {errors?.email && <p className="validation-error">{errors.email.message}</p>}
        {sumbitError && <p className="validation-error">{sumbitError}</p>}
      </div>

      <button
        type="submit"
        className={getClassNames('btn', !isNotification && 'btn--black')}
        disabled={!isValid}
      >
        <div className="title-wrapper">
          <span>{isFormSubmitted ? 'Thank you!' : buttonTitle}</span>
          <span>{isFormSubmitted ? 'Thank you!' : buttonTitle}</span>
        </div>

      </button>
    </StyledMailForm>
  );
}
