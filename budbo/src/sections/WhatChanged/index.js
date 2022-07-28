import whatChangedImg from '../../assets/images/what-changed-image.png'
import Notification from '../../components/Notification'
import { StyledWhatChanged } from './styles'
import { mockOffers, mockTextContent } from './constants'

function WhatChanged() {
    return (
        <StyledWhatChanged>
            <div className="container">
                <div className="width-wrapper col-9">
                    {mockTextContent.title}
                    <img src={whatChangedImg} alt="what-changed" className='what-changed-img' />
                    <h3>{mockTextContent.subtitle}</h3>
                    <h4>{mockTextContent.subtitle2}</h4>
                    <ul className='offers'>
                        {mockOffers.map((offer, index) => (
                            <li key={index} className="d-flex align-items-center">
                                <img src={offer.logo} alt={index} className="me-4" />
                                {offer.text}
                            </li>
                        ))}
                    </ul>
                    {mockTextContent.text}
                </div>
                <Notification
                    title="So far, we’ve zoomed out so you can see the big picture."
                    description="Let’s zoom in on Budbo now so you can make an informed investment decision."
                    link="/"
                    linkText="Invest Now"
                />
            </div>
        </StyledWhatChanged>
    )
}

export default WhatChanged