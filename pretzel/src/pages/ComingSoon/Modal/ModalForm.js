
import { Controller,useForm } from 'react-hook-form'

function ModalForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        mode: 'onBlur',
      })

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
        await submit({
          Name: data.name,
          Phone: data.phone,
          Company: data.company,
          Designation: data.designation,
          Message: data.comment,
        })
      }
      
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className={errors?.name && 'invalid'}>
              Name
              <input
                {...register('name', {
                  required: pretzelErrors.name,
                  minLength: {
                    value: 5,
                    message: pretzelErrors.minLength,
                  },
                })}
                placeholder="Name"
              />
              {errors?.name && <p>{errors.name.message}</p>}
            </label>
            <label className={errors?.name && 'invalid'}>
              Last Name
              <input
                {...register('lastName', {
                  required: pretzelErrors.lastName,
                  minLength: {
                    value: 5,
                    message: pretzelErrors.minLengthLastName,
                  },
                })}
                placeholder="Last Name"
              />
              {errors?.lastName && <p>{errors.lastName.message}</p>}
            </label>
            <label className={errors?.name && 'invalid'}>
              Email
              <input
                {...register('email', {
                  required: pretzelErrors.email,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address'
                  },
                })}
                placeholder="Name"
              />
              {errors?.email && <p>{errors.email.message}</p>}
            </label>
            <button className="mokam-button" type="submit">
              Submit
            </button>
            
        </form>
    );
}

export default ModalForm;

// const MokamForm = forwardRef((props, ref) => {
//     const testForm = 'h5Tzo1lt'
//     const { t } = useTranslation()
//     const [submit, submitting] = useFormspark({
//       formId: testForm,
//     })
//     const {
//       register,
//       handleSubmit,
//       control,
//       formState: { errors },
//     } = useForm({
//       mode: 'onBlur',
//     })
//     const mokamErrors = {
//       name: t('errors.name'),
//       phone: t('errors.phone'),
//       company: t('errors.company'),
//       designation: t('errors.designation'),
//       comment: t('errors.comment'),
//     }
  
//     const onSubmit = async (data, e) => {
//       e.preventDefault()
//       await submit({
//         Name: data.name,
//         Phone: data.phone,
//         Company: data.company,
//         Designation: data.designation,
//         Message: data.comment,
//       })
  
//       window.location.href = `/${props.url}/thanks/${props.currLang}`
//     }
//     return (
//       <StyledGetInTouch className="get-in-touch" ref={ref}>
//         <div className="width-wrapper">
//           {props.manufacturersForm ? <h2>{t('getInTouch.title2')}</h2> : <h2>{t('getInTouch.title')}</h2>}
  
//           <h4 className="subtitle">{t('getInTouch.subtitle')}</h4>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <label className={errors?.name && 'invalid'}>
//               {t('getInTouch.form.name')}
//               <input
//                 {...register('name', {
//                   required: mokamErrors.name,
//                   minLength: {
//                     value: 5,
//                     message: mokamErrors.name,
//                   },
//                 })}
//                 placeholder={t('getInTouch.form.nameholder')}
//               />
//               {errors?.name && <p>{errors.name.message}</p>}
//             </label>
//             <label className={errors?.phone && 'invalid'}>
//               {t('getInTouch.form.phone')}
//               <input
//                 {...register('phone', {
//                   required: mokamErrors.phone,
//                   pattern: {
//                     value: /^[0-9]{4,8}/,
//                     message: mokamErrors.phone,
//                   },
//                 })}
//                 placeholder={t('getInTouch.form.phoneholder')}
//               />
//               {errors?.phone && <p>{errors.phone.message}</p>}
//             </label>
//             {props.manufacturersForm && (
//               <>
//                 <label className={errors?.company && 'invalid'}>
//                   {t('getInTouch.form.company')}
//                   <input
//                     {...register('company', {
//                       required: mokamErrors.company,
//                       minLength: {
//                         value: 5,
//                         message: mokamErrors.company,
//                       },
//                     })}
//                     type="text"
//                     placeholder={t('getInTouch.form.companyholder')}
//                   />
//                   {errors?.company && <p>{errors.company.message}</p>}
//                 </label>
//                 <label className={errors?.designation && 'invalid'}>
//                   {t('getInTouch.form.designation')}
//                   <Controller
//                     name="designation"
//                     control={control}
//                     render={({ field }) => (
//                       <MokamSelect {...field} {...register('designation', { required: t('errors.designation') })} onChange={field.onChange} />
//                     )}
//                   />
//                   {errors?.designation && <p>{errors.designation.message}</p>}
//                 </label>
//               </>
//             )}
//             <label className={errors?.comment && 'invalid'}>
//               {t('getInTouch.form.comment')}
//               <Controller
//                 name="comment"
//                 control={control}
//                 render={({ field }) => (
//                   <textarea
//                     cols="30"
//                     rows="10"
//                     placeholder={t('getInTouch.form.commentholder')}
//                     {...field}
//                     {...register('comment', {
//                       required: mokamErrors.comment,
//                       minLength: {
//                         value: 20,
//                         message: mokamErrors.comment,
//                       },
//                     })}
//                   />
//                 )}
//               />
//               {errors?.comment && <p>{errors.comment.message}</p>}
//             </label>
//             <div className="button-wrapper">
//               <button className="mokam-button" type="submit" disabled={submitting}>
//                 {t('getInTouch.form.button')}
//               </button>
//             </div>
//           </form>
//         </div>
//       </StyledGetInTouch>
//     )
//   })