import { Controller, useForm } from 'react-hook-form';

import Select from 'components/Select';
import { StyledContactForm } from './styles';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // placeholder for now
  const URL = 'http://localhost:3000/example';

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const newData = {
      LastName: data.lastName,
      Email: data.email,
      Phone: data.phone,
      Reason: data.reason,
      Subject: data.subject,
      Message: data.message,
    };
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    });
  };

  return (
    <StyledContactForm className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form__row content-start flex-between">
        <div className="contact-form__wrapper">
          <input
            className={errors?.firstName && 'invalid'}
            {...register('firstName', {
              required: 'First name is required',
            })}
            placeholder="FIRST NAME"
          />
          {errors.firstName && (
            <p className="contact-form__validation-error">{errors.firstName.message}</p>
          )}
        </div>
        <div className="contact-form__wrapper">
          <input
            className={errors?.lastName && 'invalid'}
            {...register('lastName', {
              required: 'Last name is required',
            })}
            placeholder="LAST NAME"
          />
          {errors.lastName && (
            <p className="contact-form__validation-error">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="contact-form__row content-start flex-between">
        <div className="contact-form__wrapper">
          <input
            className={errors?.email && 'invalid'}
            {...register('email', {
              required: 'E-mail is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="E-MAIL"
          />
          {errors.email && <p className="contact-form__validation-error">{errors.email.message}</p>}
        </div>
        <div className="contact-form__wrapper">
          <input
            className={errors?.phone && 'invalid'}
            {...register('phone', {
              required: 'Phone is required',
              pattern: {
                value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                message: 'Invalid phone number',
              },
            })}
            placeholder="PHONE"
          />
          {errors.phone && <p className="contact-form__validation-error">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="contact-form__row contact-form__row--with-select content-start flex-between">
        <div className="contact-form__wrapper">
          <Controller
            name="reason"
            className={errors?.reason && 'invalid'}
            control={control}
            {...register('reason', { required: 'Reason is required' })}
            render={({ field: { onChange } }) => (
              <Select isInvalid={errors?.reason} onChange={onChange} variant="contact" />
            )}
          />
          {errors?.reason && (
            <p className="contact-form__validation-error">{errors.reason.message}</p>
          )}
        </div>
        <div className="contact-form__wrapper">
          <input
            className={errors?.subject && 'invalid'}
            {...register('subject', {
              required: 'Subject is required',
            })}
            placeholder="SUBJECT"
          />
          {errors.subject && (
            <p className="contact-form__validation-error">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="contact-form__wrapper contact-form__wrapper--textarea content-start">
        <textarea
          className={errors?.message && 'invalid'}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          placeholder="MESSAGE"
        />
        {errors.message && (
          <p className="contact-form__validation-error">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="contact-form__btn btn content-start">
        <div className="title-wrapper">
          <span>Send the message</span>
          <span>Send the message</span>
        </div>
      </button>
    </StyledContactForm>
  );
}
