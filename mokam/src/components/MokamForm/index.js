import propTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import { useFormspark } from '@formspark/use-formspark'
import EN from '../../shared/language/en.js'
import FR from '../../shared/language/fr.js'
import { StyledGetInTouch } from './style'
import MokamSelect from './MokamSelect'

const MokamForm = forwardRef((props, ref) => {
  const RETAIL_ID = 'cJWgAjlY'
  const SUPPLIER_ID = 'YYUC7vxh'
  const [submit, submitting] = useFormspark({
    formId: props.manufacturersForm ? SUPPLIER_ID : RETAIL_ID,
  })

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [designation, setDesignation] = useState()

  const onSubmit = async (e) => {
    e.preventDefault()
    await submit({
      'Name:': name,
      'Phone:': phone,
      'Company:': company,
      'Designation:': designation,
      'Message:': message,
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
        <form onSubmit={onSubmit}>
          <label>
            {props.english ? EN.getInTouch.form.name : FR.getInTouch.form.name}
            <input name="name" value={name} type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            {props.english ? EN.getInTouch.form.phone : FR.getInTouch.form.phone}
            <input
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder={props.english ? EN.getInTouch.form.phoneholder : FR.getInTouch.form.phoneholder}
              required
            />
          </label>
          {props.manufacturersForm && (
            <>
              <label>
                {props.english ? EN.getInTouch.form.company : FR.getInTouch.form.company}
                <input
                  name="company"
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  placeholder={props.english ? EN.getInTouch.form.companyholder : FR.getInTouch.form.companyholder}
                  required
                />
              </label>
              <label>
                {props.english ? EN.getInTouch.form.designation : FR.getInTouch.form.designation}
                <MokamSelect english={props.english} designation={designation} setDesignation={setDesignation} />
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
