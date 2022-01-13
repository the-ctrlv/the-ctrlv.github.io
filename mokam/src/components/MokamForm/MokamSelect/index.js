import { useTranslation } from 'react-i18next'
import { StyledMokamSelect } from './style'
// eslint-disable-next-line react/prop-types
export default function MokamSelect({ english, onChange, props }) {
  const { t } = useTranslation()
  const options = [
    { value: t('values.option1'), label: t('values.option1') },
    { value: t('values.option2'), label: t('values.option2') },
    { value: t('values.option3'), label: t('values.option3') },
    { value: t('values.option4'), label: t('values.option4') },
    { value: t('values.option5'), label: t('values.option5') },
    { value: t('values.option6'), label: t('values.option6') },
    { value: t('values.option7'), label: t('values.option7') },
    { value: t('values.option8'), label: t('values.option8') },
    { value: t('values.option9'), label: t('values.option9') },
    { value: t('values.option10'), label: t('values.option10') },
    { value: t('values.option11'), label: t('values.option11') },
    { value: t('values.option12'), label: t('values.option12') },
    { value: t('values.option13'), label: t('values.option13') },
    { value: t('values.option14'), label: t('values.option14') },
    { value: t('values.option15'), label: t('values.option15') },
    { value: t('values.option16'), label: t('values.option16') },
    { value: t('values.option17'), label: t('values.option17') },
    { value: t('values.option18'), label: t('values.option18') },
    { value: t('values.option19'), label: t('values.option19') },
    { value: t('values.option20'), label: t('values.option20') },
    { value: t('values.option21'), label: t('values.option21') },
    { value: t('values.option22'), label: t('values.option22') },
    { value: t('values.option23'), label: t('values.option23') },
    { value: t('values.option24'), label: t('values.option24') },
    { value: t('values.option25'), label: t('values.option25') },
    { value: t('values.option26'), label: t('values.option26') },
    { value: t('values.option27'), label: t('values.option27') },
    { value: t('values.option28'), label: t('values.option28') },
  ]
  return (
    <StyledMokamSelect
      {...props}
      options={options}
      onChange={(obj) => {
        onChange(obj.value)
      }}
      placeholder={t('getInTouch.form.selectDesignation')}
    />
  )
}
