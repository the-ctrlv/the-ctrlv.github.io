import Notification from '../Notification'
import { StyledBillionDollar } from './styles'
import { mockBillionIdea, mockBillionSolution } from './constants'

function BillionDollar() {
    return (
        <StyledBillionDollar>
            <div className="container">
                <div className="width-wrapper col-10">
                    <h2>{mockBillionIdea.title}</h2>
                    <img src={mockBillionIdea.image} alt="idea" className="w-100" />
                    {mockBillionIdea.description}
                    {mockBillionIdea.text}
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
                <div className="width-wrapper col-10">
                    {mockBillionSolution.title}
                    <img src={mockBillionSolution.image} alt="solution" className="w-100" />
                    {mockBillionSolution.description}
                    {mockBillionSolution.text}
                    {mockBillionSolution.text2}
                </div>

            </div>
        </StyledBillionDollar>
    )
}

export default BillionDollar