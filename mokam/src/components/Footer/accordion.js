import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getClassNames, useWindowResize } from '../../functions'
import arrow from '../../assets/images/arrow.svg'
import { StyledAccordion } from './style'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  const [mobileView, setMobileView] = useState(null)
  const { width } = useWindowResize()
  const tapAndOpen = () => {
    if (mobileView) {
      setOpen(!open)
    }
  }

  useEffect(() => {
    setMobileView(width < 767)
  }, [width])

  return (
    <StyledAccordion>
      <div onClick={tapAndOpen} className="collapse-title">
        <h3>{title}</h3>
        {mobileView && <img src={arrow} alt="arrow" className={getClassNames(open && 'rotated')} />}
      </div>
      <div className={getClassNames('collapse-wrapper', open && 'opened')}>{children}</div>
    </StyledAccordion>
  )
}
Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
export default Accordion
