import EN from '../../../shared/language/en.js'
import FR from '../../../shared/language/fr.js'
import { StyledMokamSelect } from './style'
// eslint-disable-next-line react/prop-types
export default function MokamSelect({ english, onChange, props }) {
  const options = [
    { value: EN.mokamSelectOptions.option1, label: english ? EN.mokamSelectOptions.option1 : FR.mokamSelectOptions.option1 },
    { value: EN.mokamSelectOptions.option2, label: english ? EN.mokamSelectOptions.option2 : FR.mokamSelectOptions.option2 },
    { value: EN.mokamSelectOptions.option3, label: english ? EN.mokamSelectOptions.option3 : FR.mokamSelectOptions.option3 },
    { value: EN.mokamSelectOptions.option4, label: english ? EN.mokamSelectOptions.option4 : FR.mokamSelectOptions.option4 },
    { value: EN.mokamSelectOptions.option5, label: english ? EN.mokamSelectOptions.option5 : FR.mokamSelectOptions.option5 },
    { value: EN.mokamSelectOptions.option6, label: english ? EN.mokamSelectOptions.option6 : FR.mokamSelectOptions.option6 },
    { value: EN.mokamSelectOptions.option7, label: english ? EN.mokamSelectOptions.option7 : FR.mokamSelectOptions.option7 },
    { value: EN.mokamSelectOptions.option8, label: english ? EN.mokamSelectOptions.option8 : FR.mokamSelectOptions.option8 },
    { value: EN.mokamSelectOptions.option9, label: english ? EN.mokamSelectOptions.option9 : FR.mokamSelectOptions.option9 },
    { value: EN.mokamSelectOptions.option10, label: english ? EN.mokamSelectOptions.option10 : FR.mokamSelectOptions.option10 },
    { value: EN.mokamSelectOptions.option11, label: english ? EN.mokamSelectOptions.option11 : FR.mokamSelectOptions.option11 },
    { value: EN.mokamSelectOptions.option12, label: english ? EN.mokamSelectOptions.option12 : FR.mokamSelectOptions.option12 },
    { value: EN.mokamSelectOptions.option13, label: english ? EN.mokamSelectOptions.option13 : FR.mokamSelectOptions.option13 },
    { value: EN.mokamSelectOptions.option14, label: english ? EN.mokamSelectOptions.option14 : FR.mokamSelectOptions.option14 },
    { value: EN.mokamSelectOptions.option15, label: english ? EN.mokamSelectOptions.option15 : FR.mokamSelectOptions.option15 },
    { value: EN.mokamSelectOptions.option16, label: english ? EN.mokamSelectOptions.option16 : FR.mokamSelectOptions.option16 },
    { value: EN.mokamSelectOptions.option17, label: english ? EN.mokamSelectOptions.option17 : FR.mokamSelectOptions.option17 },
    { value: EN.mokamSelectOptions.option18, label: english ? EN.mokamSelectOptions.option18 : FR.mokamSelectOptions.option18 },
    { value: EN.mokamSelectOptions.option19, label: english ? EN.mokamSelectOptions.option19 : FR.mokamSelectOptions.option19 },
    { value: EN.mokamSelectOptions.option20, label: english ? EN.mokamSelectOptions.option20 : FR.mokamSelectOptions.option20 },
    { value: EN.mokamSelectOptions.option21, label: english ? EN.mokamSelectOptions.option21 : FR.mokamSelectOptions.option21 },
    { value: EN.mokamSelectOptions.option22, label: english ? EN.mokamSelectOptions.option22 : FR.mokamSelectOptions.option22 },
    { value: EN.mokamSelectOptions.option23, label: english ? EN.mokamSelectOptions.option23 : FR.mokamSelectOptions.option23 },
    { value: EN.mokamSelectOptions.option24, label: english ? EN.mokamSelectOptions.option24 : FR.mokamSelectOptions.option24 },
    { value: EN.mokamSelectOptions.option25, label: english ? EN.mokamSelectOptions.option25 : FR.mokamSelectOptions.option25 },
    { value: EN.mokamSelectOptions.option26, label: english ? EN.mokamSelectOptions.option26 : FR.mokamSelectOptions.option26 },
    { value: EN.mokamSelectOptions.option27, label: english ? EN.mokamSelectOptions.option27 : FR.mokamSelectOptions.option27 },
  ]
  return (
    <StyledMokamSelect
      {...props}
      options={options}
      onChange={(obj) => {
        onChange(obj.value)
      }}
      placeholder={english ? EN.getInTouch.form.selectDesignation : FR.getInTouch.form.selectDesignation}
    />
  )
}
