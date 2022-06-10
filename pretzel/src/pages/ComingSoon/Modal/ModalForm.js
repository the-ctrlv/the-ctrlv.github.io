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
        <div className='label-wrapper'>
          <input
            id="firstName"
            {...register('name', {
              required: pretzelErrors.name,
              minLength: {
                value: 5,
                message: pretzelErrors.minLength,
              },
            })}
            placeholder=" "
            className='w-100'
          />
          <label className='d-inline' for="firstName">First Name</label>
        </div>
        {errors?.name && <p className='validation-error'>{errors.name.message}</p>}
      </div>
      <div className={getClassNames('w-100 mb-5 form-group', errors?.lastName && 'invalid')}>
        <div className='label-wrapper'>
          <input
            id="LastName"
            {...register('lastName', {
              required: pretzelErrors.lastName,
              minLength: {
                value: 5,
                message: pretzelErrors.minLengthLastName,
              },
            })}
            placeholder=" "
            className='w-100'
          />
          <label for="LastName" className='d-inline-block'>Last Name</label>
        </div>
        {errors?.lastName && <p className='validation-error'>{errors.lastName.message}</p>}
      </div>
      <div className={getClassNames('w-100 mb-5 form-group', errors?.email && 'invalid')}>
        <div className='label-wrapper'>
          <input
            id="email"
            {...register('email', {
              required: pretzelErrors.email,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              },
            })}
            placeholder=" "
            className='w-100' />
          <label className='d-inline-block' for="email">Email Address</label>
        </div>
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