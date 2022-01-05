import propTypes from 'prop-types'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import { StyledGetInTouch } from './style'

const MokamForm = forwardRef((props, ref) => (
  <StyledGetInTouch className="get-in-touch" ref={ref}>
    <div className="width-wrapper">
      {props.manufacturersForm ? (
        <h2>{props.english ? EN.getInTouch.title2 : FR.getInTouch.title2}</h2>
      ) : (
        <h2>{props.english ? EN.getInTouch.title : FR.getInTouch.title}</h2>
      )}

      <h4 className="subtitle">{props.english ? EN.getInTouch.subtitle : FR.getInTouch.subtitle}</h4>
      <form>
        <label>
          {props.english ? EN.getInTouch.form.name : FR.getInTouch.form.name}
          <input type="text" placeholder="Enter name" />
        </label>
        <label>
          {props.english ? EN.getInTouch.form.phone : FR.getInTouch.form.phone}
          <input type="text" placeholder={props.english ? EN.getInTouch.form.phoneholder : FR.getInTouch.form.phoneholder} />
        </label>
        {props.manufacturersForm && (
          <>
            <label>
              {props.english ? EN.getInTouch.form.company : FR.getInTouch.form.company}
              <input type="text" placeholder={props.english ? EN.getInTouch.form.companyholder : FR.getInTouch.form.companyholder} />
            </label>
            <label>
              {props.english ? EN.getInTouch.form.designation : FR.getInTouch.form.designation}
              <input
                type="text"
                placeholder={props.english ? EN.getInTouch.form.designationholder : FR.getInTouch.form.designationholder}
              />
            </label>
          </>
        )}
        <label>
          {props.english ? EN.getInTouch.form.comment : FR.getInTouch.form.comment}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={props.english ? EN.getInTouch.form.commentholder : FR.getInTouch.form.commentholder}></textarea>
        </label>
        <div className="button-wrapper">
          <Link className="mokam-button" to={`/${props.url}/thanks`}>
            Submit
          </Link>
        </div>
      </form>
    </div>
  </StyledGetInTouch>
))
MokamForm.displayName = 'MokamForm'
MokamForm.propTypes = {
  english: propTypes.bool,
  manufacturersForm: propTypes.bool,
  url: propTypes.string,
}

export default MokamForm
