import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import EN from '../../language/en.js'
import FR from '../../language/fr.js'
import { StyledMokamForm } from './style'

function MokamForm({ english }) {
  return (
    <StyledMokamForm>
      <label>
        {english ? EN.getInTouch.form.name : FR.getInTouch.form.name}
        <input type="text" placeholder="Enter name" />
      </label>
      <label>
        {english ? EN.getInTouch.form.phone : FR.getInTouch.form.phone}
        <input type="text" placeholder={english ? EN.getInTouch.form.phoneholder : FR.getInTouch.form.phoneholder} />
      </label>
      <label>
        {english ? EN.getInTouch.form.comment : FR.getInTouch.form.comment}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder={english ? EN.getInTouch.form.commentholder : FR.getInTouch.form.commentholder}></textarea>
      </label>
      <div className="button-wrapper">
        <Link className="mokam-button" to={'/thanks'}>
          Submit
        </Link>
      </div>
    </StyledMokamForm>
  )
}
MokamForm.propTypes = {
  english: propTypes.bool,
}

export default MokamForm
