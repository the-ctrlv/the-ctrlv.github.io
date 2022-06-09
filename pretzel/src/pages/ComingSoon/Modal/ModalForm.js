import { useForm } from 'react-hook-form'

import { getClassNames } from '../../../shared/functions';

import './style.scss'

function ModalForm({ SetIsFormSubmitted }) {

  const { register, handleSubmit, control, formState: { errors }, } =
    useForm({ mode: 'onBlur', })


  const pretzelErrors = {
    name: 'Name is required',
    minLength: 'Name must be at least 5 characters',
    lastName: 'Last name is required',
    minLengthLastName: 'Last name must be at least 5 characters',
    email: 'Email is required',
    pattern: 'Email is not valid',
  }

  const onSubmit = async (data, e) => {
    e.preventDefault()
    console.log({
      'Name': data.name,
      'LastName': data.lastName,
      'Email': data.email,
    })
    SetIsFormSubmitted(true)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='modal-form px-4 px-md-0'>
      <label className={getClassNames('w-100', errors?.name && 'invalid')}>
        <span className='fw-bold d-inline-block'>First Name</span>
        <input
          {...register('name', {
            required: pretzelErrors.name,
            minLength: {
              value: 5,
              message: pretzelErrors.minLength,
            },
          })}
          className='w-100 mb-5'
        />
        {errors?.name && <p className='validation-error'>{errors.name.message}</p>}
      </label>
      <label className={getClassNames('w-100', errors?.name && 'invalid')}>
        <span className='fw-bold d-inline-block'>Last Name</span>
        <input
          {...register('lastName', {
            required: pretzelErrors.lastName,
            minLength: {
              value: 5,
              message: pretzelErrors.minLengthLastName,
            },
          })}
          className='w-100 mb-5'
        />
        {errors?.lastName && <p className='validation-error'>{errors.lastName.message}</p>}
      </label>
      <label className={getClassNames('w-100', errors?.name && 'invalid')}>
        <span className='fw-bold d-inline-block'>Email Address</span>
        <input
          {...register('email', {
            required: pretzelErrors.email,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            },
          })}
          className='w-100 mb-5'
        />
        {errors?.email && <p className='validation-error'>{errors.email.message}</p>}
      </label>
      <div className='w-100 text-center'>
        <button className="rounded btn border-0" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ModalForm;