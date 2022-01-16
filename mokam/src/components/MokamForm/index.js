/* eslint-disable no-undef */
import propTypes from 'prop-types'
import { forwardRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useFormspark } from '@formspark/use-formspark'
import { useTranslation } from 'react-i18next'
import MokamSelect from './MokamSelect'
import { StyledGetInTouch } from './style'

const MokamForm = forwardRef((props, ref) => {
  const testForm = 'h5Tzo1lt'
  const { t } = useTranslation()
  const [submit, submitting] = useFormspark({
    formId: testForm,
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })
  const mokamErrors = {
    name: t('errors.name'),
    phone: t('errors.phone'),
    company: t('errors.company'),
    designation: t('errors.designation'),
    comment: t('errors.comment'),
  }

  const onSubmit = async (data, e) => {
    e.preventDefault()
    await submit({
      Name: data.name,
      Phone: data.phone,
      Company: data.company,
      Designation: data.designation,
      Message: data.comment,
    })

    window.location.href = `/#/${props.url}/thanks`
  }
  return (
    <StyledGetInTouch className="get-in-touch" ref={ref}>
      <div className="width-wrapper">
        {props.manufacturersForm ? <h2>{t('getInTouch.title2')}</h2> : <h2>{t('getInTouch.title')}</h2>}

        <h4 className="subtitle">{t('getInTouch.subtitle')}</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={errors?.name && 'invalid'}>
            {t('getInTouch.form.name')}
            <input
              {...register('name', {
                required: mokamErrors.name,
                minLength: {
                  value: 5,
                  message: mokamErrors.name,
                },
              })}
              placeholder={t('getInTouch.form.nameholder')}
            />
            {errors?.name && <p>{errors.name.message}</p>}
          </label>
          <label className={errors?.phone && 'invalid'}>
            {t('getInTouch.form.phone')}
            <input
              {...register('phone', {
                required: mokamErrors.phone,
                pattern: {
                  value: /^[0-9]{4,8}/,
                  message: mokamErrors.phone,
                },
              })}
              placeholder={t('getInTouch.form.phoneholder')}
            />
            {errors?.phone && <p>{errors.phone.message}</p>}
          </label>
          {props.manufacturersForm && (
            <>
              <label className={errors?.company && 'invalid'}>
                {t('getInTouch.form.company')}
                <input
                  {...register('company', {
                    required: mokamErrors.company,
                    minLength: {
                      value: 5,
                      message: mokamErrors.company,
                    },
                  })}
                  type="text"
                  placeholder={t('getInTouch.form.companyholder')}
                />
                {errors?.company && <p>{errors.company.message}</p>}
              </label>
              <label className={errors?.designation && 'invalid'}>
                {t('getInTouch.form.designation')}
                <Controller
                  name="designation"
                  control={control}
                  render={({ field }) => (
                    <MokamSelect {...field} {...register('designation', { required: t('errors.designation') })} onChange={field.onChange} />
                  )}
                />
                {errors?.designation && <p>{errors.designation.message}</p>}
              </label>
            </>
          )}
          <label className={errors?.comment && 'invalid'}>
            {t('getInTouch.form.comment')}
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <textarea
                  cols="30"
                  rows="10"
                  placeholder={t('getInTouch.form.commentholder')}
                  {...field}
                  {...register('comment', {
                    required: mokamErrors.comment,
                    minLength: {
                      value: 20,
                      message: mokamErrors.comment,
                    },
                  })}
                />
              )}
            />
            {errors?.comment && <p>{errors.comment.message}</p>}
          </label>
          <div className="button-wrapper">
            <button className="mokam-button" type="submit" disabled={submitting}>
              {t('getInTouch.form.button')}
            </button>
          </div>
        </form>
      </div>
    </StyledGetInTouch>
  )
})

MokamForm.displayName = 'MokamForm'
MokamForm.propTypes = {
  manufacturersForm: propTypes.bool,
  url: propTypes.string,
}

export default MokamForm
