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
      <div className={getClassNames('w-100 mb-5 form-group', errors?.name && 'invalid')}>
        <label className='d-inline-block' for="firstName">First Name</label>
        <input
          id="firstName"
          {...register('name', {
            required: pretzelErrors.name,
            minLength: {
              value: 5,
              message: pretzelErrors.minLength,
            },
          })}
          className='w-100'
        />
        {errors?.name && <p className='validation-error'>{errors.name.message}</p>}
      </div>
      <div className={getClassNames('w-100 mb-5 form-group', errors?.lastName && 'invalid')}>
        <label for="LastName" className='d-inline-block'>Last Name</label>
        <input
          id="LastName"
          {...register('lastName', {
            required: pretzelErrors.lastName,
            minLength: {
              value: 5,
              message: pretzelErrors.minLengthLastName,
            },
          })}
          className='w-100'
        />
        {errors?.lastName && <p className='validation-error'>{errors.lastName.message}</p>}
      </div>
      <div className={getClassNames('w-100 mb-5 form-group', errors?.email && 'invalid')}>
        <label className='d-inline-block' for="email">Email Address</label>
        <input
          id="email"
          {...register('email', {
            required: pretzelErrors.email,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            },
          })}
          className='w-100'
        />
        {errors?.email && <p className='validation-error'>{errors.email.message}</p>}
      </div>
      <div className='w-100 text-center'>
        <button className="rounded btn border-0 fw-bold" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ModalForm;