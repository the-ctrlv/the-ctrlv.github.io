import EN from '../../../shared/language/en.js'
import FR from '../../../shared/language/fr.js'
import { StyledMokamSelect } from './style'
// eslint-disable-next-line react/prop-types
export default function MokamSelect({ english, onChange, props }) {
  const options = [
    { value: EN.values.option1, label: english ? EN.values.option1 : FR.values.option1 },
    { value: EN.values.option2, label: english ? EN.values.option2 : FR.values.option2 },
    { value: EN.values.option3, label: english ? EN.values.option3 : FR.values.option3 },
    { value: EN.values.option4, label: english ? EN.values.option4 : FR.values.option4 },
    { value: EN.values.option5, label: english ? EN.values.option5 : FR.values.option5 },
    { value: EN.values.option6, label: english ? EN.values.option6 : FR.values.option6 },
    { value: EN.values.option7, label: english ? EN.values.option7 : FR.values.option7 },
    { value: EN.values.option8, label: english ? EN.values.option8 : FR.values.option8 },
    { value: EN.values.option9, label: english ? EN.values.option9 : FR.values.option9 },
    { value: EN.values.option10, label: english ? EN.values.option10 : FR.values.option10 },
    { value: EN.values.option11, label: english ? EN.values.option11 : FR.values.option11 },
    { value: EN.values.option12, label: english ? EN.values.option12 : FR.values.option12 },
    { value: EN.values.option13, label: english ? EN.values.option13 : FR.values.option13 },
    { value: EN.values.option14, label: english ? EN.values.option14 : FR.values.option14 },
    { value: EN.values.option15, label: english ? EN.values.option15 : FR.values.option15 },
    { value: EN.values.option16, label: english ? EN.values.option16 : FR.values.option16 },
    { value: EN.values.option17, label: english ? EN.values.option17 : FR.values.option17 },
    { value: EN.values.option18, label: english ? EN.values.option18 : FR.values.option18 },
    { value: EN.values.option19, label: english ? EN.values.option19 : FR.values.option19 },
    { value: EN.values.option20, label: english ? EN.values.option20 : FR.values.option20 },
    { value: EN.values.option21, label: english ? EN.values.option21 : FR.values.option21 },
    { value: EN.values.option22, label: english ? EN.values.option22 : FR.values.option22 },
    { value: EN.values.option23, label: english ? EN.values.option23 : FR.values.option23 },
    { value: EN.values.option24, label: english ? EN.values.option24 : FR.values.option24 },
    { value: EN.values.option25, label: english ? EN.values.option25 : FR.values.option25 },
    { value: EN.values.option26, label: english ? EN.values.option26 : FR.values.option26 },
    { value: EN.values.option27, label: english ? EN.values.option27 : FR.values.option27 },
    { value: EN.values.option28, label: english ? EN.values.option28 : FR.values.option28 },
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
