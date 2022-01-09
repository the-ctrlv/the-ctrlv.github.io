/* eslint-disable no-undef */
import propTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useFormspark } from '@formspark/use-formspark'
import EN from '../../shared/language/en.js'
import FR from '../../shared/language/fr.js'
import MokamSelect from './MokamSelect'
import { StyledGetInTouch } from './style'

const MokamForm = forwardRef((props, ref) => {
  const testForm = 'SlWG9IDL'
  const [submit, submitting] = useFormspark({
    formId: testForm,
  })
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = async (data, e) => {
    alert(JSON.stringify(data))
    e.preventDefault()
    await submit({
      Name: data.name,
      Phone: data.phone,
      Company: data.company,
      Designation: data.designation,
      Message: data.message,
    })
    window.location.href = `/#/${props.url}/thanks`
  }
  return (
    <StyledGetInTouch className="get-in-touch" ref={ref}>
      <div className="width-wrapper">
        {props.manufacturersForm ? (
          <h2>{props.english ? EN.getInTouch.title2 : FR.getInTouch.title2}</h2>
        ) : (
          <h2>{props.english ? EN.getInTouch.title : FR.getInTouch.title}</h2>
        )}

        <h4 className="subtitle">{props.english ? EN.getInTouch.subtitle : FR.getInTouch.subtitle}</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={errors?.name && 'invalid'}>
            {props.english ? EN.getInTouch.form.name : FR.getInTouch.form.name}
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder={props.english ? EN.getInTouch.form.nameholder : FR.getInTouch.form.nameholder}
            />
            {errors?.name && <p>{errors.name.message}</p>}
          </label>
          <label className={errors?.phone && 'invalid'}>
            {props.english ? EN.getInTouch.form.phone : FR.getInTouch.form.phone}
            <input
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^[0-9]{4,8}/,
                  message: 'Phone number must be numbers only',
                },
                minLength: {
                  value: 6,
                  message: 'Phone number must be minimum 6 digits',
                },
              })}
              placeholder={props.english ? EN.getInTouch.form.phoneholder : FR.getInTouch.form.phoneholder}
            />
            {errors?.phone && <p>{errors.phone.message}</p>}
          </label>
          {props.manufacturersForm && (
            <>
              <label className={errors?.company && 'invalid'}>
                {props.english ? EN.getInTouch.form.company : FR.getInTouch.form.company}
                <input
                  {...register('company', {
                    required: 'Company is required',
                  })}
                  type="text"
                  placeholder={props.english ? EN.getInTouch.form.companyholder : FR.getInTouch.form.companyholder}
                />
                {errors?.company && <p>{errors.company.message}</p>}
              </label>
              <label className={errors?.designation && 'invalid'}>
                {props.english ? EN.getInTouch.form.designation : FR.getInTouch.form.designation}
                <Controller
                  name="designation"
                  control={control}
                  render={({ field }) => (
                    <MokamSelect
                      {...field}
                      {...register('designation', { required: true })}
                      onChange={field.onChange}
                      english={props.english}
                    />
                  )}
                />
                {errors.designation && <p>Designation is required.</p>}
              </label>
            </>
          )}
          <label>
            {props.english ? EN.getInTouch.form.comment : FR.getInTouch.form.comment}
            <textarea
              name="text-message"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={props.english ? EN.getInTouch.form.commentholder : FR.getInTouch.form.commentholder}></textarea>
          </label>
          <div className="button-wrapper">
            <button className="mokam-button" type="submit" disabled={submitting}>
              {props.manufacturersForm
                ? props.english
                  ? EN.getInTouch.form.button2
                  : FR.getInTouch.form.button
                : props.english
                ? EN.getInTouch.form.button
                : FR.getInTouch.form.button}
            </button>
          </div>
        </form>
      </div>
    </StyledGetInTouch>
  )
})

MokamForm.displayName = 'MokamForm'
MokamForm.propTypes = {
  english: propTypes.bool,
  manufacturersForm: propTypes.bool,
  url: propTypes.string,
}

export default MokamForm
