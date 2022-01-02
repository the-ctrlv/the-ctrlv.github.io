import { StyledMokamForm } from './style'

function MokamForm() {
  return (
    <StyledMokamForm>
      <label>
        Name
        <input type="text" placeholder="Enter name" />
      </label>
      <label>
        Phone number
        <input type="text" placeholder="Enter phone number" />
      </label>
      <label>
        Comment
        <textarea name="" id="" cols="30" rows="10" placeholder="Write comment here"></textarea>
      </label>
      <div className="button-wrapper">
        <button className="mokam-button" type="button">
          Submit
        </button>
      </div>
    </StyledMokamForm>
  )
}

export default MokamForm
