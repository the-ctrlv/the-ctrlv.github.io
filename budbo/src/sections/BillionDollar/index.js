import Notification from '../Notification'
import { StyledBillionDollar } from './styles'

function BillionDollar() {
    return (
        <StyledBillionDollar>
            <div className="container">
                <div className="width-wrapper col-10">




                </div>
                <Notification
                    title="Gain Early Access to the Golden Age of Cannabis and Blockchain"
                    description="Become a part of a revolutionary concept, a business that brings together two
                         of the fastest-growing industries ever! Join Budbo and become part of a global movement 
                         that’s just budding. Invest today and reap the benefits for years to come!"
                    link="/"
                    linkText="Invest Now"
                    minimized
                />
            </div>
        </StyledBillionDollar>
    )
}

export default BillionDollar